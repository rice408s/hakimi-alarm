import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">⏰ 哈基米闹钟</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary transition">功能特点</a>
              <a href="#screenshots" className="text-gray-700 hover:text-primary transition">应用截图</a>
              <a href="#download" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition">立即下载</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">功能特点</a>
            <a href="#screenshots" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">应用截图</a>
            <a href="#download" className="block px-4 py-2 text-primary font-semibold">立即下载</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            智能工作日闹钟<br />
            <span className="text-primary">节假日自动跳过</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            告别假期被闹钟吵醒的尴尬，自动识别法定节假日和调休补班日
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#download" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition shadow-lg">
              App Store 下载
            </a>
            <a href="#features" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition border-2 border-primary">
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">核心功能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🗓</div>
              <h3 className="text-2xl font-bold mb-4">智能节假日识别</h3>
              <p className="text-gray-600">自动识别国家法定节假日，智能识别调休补班日</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">七种重复模式</h3>
              <p className="text-gray-600">法定工作日、每天、周一至周五等，满足各种需求</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4">贴心稍后提醒</h3>
              <p className="text-gray-600">支持1-20分钟延迟，锁屏快捷操作</p>
            </div>
          </div>
        </div>
      </section>

      {/* 下载 */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">立即下载哈基米闹钟</h2>
          <p className="text-xl mb-8">开启智能作息新生活</p>
          <a href="https://apps.apple.com" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition inline-block">
            📱 App Store 下载
          </a>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 哈基米闹钟 · Wang Hongwei</p>
        </div>
      </footer>
    </div>
  )
}

export default App
