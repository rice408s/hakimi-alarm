import { Link } from 'react-router-dom'

function Privacy() {
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
            <Link
              to="/"
              className="px-6 py-2.5 bg-white border border-black/10 rounded-full hover:border-black/20 transition-colors text-sm font-medium"
            >
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* 隐私政策内容 */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-8">隐私政策</h1>
          <p className="text-black/40 mb-16">最后更新：2025年1月</p>

          <div className="space-y-12">
            {/* 概述 */}
            <section className="bg-white border border-black/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-4">概述</h2>
              <p className="text-black/70 leading-relaxed">
                哈基米闹钟（以下简称"本应用"）尊重并保护所有使用服务用户的个人隐私权。本隐私政策说明了我们如何收集、使用、存储和保护您的信息。
              </p>
            </section>

            {/* 信息收集 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">1. 信息收集</h2>
              <div className="space-y-6">
                <div className="bg-white border border-black/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-3">1.1 我们收集的信息</h3>
                  <p className="text-black/70 leading-relaxed mb-4">
                    本应用是一款完全本地化运行的闹钟应用，我们<strong>不会收集、存储或传输</strong>您的任何个人信息，包括但不限于：
                  </p>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>个人身份信息（姓名、邮箱、电话号码等）</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>设备信息和标识符</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>位置信息</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>使用数据和分析信息</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-black/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-3">1.2 本地存储的数据</h3>
                  <p className="text-black/70 leading-relaxed mb-4">
                    所有数据均存储在您的设备本地，包括：
                  </p>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>闹钟设置（时间、重复模式、铃声等）</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>应用偏好设置</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>节假日数据缓存</span>
                    </li>
                  </ul>
                  <p className="text-black/70 leading-relaxed mt-4">
                    这些数据仅存储在您的设备上，不会上传到任何服务器。
                  </p>
                </div>
              </div>
            </section>

            {/* 日历访问 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">2. 日历访问</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3">2.1 节假日数据获取</h3>
                <p className="text-black/70 leading-relaxed mb-4">
                  为实现节假日识别功能，本应用会从您设备的本地日历获取中国法定节假日和调休信息：
                </p>
                <ul className="space-y-2 text-black/70">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>仅读取本地日历中的节假日事件数据</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>不会访问您的个人日程、会议或其他私人事件</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>不会修改或删除任何日历数据</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>所有数据处理均在本地完成，不涉及网络传输</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 数据使用 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">3. 数据使用</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed">
                  本应用的所有功能均在本地运行，您的闹钟设置和偏好仅用于：
                </p>
                <ul className="space-y-2 text-black/70 mt-4">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>在指定时间触发闹钟</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>根据节假日数据决定是否跳过闹钟</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>显示 Live Activity 实时活动</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>提供应用内的各项功能</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 第三方服务 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">4. 第三方服务</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed mb-4">
                  本应用<strong>不使用</strong>任何第三方分析、广告或追踪服务，包括但不限于：
                </p>
                <ul className="space-y-2 text-black/70">
                  <li className="flex gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Facebook SDK</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">✗</span>
                    <span>广告网络</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">✗</span>
                    <span>崩溃报告服务</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 权限说明 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">5. 权限说明</h2>
              <div className="space-y-4">
                <div className="bg-white border border-black/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-3">通知权限</h3>
                  <p className="text-black/70 leading-relaxed">
                    用于在闹钟时间到达时向您发送通知。此权限是闹钟应用的核心功能所必需的。
                  </p>
                </div>

                <div className="bg-white border border-black/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-3">日历权限</h3>
                  <p className="text-black/70 leading-relaxed">
                    用于读取本地日历中的节假日信息，以实现智能跳过节假日功能。仅读取节假日相关事件，不访问个人日程。
                  </p>
                </div>

                <div className="bg-white border border-black/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-3">后台刷新</h3>
                  <p className="text-black/70 leading-relaxed">
                    用于在后台准备闹钟触发和更新节假日数据缓存，确保闹钟准时响起。
                  </p>
                </div>
              </div>
            </section>

            {/* 数据安全 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">6. 数据安全</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed mb-4">
                  您的数据安全对我们至关重要：
                </p>
                <ul className="space-y-2 text-black/70">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>所有数据均存储在您的设备本地，受 iOS 系统安全保护</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>如果您启用了 iCloud 备份，您的闹钟设置可能会随系统备份到 iCloud</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>卸载应用将删除所有本地存储的数据</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 儿童隐私 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">7. 儿童隐私</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed">
                  本应用不会有意收集 13 岁以下儿童的个人信息。事实上，本应用不收集任何年龄段用户的个人信息。
                </p>
              </div>
            </section>

            {/* 隐私政策变更 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">8. 隐私政策变更</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed">
                  我们可能会不时更新本隐私政策。任何变更将在此页面发布，重大变更会通过应用内通知告知您。建议您定期查看本页面以了解最新的隐私政策。
                </p>
              </div>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">9. 联系我们</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed mb-4">
                  如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：
                </p>
                <p className="text-black/70">
                  邮箱：<a href="mailto:support@hakimi-alarm.com" className="underline hover:text-black">support@hakimi-alarm.com</a>
                </p>
              </div>
            </section>

            {/* 您的权利 */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">10. 您的权利</h2>
              <div className="bg-white border border-black/10 rounded-2xl p-8">
                <p className="text-black/70 leading-relaxed mb-4">
                  由于本应用不收集您的个人信息，您完全掌控所有数据：
                </p>
                <ul className="space-y-2 text-black/70">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>所有数据存储在您的设备上，您可以随时通过卸载应用删除所有数据</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>您可以在设备的设置中管理应用权限</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>您可以在应用内删除或修改任何闹钟设置</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* 底部强调 */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">隐私承诺</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              哈基米闹钟承诺永远不会收集、存储或分享您的个人信息。您的隐私是我们的首要考虑。
            </p>
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

export default Privacy
