import Image from 'next/image'
import Link from 'next/link'

const rooms = [
  {
    id: 1,
    name: '6평 원룸 A타입',
    monthlyRent: 500000,
    images: [
      '/images/rooms/room1.jpg',
      '/images/rooms/room2.jpg',
      '/images/rooms/room3.jpg',
      '/images/rooms/room4.jpg',
      '/images/rooms/room5.jpg',
    ],
    features: [
      '1인 거주 최적화',
      '원룸 구조 (20㎡)',
      '개별 화장실',
      '미니 주방 (인덕션, 냉장고)',
      '에어컨/난방 완비',
      '실내주차장 이용',
    ],
    amenities: [
      '기본 가전제품 완비',
      '무료 Wi-Fi',
      '세탁기 공용 이용',
      '정수기',
      '기본 가구 (침대, 책상, 옷장)',
      '보안카드 출입',
    ],
    description: '깨끗하고 모던한 인테리어의 6평 원룸으로 1인 거주에 최적화되어 있습니다. 미군기지와 삼성전자 근무자들에게 인기가 높습니다.',
    size: '6평 (20㎡)',
    maxOccupants: 1,
  },
  {
    id: 2,
    name: '6평 원룸 B타입',
    monthlyRent: 480000,
    images: [
      '/images/rooms/room6.jpg',
      '/images/rooms/room7.jpg',
      '/images/rooms/room8.jpg',
      '/images/rooms/room9.jpg',
      '/images/rooms/room10.jpg',
    ],
    features: [
      '실용적인 구조',
      '장기 거주 편의성',
      '수납공간 최적화',
      '채광 우수',
      '조용한 환경',
      '대중교통 접근 용이',
    ],
    amenities: [
      '기본 생활가전',
      '무료 인터넷',
      '실내주차장',
      '보안시설 완비',
      '편의점 도보 5분',
      '버스정류장 도보 4분',
    ],
    description: '실용적인 구조의 6평 원룸으로 장기 거주에 편리한 구조입니다. 가성비가 뛰어나며 교통 접근성이 우수합니다.',
    size: '6평 (20㎡)',
    maxOccupants: 1,
  },
  {
    id: 3,
    name: '6평 원룸 C타입',
    monthlyRent: 520000,
    images: [
      '/images/rooms/room11.jpg',
      '/images/rooms/room12.jpg',
      '/images/rooms/room13.jpg',
      '/images/rooms/room14.jpg',
      '/images/rooms/room1.jpg',
    ],
    features: [
      '채광이 우수한 남향',
      '프리미엄 인테리어',
      '넓은 발코니',
      '고급 마감재',
      '조용한 위치',
      '전망 우수',
    ],
    amenities: [
      '프리미엄 가전제품',
      '고속 인터넷',
      '개별 세탁기',
      '대형 냉장고',
      '에어컨 2대',
      '고급 가구',
    ],
    description: '채광이 좋은 6평 원룸으로 쾌적한 주거환경을 제공합니다. 프리미엄 옵션으로 최고급 시설을 갖추고 있습니다.',
    size: '6평 (20㎡)',
    maxOccupants: 1,
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            근내리 레지던스 원룸 안내
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6평 규모의 깨끗하고 편안한 원룸을 제공합니다. 중장기 거주에 최적화된 공간을 선택하세요.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              {/* Room Image */}
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {room.images.length}장
                </div>
              </div>

              {/* Room Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {room.name}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-4">📏 {room.size}</span>
                      <span>👤 {room.maxOccupants}인 거주</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">
                      ₩{room.monthlyRent.toLocaleString()}
                    </span>
                    <div className="text-sm text-gray-500">/ 월세</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {room.description}
                </p>

                {/* Quick Features */}
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {room.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    임대 문의
                  </Link>
                  <a
                    href="tel:010-8993-1328"
                    className="flex-1 text-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    전화 문의
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            근내리 레지던스 공통 혜택
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold mb-2">안정적인 거주환경</h3>
              <p className="text-gray-600 text-sm">
                14년차 건물의 안정된 시설과 관리
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-semibold mb-2">실내주차장 완비</h3>
              <p className="text-gray-600 text-sm">
                안전하고 편리한 실내주차 공간 제공
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🚌</div>
              <h3 className="font-semibold mb-2">대중교통 편리</h3>
              <p className="text-gray-600 text-sm">
                3개 버스정류장 도보 4분, 교통 접근성 우수
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">임대 조건 안내</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">할인 혜택</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 6개월 이상 계약: 월세 5% 할인</li>
                <li>• 1년 이상 계약: 월세 10% 할인</li>
                <li>• 미군 근무자: 장기계약시 우대조건</li>
                <li>• 삼성전자 직원: 월세 5% 할인</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">임대 비용</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 월세: 48만원 - 52만원</li>
                <li>• 보증금: 별도 협의</li>
                <li>• 중개수수료: 최대 11.15만원 (VAT별도)</li>
                <li>• 관리비: 월 5만원 (공용전기, 수도)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}