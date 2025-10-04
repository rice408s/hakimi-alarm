# GitHub Pages 部署指南

## 🎯 启用 GitHub Pages

你的代码已经成功推送，但需要在 GitHub 上启用 Pages 功能。

### 📋 操作步骤：

1. **打开仓库设置**
   - 访问：https://github.com/rice408s/hakimi-alarm
   - 点击仓库顶部的 **Settings**（设置）

2. **找到 Pages 设置**
   - 在左侧菜单中找到 **Pages**
   - 或直接访问：https://github.com/rice408s/hakimi-alarm/settings/pages

3. **配置 Pages**
   - **Source**（源）：选择 **Deploy from a branch**
   - **Branch**（分支）：
     - 选择 `gh-pages` 分支
     - 文件夹选择 `/ (root)`
   - 点击 **Save**（保存）

4. **等待部署**
   - 保存后，GitHub 会自动部署
   - 大约需要 1-3 分钟
   - 页面顶部会显示：
     ```
     ✓ Your site is live at https://rice408s.github.io/hakimi-alarm/
     ```

5. **访问网站**
   - 部署完成后访问：https://rice408s.github.io/hakimi-alarm/

## 🔄 更新网站

以后如果要更新网站内容：

```bash
# 1. 修改代码后
cd /Users/aro/code/hakimi/hakimi-website

# 2. 提交更改
git add .
git commit -m "Update website"
git push

# 3. 重新部署
pnpm run deploy
```

## ✅ 验证部署

部署成功后，你应该能看到：
- 导航栏：哈基米闹钟 logo
- Hero 区域：大标题和下载按钮
- 功能特点：6 个功能卡片
- 蓝色渐变的下载区域

## 🐛 故障排除

### 如果显示 404：
1. 确认已在 Settings → Pages 中启用
2. 确认选择了 `gh-pages` 分支
3. 等待 2-3 分钟让 GitHub 完成部署
4. 强制刷新浏览器（Ctrl+Shift+R 或 Cmd+Shift+R）

### 如果样式不正常：
1. 检查浏览器控制台是否有错误
2. 确认 `vite.config.js` 中的 `base: '/hakimi-alarm/'` 配置正确
3. 清除浏览器缓存后重试

## 📱 在 App Store 中使用

部署成功后，在 App Store Connect 中：
- **Support URL**：`https://rice408s.github.io/hakimi-alarm/`
- **Marketing URL**：`https://rice408s.github.io/hakimi-alarm/`

## 🚀 下一步优化

1. **添加子页面**
   - 创建 `/privacy` 隐私政策页
   - 创建 `/support` 帮助支持页

2. **添加真实截图**
   - 替换占位内容为真实应用截图

3. **SEO 优化**
   - 添加 meta 标签
   - 创建 sitemap.xml

4. **自定义域名**（可选）
   - 在 Settings → Pages 中添加自定义域名
