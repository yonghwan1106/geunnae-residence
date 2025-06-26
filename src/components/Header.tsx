'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">객사리 레지던스</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              홈
            </Link>
            <Link href="/rooms" className="text-gray-700 hover:text-blue-600 transition-colors">
              원룸 안내
            </Link>
            <Link href="/location" className="text-gray-700 hover:text-blue-600 transition-colors">
              위치 안내
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              연락처
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              임대 문의
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700">홈</Link>
              <Link href="/rooms" className="block px-3 py-2 text-gray-700">원룸 안내</Link>
              <Link href="/location" className="block px-3 py-2 text-gray-700">위치 안내</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700">연락처</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}