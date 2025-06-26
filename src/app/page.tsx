'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const heroSlides = [
  {
    image: '/images/rooms/room1.jpg',
    title: '객사리 레지던스',
    subtitle: '평택 객사리의 안정적인 중장기 월세 원룸',
    description: '미군기지와 삼성전자 근무자를 위한 최적의 주거공간'
  },
  {
    image: '/images/rooms/room14.jpg',
    title: '편리한 교통',
    subtitle: '3개 버스정류장 도보 4분 거리',
    description: '미군기지 15분, 삼성전자 20분 접근'
  },
  {
    image: '/images/rooms/room11.jpg',
    title: '완벽한 시설',
    subtitle: '실내주차장과 생활편의시설 완비',
    description: '6평 원룸 20세대의 안정적인 건물'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                임대 문의하기
              </Link>
              <Link
                href="/rooms"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                원룸 둘러보기
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">객사리 레지던스 특징</h2>
            <p className="text-lg text-gray-600">미군기지와 삼성전자 근무자들을 위한 최적의 중장기 거주 환경</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">안정적인 중장기 임대</h3>
              <p className="text-gray-600">월세 중심의 안정적인 임대 서비스로 장기 거주에 최적화</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">교통 접근성</h3>
              <p className="text-gray-600">4분 거리 3개 버스정류장, 부용초등학교 도보 10분 이내</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">생활 편의시설</h3>
              <p className="text-gray-600">실내주차장, 편의점 5분, 초이리테일 차량 5분</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6평 원룸 안내</h2>
            <p className="text-lg text-gray-600">깔끔하고 편안한 6평 원룸 3가지 타입</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/rooms/room1.jpg"
                alt="6평 원룸 A타입"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">6평 원룸 A타입</h3>
                <p className="text-gray-600 mb-4">깨끗하고 모던한 인테리어의 6평 원룸으로 1인 거주에 최적화</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">월세 50만원</span>
                  <Link href="/rooms" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/rooms/room6.jpg"
                alt="6평 원룸 B타입"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">6평 원룸 B타입</h3>
                <p className="text-gray-600 mb-4">실용적인 구조의 6평 원룸으로 장기 거주에 편리한 구조</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">월세 48만원</span>
                  <Link href="/rooms" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/rooms/room11.jpg"
                alt="6평 원룸 C타입"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">6평 원룸 C타입</h3>
                <p className="text-gray-600 mb-4">채광이 좋은 6평 원룸으로 쾌적한 주거환경을 제공</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">월세 52만원</span>
                  <Link href="/rooms" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 바로 임대 문의하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            안정적인 중장기 거주를 위한 최적의 선택
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              임대 문의하기
            </Link>
            <a
              href="tel:010-8993-1328"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 010-8993-1328
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
