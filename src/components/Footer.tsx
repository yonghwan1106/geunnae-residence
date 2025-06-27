export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">객사리 레지던스</h3>
            <p className="text-gray-300 mb-4">
              평택 객사리의 안정적인 중장기 월세 원룸
            </p>
            <p className="text-gray-300 text-sm">
              미군기지와 삼성전자 근무자를 위한 최적의 거주공간
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 경기도 평택시 팽성읍 객사리 164-82</p>
              <p>📞 010-8993-1328</p>
              <p>✉️ dragonguy628@gmail.com</p>
              <p>🕐 평일 9시 - 20시</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <div className="space-y-2">
              <div><a href="/rooms" className="text-gray-300 hover:text-white transition-colors">원룸 안내</a></div>
              <div><a href="/location" className="text-gray-300 hover:text-white transition-colors">위치 안내</a></div>
              <div><a href="/contact" className="text-gray-300 hover:text-white transition-colors">임대 문의</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 객사리 레지던스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
