import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* 装饰性边框线 */}
      <div className="fixed left-0 top-0 bottom-0 w-px bg-black/10 z-50" />
      <div className="fixed right-0 top-0 bottom-0 w-px bg-black/10 z-50" />

      {/* 导航栏 */}
      <nav className="border-b border-black/10 bg-cream/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/hakimi-alarm/logo.png" alt="哈基米闹钟" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-serif font-semibold">哈基米闹钟</span>
            </div>
            <a
              href="https://testflight.apple.com/join/JQukBwfd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-black/80 transition-colors text-sm font-medium"
            >
              立即下载
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full mb-8">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">智能闹钟</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
            节假日自动跳过的<br />
            智能闹钟
          </h1>
          <p className="text-xl text-black/60 mb-12 max-w-2xl">
            自动识别中国法定节假日和调休补班日，让你的工作日闹钟真正智能化，再也不用担心假期被吵醒
          </p>
          <div className="flex gap-4">
            <a
              href="https://testflight.apple.com/join/JQukBwfd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-colors font-medium"
            >
              TestFlight 测试
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white border border-black/10 rounded-full hover:border-black/20 transition-colors font-medium"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* Bento 网格功能展示 */}
      <section id="features" className="pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full mb-8">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">核心功能</span>
          </div>

          <h2 className="text-5xl font-serif font-bold mb-16">为什么选择哈基米闹钟</h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 大卡片 - 智能节假日识别 */}
            <div className="lg:col-span-2 bg-white border border-black/10 rounded-3xl p-10 relative overflow-hidden">
              {/* 装饰性斜线 */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)'
                }} />
              </div>

              <div className="text-6xl mb-6">🗓</div>
              <h3 className="text-3xl font-serif font-bold mb-4">智能节假日识别</h3>
              <p className="text-lg text-black/60 max-w-xl">
                自动识别国家法定节假日，包括春节、国庆等所有法定假期。同时智能识别调休补班日，确保工作日闹钟在需要时准确响起
              </p>
            </div>

            {/* 小卡片 - 七种重复模式 */}
            <div className="bg-white border border-black/10 rounded-3xl p-10">
              <div className="text-5xl mb-6">🔄</div>
              <h3 className="text-2xl font-serif font-bold mb-4">七种重复模式</h3>
              <ul className="space-y-2 text-black/60">
                <li>• 法定工作日</li>
                <li>• 法定节假日</li>
                <li>• 周一至周五</li>
                <li>• 每天重复</li>
                <li>• 指定日期</li>
                <li>• 自定义</li>
              </ul>
            </div>

            {/* 小卡片 - 稍后提醒 */}
            <div className="bg-black text-white rounded-3xl p-10">
              <div className="text-5xl mb-6">⏰</div>
              <h3 className="text-2xl font-serif font-bold mb-4">贴心稍后提醒</h3>
              <p className="text-white/80">
                支持 1-20 分钟延迟提醒，锁屏界面快捷操作，让你多睡一会儿
              </p>
            </div>

            {/* 中卡片 - Live Activity */}
            <div className="lg:col-span-2 bg-white border border-black/10 rounded-3xl p-10">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-serif font-bold mb-4">实时活动支持</h3>
              <p className="text-lg text-black/60 mb-4">
                集成 iOS Live Activity 功能，在锁屏界面和动态岛显示闹钟状态，暂停、停止、重复等操作一触即达
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-black/5 rounded-full text-sm">锁屏显示</span>
                <span className="px-3 py-1 bg-black/5 rounded-full text-sm">动态岛</span>
                <span className="px-3 py-1 bg-black/5 rounded-full text-sm">快捷操作</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-full mb-8">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="text-sm font-medium">用户评价</span>
          </div>

          <h2 className="text-5xl font-serif font-bold mb-16">大家都在用</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-black/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 mb-4">"终于不用担心国庆被闹钟吵醒了！节假日自动跳过功能太实用了"</p>
              <p className="text-sm text-black/40">— 张先生 上海</p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 mb-4">"调休补班日也能识别，比其他闹钟都智能，强烈推荐！"</p>
              <p className="text-sm text-black/40">— 李女士 北京</p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 mb-4">"界面简洁，功能强大，Live Activity 锁屏操作很方便"</p>
              <p className="text-sm text-black/40">— 王先生 广州</p>
            </div>
          </div>
        </div>
      </section>

      {/* 下载 CTA */}
      <section id="download" className="pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-3xl p-16 text-center relative overflow-hidden">
            {/* 装饰性斜线 */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, currentColor 15px, currentColor 16px)'
              }} />
            </div>

            <h2 className="text-5xl font-serif font-bold mb-6">参与 Beta 测试</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              加入 TestFlight 测试，体验智能闹钟的强大功能，帮助我们完善产品
            </p>
            <a
              href="https://testflight.apple.com/join/JQukBwfd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full hover:bg-white/90 transition-colors font-medium text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              加入 TestFlight
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-black/10 py-12 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/hakimi-alarm/logo.png" alt="哈基米闹钟" className="w-8 h-8 rounded-lg" />
                <span className="font-serif font-semibold">哈基米闹钟</span>
              </div>
              <Link to="/privacy" className="text-sm text-black/60 hover:text-black">隐私政策</Link>
            </div>
            <p className="text-sm text-black/40">© 2025 Wang Hongwei · 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
