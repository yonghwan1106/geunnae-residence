'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    moveInDate: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">문의가 접수되었습니다</h2>
          <p className="text-gray-600 mb-6">
            빠른 시간 내에 연락드리겠습니다.<br />
            급하신 경우 직접 전화 주세요.
          </p>
          <a
            href="tel:010-8993-1328"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            📞 010-8993-1328
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            임대 문의
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            근내리 레지던스 6평 원룸 임대에 관심이 있으시면 언제든 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">온라인 문의</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  성함 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="성함을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="010-0000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                  관심 원룸 타입
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">원룸 타입을 선택해주세요</option>
                  <option value="A타입">6평 원룸 A타입 (월세 50만원)</option>
                  <option value="B타입">6평 원룸 B타입 (월세 48만원)</option>
                  <option value="C타입">6평 원룸 C타입 (월세 52만원)</option>
                  <option value="미정">아직 미정</option>
                </select>
              </div>

              <div>
                <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700 mb-2">
                  희망 입주일
                </label>
                <input
                  type="date"
                  id="moveInDate"
                  name="moveInDate"
                  value={formData.moveInDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="문의하실 내용을 자유롭게 작성해주세요"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '문의하기'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">직접 연락</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">전화 문의</h3>
                    <a href="tel:010-8993-1328" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                      010-8993-1328
                    </a>
                    <p className="text-gray-600 text-sm">평일 9시 - 20시 (연중무휴)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">방문 상담</h3>
                    <p className="text-gray-600">경기도 평택시 객사리 162-82</p>
                    <p className="text-gray-600 text-sm">사전 예약 후 방문 가능</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">이메일</h3>
                    <p className="text-blue-600">info@geunnae-residence.com</p>
                    <p className="text-gray-600 text-sm">24시간 접수 가능</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">임대 조건 요약</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">월세 범위:</span>
                  <span className="font-medium">48만원 - 52만원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">관리비:</span>
                  <span className="font-medium">월 5만원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">중개수수료:</span>
                  <span className="font-medium">최대 11.15만원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">보증금:</span>
                  <span className="font-medium">별도 협의</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">할인 혜택</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 6개월 이상: 월세 5% 할인</li>
                  <li>• 1년 이상: 월세 10% 할인</li>
                  <li>• 미군/삼성 직원: 추가 혜택</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Q. 즉시 입주 가능한가요?</h3>
                  <p className="text-gray-600 text-sm">A. 현재 여러 호수가 준비되어 있어 즉시 입주 가능합니다. 전화로 확인해주세요.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Q. 주차 공간이 있나요?</h3>
                  <p className="text-gray-600 text-sm">A. 네, 실내주차장이 완비되어 있어 안전하고 편리하게 주차하실 수 있습니다.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Q. 가구는 포함되어 있나요?</h3>
                  <p className="text-gray-600 text-sm">A. 기본 가구(침대, 책상, 옷장)와 가전제품이 포함되어 있습니다.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Q. 최소 계약 기간은?</h3>
                  <p className="text-gray-600 text-sm">A. 중장기 임대로 최소 6개월부터 계약 가능하며, 장기 계약시 할인 혜택이 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}