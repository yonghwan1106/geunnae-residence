import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '근내리 레지던스 - 평택 객사리 6평 원룸 월세',
  description: '평택 객사리 162-82에 위치한 근내리 레지던스. 미군기지와 삼성전자 근무자를 위한 6평 원룸 중장기 월세. 실내주차장, 대중교통 편리.',
  keywords: '평택 원룸, 객사리 월세, 미군 숙소, 삼성전자 숙소, 6평 원룸, 실내주차',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
