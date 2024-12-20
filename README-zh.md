# Univer Clipsheet

**Univer Clipsheet** 是一个功能强大的 Chrome 浏览器扩展，用于网页采集和数据自动化。它通过强大的采集功能和工作流集成，简化了数据提取、组织和管理的过程。

[English](./README.md) | **简体中文**

[官方网站](https://univer.ai/zh-CN/clip-sheet) | [在线文档](https://dream-num.github.io/univer-clipsheet/#/)

如果你想直接体验 **Clipsheet** 插件, 请点击[Clipsheet releases](https://github.com/dream-num/univer-clipsheet/releases)去获取最新版本的 **Clipsheet** 安装包

## 核心功能

### 1. 网页采集

- **自定义采集配置**：通过用户友好的界面创建采集器 (Scraper) 轻松定义采集策略。
- **灵活执行**：支持滚动、点击、URL 导航等高级模式的采集操作。
- **动态数据提取**：从复杂网页中动态提取并结构化数据。
- **AJAX 请求拦截**：拦截 AJAX 请求，从响应中捕获并提取数据。

### 2. 深层数据提取 (Drill-down)

- **嵌套数据处理**：配置下钻列以捕获嵌套或链接元素中的数据。
- **细粒度任务执行**：高效运行下钻任务，从指定元素中收集详细数据。

### 3. 工作流自动化 (Workflow)

- **全面的工作流管理**：创建工作流，将多个采集任务集成到端到端自动化流程中。
- **定时执行**：支持定时功能，让任务在指定时间间隔或预设时间点自动运行。
- **数据操作**：过滤、去重并调度任务以优化数据采集流程。

### 4. 数据管理

- **高效的数据存储**：以结构化格式保存和组织采集数据。
- **数据聚合**：整合多个采集任务和工作流的结果，便于统一分析。
- **CSV 导出**：将采集数据导出为 CSV 文件，方便分享和进一步处理。

### 5. Chrome 扩展集成

- **无缝的浏览器交互**：使用扩展直接与网页交互，便于配置采集策略。
- **后台管理**：通过后台脚本轻松控制 Scraper 和 Workflow。

---

### 6. 直观的用户界面

- **侧边面板导航**：通过直观的侧边面板管理 Scraper。
- **详细表单配置**：通过详细表单配置 Scraper 和 Workflow 参数，实现精确操作。
- **Popup 页面管理**：使用 popup 页面展示并管理 Scraper、Workflow 和数据的列表，方便查看和操作各项任务。

---

## 核心代码仓库

**Univer Clipsheet** 的核心功能在另一个仓库中实现。
了解更多详情请访问：
**[univer-clipsheet-core](https://github.com/dream-num/univer-clipsheet-core)**。

---

## 快速开始

### 先决条件

在使用 **Univer Clipsheet** 之前，请确保已安装以下工具：

- **Node.js**
- **pnpm**

### 安装步骤

1. 克隆仓库：

   ```bash
   git clone https://github.com/dream-num/univer-clipsheet.git
   ```

2. 进入项目目录并安装依赖项：

   ```bash
   cd univer-clipsheet
   git submodule update --init
   npm install
   ```

### 开发环境启动

1. 构建项目：

   ```bash
   pnpm run build
   ```

2. 启动开发服务器：

   ```bash
   pnpm run dev-server // hmr-server
   pnpm run dev
   ```

### 安装 Chrome 扩展

要将 **Univer Clipsheet** 作为 Chrome 扩展使用，请按照以下步骤操作：

1. **构建扩展文件**：
   首先，确保扩展文件已正确构建。

   ```bash
   pnpm run build
   ```

2. **打开 Chrome 扩展页面**：
   打开 Chrome，导航到扩展管理页面：
   - 在地址栏中输入 `chrome://extensions/` 并按下 **Enter** 键。
   - 或点击菜单（三个点图标），选择 **更多工具 > 扩展程序**。

3. **启用开发者模式**：
   在扩展页面右上角切换 **开发者模式** 开关。

4. **加载扩展**：
   - 点击 **加载已解压的扩展程序** 按钮。
   - 在文件对话框中，导航到项目目录下的 `univer-clipsheet/dist` 文件夹。
   - 选择该文件夹并点击 **打开**。

5. **验证安装**：
   加载完成后，扩展程序将出现在扩展列表中，其图标会显示在 Chrome 工具栏上。

---

## 贡献指南

我们欢迎对 **Univer Clipsheet** 的改进贡献！
您可以通过 [问题和功能请求](https://github.com/dream-num/univer-clipsheet/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen) 提交您的意见。

---

## 许可证

本项目基于 **MIT License** 授权。详细信息请参阅 [LICENSE](./LICENSE) 文件。

---

## 联系方式

如有任何问题或反馈，欢迎通过以下方式联系我们：

- 在 GitHub 上提交问题
- 发送电子邮件至 **[developer@univer.ai](mailto:developer@univer.ai)**
