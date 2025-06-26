'use client'

import { useEffect } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => any;
        Map: new (container: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        services: {
          Status: {
            OK: string;
          };
          Geocoder: new () => any;
        };
      };
    };
  }
}

export default function LocationPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map')
        if (!container) return
        
        const options = {
          center: new window.kakao.maps.LatLng(37.0, 127.0), // 임시 중심점
          level: 3
        }

        const map = new window.kakao.maps.Map(container, options)

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder()

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('경기도 평택시 객사리 162-82', function(result: { x: string; y: string }[], status: string) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(parseFloat(result[0].y), parseFloat(result[0].x))

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords)

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            })

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;"><strong>객사리 레지던스</strong><br/>경기도 평택시 객사리 162-82</div>'
            })
            infowindow.open(map, marker)
          } else {
            // 주소 검색 실패시 대체 좌표 사용 (평택시청 근처)
            const coords = new window.kakao.maps.LatLng(36.9922, 127.1116)
            map.setCenter(coords)
            
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            })

            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;"><strong>객사리 레지던스</strong><br/>평택시 객사리 162-82<br/>(대략적 위치)</div>'
            })
            infowindow.open(map, marker)
          }
        })
      })
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            위치 안내
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            평택 객사리 162-82에 위치한 객사리 레지던스는 미군기지와 삼성전자 접근이 용이한 최적의 입지입니다.
          </p>
        </div>

        {/* Building Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">건물 정보</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">📍</span>
                <div>
                  <h3 className="font-semibold text-gray-900">주소</h3>
                  <p className="text-gray-600">경기도 평택시 객사리 162-82</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">🏠</span>
                <div>
                  <h3 className="font-semibold text-gray-900">건물 규모</h3>
                  <p className="text-gray-600">총 20세대, 14년차 안정적인 건물</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">📐</span>
                <div>
                  <h3 className="font-semibold text-gray-900">원룸 크기</h3>
                  <p className="text-gray-600">6평 (20㎡) 구조의 1인 최적화 공간</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">🚗</span>
                <div>
                  <h3 className="font-semibold text-gray-900">주차시설</h3>
                  <p className="text-gray-600">실내주차장 완비 (안전하고 편리)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kakao Map */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">지도</h2>
            <div id="kakao-map" className="w-full h-96 rounded-lg border-2 border-gray-200"></div>
          </div>
        </div>

        {/* Transportation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">교통 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">버스 정류장</h3>
              <p className="text-gray-600 text-sm">3개 정류장</p>
              <p className="text-blue-600 font-medium">도보 4분</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">부용초등학교</h3>
              <p className="text-gray-600 text-sm">교육시설</p>
              <p className="text-green-600 font-medium">도보 10분</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">미군기지</h3>
              <p className="text-gray-600 text-sm">평택 캠프 험프리스</p>
              <p className="text-purple-600 font-medium">차량 15분</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">삼성전자</h3>
              <p className="text-gray-600 text-sm">평택 캠퍼스</p>
              <p className="text-yellow-600 font-medium">차량 20분</p>
            </div>
          </div>
        </div>

        {/* Nearby Facilities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">주변 편의시설</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🛒</span>
                생활편의
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>편의점</span>
                  <span className="text-blue-600">도보 5분</span>
                </li>
                <li className="flex justify-between">
                  <span>초이리테일 (대형마트)</span>
                  <span className="text-blue-600">차량 5분</span>
                </li>
                <li className="flex justify-between">
                  <span>은행/ATM</span>
                  <span className="text-blue-600">도보 7분</span>
                </li>
                <li className="flex justify-between">
                  <span>약국</span>
                  <span className="text-blue-600">도보 8분</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🍽️</span>
                음식점
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>한식당</span>
                  <span className="text-blue-600">도보 5분</span>
                </li>
                <li className="flex justify-between">
                  <span>카페</span>
                  <span className="text-blue-600">도보 6분</span>
                </li>
                <li className="flex justify-between">
                  <span>치킨/피자</span>
                  <span className="text-blue-600">도보 7분</span>
                </li>
                <li className="flex justify-between">
                  <span>분식점</span>
                  <span className="text-blue-600">도보 8분</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🏥</span>
                의료시설
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>백애병원</span>
                  <span className="text-blue-600">차량 13분</span>
                </li>
                <li className="flex justify-between">
                  <span>동네 의원</span>
                  <span className="text-blue-600">도보 10분</span>
                </li>
                <li className="flex justify-between">
                  <span>치과</span>
                  <span className="text-blue-600">도보 12분</span>
                </li>
                <li className="flex justify-between">
                  <span>응급실</span>
                  <span className="text-blue-600">차량 15분</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Benefits */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">입지 장점</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-blue-600 text-xl mr-3 mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">미군 근무자 최적</h3>
                <p className="text-gray-600 text-sm">평택 캠프 험프리스 접근 용이, 출퇴근 편리</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-blue-600 text-xl mr-3 mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">삼성전자 직원 선호</h3>
                <p className="text-gray-600 text-sm">평택 캠퍼스 근거리, 교통비 절약</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-blue-600 text-xl mr-3 mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">대중교통 편리</h3>
                <p className="text-gray-600 text-sm">3개 버스 정류장 도보 4분, 서울 접근 용이</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-blue-600 text-xl mr-3 mt-1">✅</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">생활 인프라 완비</h3>
                <p className="text-gray-600 text-sm">편의점, 마트, 병원 등 필수시설 근거리</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            방문 상담 및 현장 안내 문의
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              온라인 문의
            </a>
            <a
              href="tel:010-8993-1328"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              📞 010-8993-1328
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}