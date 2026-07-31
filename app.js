const resources = [
  {
    name: "free-for.dev",
    url: "https://free-for.dev/",
    category: "开发",
    plan: "免费清单",
    score: 99,
    featured: true,
    tags: ["开发者", "云服务", "SaaS"],
    summary: "开发者免费服务大全，覆盖云、数据库、监控、CI、API 等交付场景。",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    category: "开发",
    plan: "免费增值",
    score: 98,
    featured: true,
    tags: ["代码托管", "开源", "协作"],
    summary: "代码托管、Issue、Actions、Pages 和开源协作的基础设施。",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    category: "部署",
    plan: "免费增值",
    score: 96,
    featured: true,
    tags: ["前端部署", "Serverless", "Next.js"],
    summary: "适合前端项目、文档站和产品原型的快速部署平台。",
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com/",
    category: "部署",
    plan: "免费增值",
    score: 94,
    tags: ["静态站", "表单", "CI/CD"],
    summary: "静态网站和 Jamstack 应用托管，配置轻，适合快速交付。",
  },
  {
    name: "Cloudflare",
    url: "https://www.cloudflare.com/",
    category: "部署",
    plan: "免费增值",
    score: 95,
    featured: true,
    tags: ["CDN", "DNS", "安全"],
    summary: "免费 DNS、CDN、安全防护和 Workers 生态，个人和团队都常用。",
  },
  {
    name: "Supabase",
    url: "https://supabase.com/",
    category: "开发",
    plan: "免费增值",
    score: 94,
    tags: ["数据库", "认证", "后端"],
    summary: "Postgres、Auth、Storage 和 Edge Functions，适合快速搭后端。",
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com/",
    category: "开发",
    plan: "免费增值",
    score: 93,
    tags: ["后端", "认证", "移动端"],
    summary: "Google 的应用开发平台，适合实时数据、认证和移动应用。",
  },
  {
    name: "Render",
    url: "https://render.com/",
    category: "部署",
    plan: "免费增值",
    score: 90,
    tags: ["Web 服务", "数据库", "后台"],
    summary: "Web 服务、Cron、数据库和静态站托管，适合中小项目原型。",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/",
    category: "AI",
    plan: "免费增值",
    score: 96,
    featured: true,
    tags: ["模型", "数据集", "Spaces"],
    summary: "AI 模型、数据集和在线 Demo 社区，适合探索和发布模型应用。",
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    category: "AI",
    plan: "免费增值",
    score: 97,
    tags: ["问答", "写作", "代码"],
    summary: "通用 AI 助手，适合资料整理、代码解释、文案和日常效率任务。",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    category: "AI",
    plan: "免费增值",
    score: 92,
    tags: ["搜索", "引用", "研究"],
    summary: "带引用的 AI 搜索与研究工具，适合快速了解主题和来源。",
  },
  {
    name: "Poe",
    url: "https://poe.com/",
    category: "AI",
    plan: "免费增值",
    score: 88,
    tags: ["多模型", "机器人", "问答"],
    summary: "聚合多种 AI 模型和 Bot，适合比较模型效果和快速试用。",
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    category: "设计",
    plan: "免费增值",
    score: 97,
    featured: true,
    tags: ["UI", "协作", "原型"],
    summary: "主流在线设计协作工具，适合 UI、原型和团队交付。",
  },
  {
    name: "Canva",
    url: "https://www.canva.com/",
    category: "设计",
    plan: "免费增值",
    score: 94,
    tags: ["海报", "演示", "模板"],
    summary: "模板丰富的在线设计工具，适合运营图、演示和轻量视觉产物。",
  },
  {
    name: "Excalidraw",
    url: "https://excalidraw.com/",
    category: "设计",
    plan: "免费可用",
    score: 93,
    tags: ["白板", "草图", "架构图"],
    summary: "手绘风白板工具，适合流程图、架构图和团队讨论。",
  },
  {
    name: "Penpot",
    url: "https://penpot.app/",
    category: "设计",
    plan: "开源",
    score: 88,
    tags: ["UI", "开源", "原型"],
    summary: "开源设计和原型平台，适合关注开放格式的团队。",
  },
  {
    name: "Lucide",
    url: "https://lucide.dev/",
    category: "设计",
    plan: "开源",
    score: 92,
    tags: ["图标", "SVG", "前端"],
    summary: "现代开源图标库，风格统一，适合产品界面和开发项目。",
  },
  {
    name: "Iconify",
    url: "https://iconify.design/",
    category: "设计",
    plan: "开源",
    score: 91,
    tags: ["图标", "搜索", "组件"],
    summary: "聚合大量图标集，支持多框架使用，找图标效率很高。",
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/",
    category: "素材",
    plan: "免费可用",
    score: 91,
    tags: ["图片", "摄影", "素材"],
    summary: "高质量图片素材库，适合网页首屏、博客和视觉参考。",
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com/",
    category: "素材",
    plan: "免费可用",
    score: 89,
    tags: ["图片", "视频", "素材"],
    summary: "免费图片和视频素材，适合内容创作和产品展示。",
  },
  {
    name: "unDraw",
    url: "https://undraw.co/illustrations",
    category: "素材",
    plan: "免费可用",
    score: 86,
    tags: ["插画", "SVG", "网页"],
    summary: "可调色 SVG 插画库，适合文档页、空状态和轻量产品页。",
  },
  {
    name: "TinyPNG",
    url: "https://tinypng.com/",
    category: "素材",
    plan: "免费增值",
    score: 90,
    tags: ["图片压缩", "PNG", "WebP"],
    summary: "常用图片压缩工具，适合上线前减少资源体积。",
  },
  {
    name: "Notion",
    url: "https://www.notion.so/",
    category: "效率",
    plan: "免费增值",
    score: 95,
    featured: true,
    tags: ["文档", "知识库", "协作"],
    summary: "文档、知识库、项目管理和个人工作台的一体化工具。",
  },
  {
    name: "Trello",
    url: "https://trello.com/",
    category: "效率",
    plan: "免费增值",
    score: 88,
    tags: ["看板", "任务", "协作"],
    summary: "简单直观的看板工具，适合轻量项目和个人任务流。",
  },
  {
    name: "Linear",
    url: "https://linear.app/",
    category: "效率",
    plan: "免费增值",
    score: 91,
    tags: ["Issue", "项目", "研发"],
    summary: "研发团队常用的问题追踪和项目管理工具，体验流畅。",
  },
  {
    name: "Google Docs",
    url: "https://docs.google.com/",
    category: "效率",
    plan: "免费可用",
    score: 93,
    tags: ["文档", "协作", "办公"],
    summary: "在线文档协作基础工具，适合多人编辑和资料沉淀。",
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com/",
    category: "开发",
    plan: "免费增值",
    score: 90,
    tags: ["在线 IDE", "前端", "原型"],
    summary: "浏览器里的开发环境，适合快速复现、分享和演示前端项目。",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    category: "开发",
    plan: "免费增值",
    score: 89,
    tags: ["前端", "Demo", "灵感"],
    summary: "前端代码片段和交互 Demo 社区，适合学习和快速验证效果。",
  },
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    category: "学习",
    plan: "免费可用",
    score: 98,
    featured: true,
    tags: ["Web", "文档", "标准"],
    summary: "Web 标准和前端技术权威文档，开发者必备参考。",
  },
  {
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
    category: "学习",
    plan: "免费可用",
    score: 94,
    tags: ["编程", "课程", "练习"],
    summary: "免费编程课程和练习平台，适合系统学习 Web 和基础开发。",
  },
  {
    name: "The Odin Project",
    url: "https://www.theodinproject.com/",
    category: "学习",
    plan: "开源",
    score: 89,
    tags: ["全栈", "课程", "项目"],
    summary: "开源全栈开发课程，强调项目实践和完整学习路径。",
  },
  {
    name: "Roadmap.sh",
    url: "https://roadmap.sh/",
    category: "学习",
    plan: "免费增值",
    score: 93,
    tags: ["路线图", "开发者", "成长"],
    summary: "开发者学习路线图和技能清单，适合规划学习方向。",
  },
  {
    name: "Postman",
    url: "https://www.postman.com/",
    category: "API",
    plan: "免费增值",
    score: 94,
    tags: ["API", "测试", "协作"],
    summary: "API 调试、文档和测试平台，接口交付常用工具。",
  },
  {
    name: "Hoppscotch",
    url: "https://hoppscotch.io/",
    category: "API",
    plan: "开源",
    score: 90,
    tags: ["API", "调试", "轻量"],
    summary: "开源轻量 API 调试工具，打开浏览器就能快速发请求。",
  },
  {
    name: "Swagger Editor",
    url: "https://editor.swagger.io/",
    category: "API",
    plan: "免费可用",
    score: 87,
    tags: ["OpenAPI", "文档", "接口"],
    summary: "在线编辑和预览 OpenAPI 文档，适合接口规范交付。",
  },
  {
    name: "JSONPlaceholder",
    url: "https://jsonplaceholder.typicode.com/",
    category: "API",
    plan: "免费可用",
    score: 86,
    tags: ["Mock", "REST", "测试"],
    summary: "免费测试 API，适合前端联调、教程和原型演示。",
  },
  {
    name: "Grafana",
    url: "https://grafana.com/",
    category: "运维",
    plan: "开源",
    score: 93,
    tags: ["监控", "可视化", "Dashboard"],
    summary: "监控和数据可视化平台，开源生态成熟。",
  },
  {
    name: "UptimeRobot",
    url: "https://uptimerobot.com/",
    category: "运维",
    plan: "免费增值",
    score: 88,
    tags: ["可用性", "监控", "告警"],
    summary: "简单的网站可用性监控工具，适合个人站点和小项目。",
  },
  {
    name: "Sentry",
    url: "https://sentry.io/",
    category: "运维",
    plan: "免费增值",
    score: 91,
    tags: ["错误监控", "前端", "后端"],
    summary: "应用错误监控和性能追踪，适合线上问题定位。",
  },
  {
    name: "Lighthouse",
    url: "https://pagespeed.web.dev/",
    category: "运维",
    plan: "免费可用",
    score: 92,
    tags: ["性能", "SEO", "质量"],
    summary: "Google 官方网页质量检测工具，覆盖性能、SEO 和可访问性。",
  },
  {
    name: "TableConvert",
    url: "https://tableconvert.com/",
    category: "数据",
    plan: "免费可用",
    score: 84,
    tags: ["表格", "转换", "CSV"],
    summary: "表格、CSV、Markdown、JSON 等格式互转，处理小数据很顺手。",
  },
  {
    name: "Observable",
    url: "https://observablehq.com/",
    category: "数据",
    plan: "免费增值",
    score: 88,
    tags: ["可视化", "Notebook", "D3"],
    summary: "交互式数据分析和可视化笔记本，适合数据故事和分享。",
  },
  {
    name: "Datawrapper",
    url: "https://www.datawrapper.de/",
    category: "数据",
    plan: "免费增值",
    score: 89,
    tags: ["图表", "地图", "发布"],
    summary: "无需编码制作图表和地图，适合报告、媒体和运营分析。",
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/",
    category: "数据",
    plan: "免费可用",
    score: 92,
    tags: ["数据集", "Notebook", "机器学习"],
    summary: "数据集、竞赛和在线 Notebook 平台，适合机器学习和数据练习。",
  },
  {
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    category: "安全",
    plan: "免费增值",
    score: 91,
    tags: ["安全", "文件检测", "URL"],
    summary: "检测文件、URL 和域名安全风险，安全排查常用。",
  },
  {
    name: "Have I Been Pwned",
    url: "https://haveibeenpwned.com/",
    category: "安全",
    plan: "免费可用",
    score: 90,
    tags: ["泄露查询", "账号", "安全"],
    summary: "查询邮箱是否出现在已知数据泄露事件中。",
  },
  {
    name: "SecurityHeaders",
    url: "https://securityheaders.com/",
    category: "安全",
    plan: "免费可用",
    score: 85,
    tags: ["Header", "检测", "Web 安全"],
    summary: "检查网站安全响应头配置，适合上线前快速体检。",
  },
  {
    name: "Internet Archive",
    url: "https://archive.org/",
    category: "综合",
    plan: "免费可用",
    score: 92,
    tags: ["档案", "资料", "Wayback"],
    summary: "网页快照、数字档案和公共资源库，查旧资料很有用。",
  },
  {
    name: "AlternativeTo",
    url: "https://alternativeto.net/",
    category: "综合",
    plan: "免费可用",
    score: 90,
    tags: ["替代品", "软件", "发现"],
    summary: "寻找软件和网站替代方案，适合比较同类工具。",
  },
  {
    name: "GitHub Actions 语法",
    url: "https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions",
    category: "文档",
    plan: "免费可用",
    score: 95,
    tags: ["知识手册", "GitHub", "CI/CD"],
    summary: "GitHub Actions workflow 语法官方文档。",
  },
  {
    name: "GitHub 默认环境变量",
    url: "https://docs.github.com/zh/actions/learn-github-actions/variables#default-environment-variables",
    category: "文档",
    plan: "免费可用",
    score: 92,
    tags: ["知识手册", "GitHub", "变量"],
    summary: "Actions 默认变量和环境变量参考。",
  },
  {
    name: "GitHub Runner Images",
    url: "https://github.com/actions/runner-images",
    category: "开发",
    plan: "开源",
    score: 91,
    tags: ["知识手册", "Actions", "Runner"],
    summary: "GitHub 托管 Runner 镜像和软件清单。",
  },
  {
    name: "tj-actions changed-files",
    url: "https://github.com/tj-actions/changed-files",
    category: "开发",
    plan: "开源",
    score: 89,
    tags: ["知识手册", "Actions", "变更文件"],
    summary: "在 CI 中获取变更文件列表。",
  },
  {
    name: "Docker Build Push Action",
    url: "https://github.com/docker/build-push-action",
    category: "开发",
    plan: "开源",
    score: 90,
    tags: ["知识手册", "Docker", "CI/CD"],
    summary: "GitHub Actions 构建并推送 Docker 镜像。",
  },
  {
    name: "GitLab CI YAML",
    url: "https://docs.gitlab.cn/jh/ci/yaml/",
    category: "文档",
    plan: "免费可用",
    score: 89,
    tags: ["知识手册", "GitLab", "CI/CD"],
    summary: "GitLab CI 配置关键字参考。",
  },
  {
    name: "企业微信机器人文档",
    url: "https://developer.work.weixin.qq.com/document/path/91770",
    category: "文档",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "机器人", "通知"],
    summary: "企业微信群机器人配置说明。",
  },
  {
    name: "Jira JQL 参考",
    url: "https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-functions/",
    category: "文档",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "Jira", "JQL"],
    summary: "Jira 高级搜索 JQL 函数参考。",
  },
  {
    name: "Slurm 中文文档",
    url: "https://docs.slurm.cn/users/shou-ce-ye/sacct",
    category: "文档",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "HPC", "集群"],
    summary: "Slurm 用户命令和作业信息文档。",
  },
  {
    name: "Pixabay",
    url: "https://pixabay.com/",
    category: "素材",
    plan: "免费可用",
    score: 90,
    tags: ["知识手册", "图片", "视频"],
    summary: "免费图片、插画和视频素材库。",
  },
  {
    name: "Burst by Shopify",
    url: "https://burst.shopify.com/",
    category: "素材",
    plan: "免费可用",
    score: 85,
    tags: ["知识手册", "图片", "电商"],
    summary: "Shopify 提供的免费商业图片素材。",
  },
  {
    name: "Freepik",
    url: "https://www.freepik.com/",
    category: "素材",
    plan: "免费增值",
    score: 88,
    tags: ["知识手册", "图片", "PSD"],
    summary: "图片、矢量、PSD 和设计素材平台。",
  },
  {
    name: "Flaticon",
    url: "https://www.flaticon.com/",
    category: "设计",
    plan: "免费增值",
    score: 88,
    tags: ["知识手册", "图标", "素材"],
    summary: "大规模图标素材库。",
  },
  {
    name: "PNGIMG",
    url: "https://pngimg.com/",
    category: "素材",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "PNG", "免抠"],
    summary: "透明背景 PNG 图片素材。",
  },
  {
    name: "BgSub",
    url: "https://bgsub.com/webapp/",
    category: "设计",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "抠图", "图片"],
    summary: "在线图片背景移除工具。",
  },
  {
    name: "OpenDataLab",
    url: "https://opendatalab.com/",
    category: "数据",
    plan: "免费可用",
    score: 88,
    tags: ["知识手册", "数据集", "AI"],
    summary: "人工智能数据集检索和开放数据平台。",
  },
  {
    name: "帕依提提数据集",
    url: "https://www.payititi.com/opendatasets/",
    category: "数据",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "数据集", "机器学习"],
    summary: "公开数据集目录和 AI 数据资源。",
  },
  {
    name: "Ultralytics YOLOv5",
    url: "https://github.com/ultralytics/yolov5",
    category: "AI",
    plan: "开源",
    score: 91,
    tags: ["知识手册", "YOLO", "目标检测"],
    summary: "经典目标检测开源项目。",
  },
  {
    name: "Yolov7 Tracker",
    url: "https://github.com/JackWoo0831/Yolov7-tracker",
    category: "AI",
    plan: "开源",
    score: 86,
    tags: ["知识手册", "目标检测", "跟踪"],
    summary: "YOLO 和多目标跟踪整合项目。",
  },
  {
    name: "Chrome Web Store",
    url: "https://chrome.google.com/webstore/category/extensions",
    category: "工具",
    plan: "免费可用",
    score: 88,
    tags: ["知识手册", "Chrome", "扩展"],
    summary: "Chrome 扩展官方商店。",
  },
  {
    name: "Crx搜搜",
    url: "https://www.crxsoso.com/",
    category: "工具",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "Chrome", "扩展"],
    summary: "浏览器扩展搜索和下载导航。",
  },
  {
    name: "OSChina",
    url: "https://www.oschina.net/groups",
    category: "社区",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "开源", "中文社区"],
    summary: "中文开源技术交流社区。",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    category: "社区",
    plan: "免费可用",
    score: 96,
    tags: ["知识手册", "问答", "开发者"],
    summary: "开发者问答社区。",
  },
  {
    name: "站长工具",
    url: "https://tool.chinaz.com/",
    category: "工具",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "站长", "SEO"],
    summary: "域名、SEO、编码和站点检测工具集合。",
  },
  {
    name: "Zoom Earth",
    url: "https://zoom.earth/maps/satellite/",
    category: "数据",
    plan: "免费可用",
    score: 87,
    tags: ["知识手册", "天气", "地图"],
    summary: "实时天气卫星图和风暴追踪。",
  },
  {
    name: "OpenWrt Wiki",
    url: "https://openwrt.org/toh/start",
    category: "文档",
    plan: "开源",
    score: 88,
    tags: ["知识手册", "路由器", "系统"],
    summary: "OpenWrt 设备和固件知识库。",
  },
  {
    name: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    category: "数据",
    plan: "免费可用",
    score: 92,
    tags: ["知识手册", "医学", "论文"],
    summary: "医学和生命科学文献检索平台。",
  },
  {
    name: "The Lancet",
    url: "https://www.thelancet.com/journals/lancet/home",
    category: "学习",
    plan: "免费增值",
    score: 88,
    tags: ["知识手册", "医学", "期刊"],
    summary: "医学期刊和研究资讯。",
  },
  {
    name: "默沙东诊疗手册",
    url: "https://www.msdmanuals.cn/",
    category: "学习",
    plan: "免费可用",
    score: 89,
    tags: ["知识手册", "医学", "手册"],
    summary: "面向大众和专业人士的医学知识手册。",
  },
  {
    name: "Linux DO",
    url: "https://linux.do/",
    category: "社区",
    plan: "免费可用",
    score: 87,
    tags: ["知识手册", "技术社区", "Linux"],
    summary: "技术交流社区。",
  },
  {
    name: "NodeSeek",
    url: "https://www.nodeseek.com/",
    category: "社区",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "服务器", "社区"],
    summary: "服务器、网络和开发者社区。",
  },
  {
    name: "V2EX",
    url: "https://www.v2ex.com/",
    category: "社区",
    plan: "免费可用",
    score: 90,
    tags: ["知识手册", "开发者", "社区"],
    summary: "创意工作者和开发者社区。",
  },
  {
    name: "TurboScribe",
    url: "https://turboscribe.ai/zh-CN/dashboard",
    category: "AI",
    plan: "免费增值",
    score: 86,
    tags: ["知识手册", "语音转文字", "转写"],
    summary: "音频转文字工具。",
  },
  {
    name: "Yandex",
    url: "https://yandex.com/",
    category: "综合",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "搜索", "图片"],
    summary: "综合搜索引擎。",
  },
  {
    name: "CIDR 地址计算器",
    url: "https://www.lddgo.net/network/cidr",
    category: "网络",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "CIDR", "IP"],
    summary: "IPv4/IPv6 CIDR 网段计算工具。",
  },
  {
    name: "编程导航",
    url: "https://www.code-nav.cn/topic/%E8%BF%90%E7%BB%B4",
    category: "开发",
    plan: "免费可用",
    score: 85,
    tags: ["知识手册", "资源导航", "运维"],
    summary: "编程和运维资源导航。",
  },
  {
    name: "IP Address",
    url: "https://www.ipaddress.com/",
    category: "网络",
    plan: "免费可用",
    score: 86,
    tags: ["知识手册", "IP", "DNS"],
    summary: "IP、域名和 DNS 查询工具。",
  },
  {
    name: "IP8",
    url: "https://ip8.com/",
    category: "网络",
    plan: "免费可用",
    score: 83,
    tags: ["知识手册", "IP", "网络"],
    summary: "IP 查询和网络检测工具。",
  },
  {
    name: "FOFA",
    url: "https://fofa.info/",
    category: "安全",
    plan: "免费增值",
    score: 87,
    tags: ["知识手册", "安全", "资产测绘"],
    summary: "网络空间资产搜索和安全测绘平台。",
  },
  {
    name: "Censys Search",
    url: "https://search.censys.io/",
    category: "安全",
    plan: "免费增值",
    score: 87,
    tags: ["知识手册", "安全", "资产搜索"],
    summary: "互联网资产和证书搜索平台。",
  },
  {
    name: "OWASP ZAP",
    url: "https://www.zaproxy.org/",
    category: "安全",
    plan: "开源",
    score: 89,
    tags: ["知识手册", "Web 安全", "漏洞检测"],
    summary: "开源 Web 安全测试工具。",
  },
  {
    name: "Regulex",
    url: "https://tooltt.com/regulex/",
    category: "开发",
    plan: "免费可用",
    score: 85,
    tags: ["知识手册", "正则", "可视化"],
    summary: "正则表达式可视化测试工具。",
  },
  {
    name: "Linux 命令详解",
    url: "https://wangchujiang.com/linux-command/c/chown.html",
    category: "学习",
    plan: "免费可用",
    score: 88,
    tags: ["知识手册", "Linux", "命令"],
    summary: "Linux 命令中文速查手册。",
  },
  {
    name: "pyecharts",
    url: "https://pyecharts.org/#/zh-cn/",
    category: "数据",
    plan: "开源",
    score: 86,
    tags: ["知识手册", "Python", "可视化"],
    summary: "Python 图表可视化库文档。",
  },
  {
    name: "pyecharts 示例",
    url: "https://gallery.pyecharts.org/#/README",
    category: "数据",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "图表", "示例"],
    summary: "pyecharts 官方图表示例库。",
  },
  {
    name: "Wokwi",
    url: "https://wokwi.com/",
    category: "开发",
    plan: "免费增值",
    score: 86,
    tags: ["知识手册", "嵌入式", "模拟器"],
    summary: "在线单片机和电子电路模拟器。",
  },
  {
    name: "ngrok",
    url: "https://ngrok.com/",
    category: "开发",
    plan: "免费增值",
    score: 88,
    tags: ["知识手册", "内网穿透", "Webhook"],
    summary: "本地服务公网访问和隧道工具。",
  },
  {
    name: "smee.io",
    url: "https://smee.io/",
    category: "开发",
    plan: "免费可用",
    score: 83,
    tags: ["知识手册", "Webhook", "转发"],
    summary: "Webhook 转发和本地调试工具。",
  },
  {
    name: "PDF to Markdown",
    url: "https://pdf2md.morethan.io/",
    category: "工具",
    plan: "免费可用",
    score: 84,
    tags: ["知识手册", "PDF", "Markdown"],
    summary: "在线 PDF 转 Markdown 工具。",
  },
  {
    name: "NVIDIA CUDA Archive",
    url: "https://developer.nvidia.com/cuda-toolkit-archive",
    category: "AI",
    plan: "免费可用",
    score: 90,
    tags: ["知识手册", "CUDA", "NVIDIA"],
    summary: "CUDA Toolkit 历史版本下载。",
  },
  {
    name: "cuDNN Archive",
    url: "https://developer.nvidia.com/rdp/cudnn-archive",
    category: "AI",
    plan: "免费可用",
    score: 88,
    tags: ["知识手册", "cuDNN", "NVIDIA"],
    summary: "cuDNN 历史版本下载。",
  },
  {
    name: "NVIDIA CUDA 文档",
    url: "https://docs.nvidia.com/cuda/archive/",
    category: "文档",
    plan: "免费可用",
    score: 88,
    tags: ["知识手册", "CUDA", "NVIDIA"],
    summary: "CUDA 历史版本官方文档。",
  },
  {
    name: "Google AI Studio",
    url: "https://aistudio.google.com/",
    category: "AI",
    plan: "免费增值",
    score: 91,
    tags: ["知识手册", "Gemini", "AI"],
    summary: "Google Gemini 模型在线开发平台。",
  },
  {
    name: "DeepSeek",
    url: "https://chat.deepseek.com/",
    category: "AI",
    plan: "免费增值",
    score: 91,
    tags: ["知识手册", "大模型", "聊天"],
    summary: "DeepSeek 在线 AI 助手。",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com/app",
    category: "AI",
    plan: "免费增值",
    score: 90,
    tags: ["知识手册", "Google", "大模型"],
    summary: "Google Gemini 在线 AI 助手。",
  },
  {
    name: "Qwen",
    url: "https://chat.qwen.ai/",
    category: "AI",
    plan: "免费增值",
    score: 89,
    tags: ["知识手册", "通义千问", "大模型"],
    summary: "通义千问在线 AI 助手。",
  },
  {
    name: "OpenRouter",
    url: "https://openrouter.ai/",
    category: "AI",
    plan: "免费增值",
    score: 88,
    tags: ["知识手册", "API", "多模型"],
    summary: "多模型 API 聚合平台。",
  },
  {
    name: "豆包",
    url: "https://www.doubao.com/chat/",
    category: "AI",
    plan: "免费增值",
    score: 89,
    tags: ["知识手册", "字节跳动", "AI"],
    summary: "字节跳动旗下 AI 智能助手。",
  },
];

const categories = ["全部", ...new Set(resources.map((item) => item.category))];
const plans = ["全部", "免费可用", "免费增值", "开源", "免费清单"];

const state = {
  category: "全部",
  plan: "全部",
  query: "",
  sort: "recommended",
  view: "all",
  favorites: new Set(JSON.parse(localStorage.getItem("freenav:favorites") || "[]")),
};

const elements = {
  searchInput: document.querySelector("#searchInput"),
  categoryList: document.querySelector("#categoryList"),
  planList: document.querySelector("#planList"),
  resourceGrid: document.querySelector("#resourceGrid"),
  featuredGrid: document.querySelector("#featuredGrid"),
  resultSummary: document.querySelector("#resultSummary"),
  resetFilters: document.querySelector("#resetFilters"),
  sortSelect: document.querySelector("#sortSelect"),
  totalCount: document.querySelector("#totalCount"),
  categoryCount: document.querySelector("#categoryCount"),
  instantGrid: document.querySelector("#instantGrid"),
  instantSummary: document.querySelector("#instantSummary"),
  emptyState: document.querySelector("#emptyState"),
  viewTabs: document.querySelectorAll(".view-tab"),
};

function getInitials(name) {
  return name
    .split(/\s|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function persistFavorites() {
  localStorage.setItem("freenav:favorites", JSON.stringify([...state.favorites]));
}

function getDomain(url) {
  return new URL(url).hostname.replace("www.", "");
}

function getIconUrl(url) {
  return `https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=64`;
}

function renderLogo(item) {
  return `
    <span class="site-logo">
      <img src="${getIconUrl(item.url)}" alt="" loading="lazy">
    </span>
  `;
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .replace(/[\s._:/\-]+/g, "")
    .trim();
}

function isSubsequence(keyword, text) {
  let index = 0;
  for (const char of text) {
    if (char === keyword[index]) index += 1;
    if (index === keyword.length) return true;
  }
  return false;
}

function getEditDistance(a, b) {
  if (!a) return b.length;
  if (!b) return a.length;

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = previous[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      previous[j] = Math.min(previous[j] + 1, previous[j - 1] + 1, diagonal + cost);
      diagonal = temp;
    }
  }
  return previous[b.length];
}

function getMatchScore(item) {
  const keyword = normalizeText(state.query);
  if (!keyword) return item.score;

  const fields = [item.name, getDomain(item.url), item.category, item.plan, item.summary, ...item.tags];
  const normalizedFields = fields.map(normalizeText).filter(Boolean);
  const joined = normalizedFields.join("");

  if (normalizedFields.some((field) => field === keyword)) return 1000 + item.score;
  if (normalizedFields.some((field) => field.startsWith(keyword))) return 900 + item.score;
  if (joined.includes(keyword)) return 760 + item.score;
  if (isSubsequence(keyword, joined)) return 520 + item.score;

  const shortFields = normalizedFields.filter((field) => Math.abs(field.length - keyword.length) <= 3);
  const bestDistance = shortFields.reduce(
    (best, field) => Math.min(best, getEditDistance(keyword, field.slice(0, Math.max(keyword.length + 2, field.length)))),
    Infinity,
  );
  const tolerance = keyword.length <= 4 ? 1 : 2;
  if (bestDistance <= tolerance) return 420 - bestDistance * 30 + item.score;

  return 0;
}

function getFilteredResources() {
  const filtered = resources
    .map((item) => ({ ...item, matchScore: getMatchScore(item) }))
    .filter((item) => {
      const categoryMatched = state.category === "全部" || item.category === state.category;
      const planMatched = state.plan === "全部" || item.plan === state.plan;
      const favoriteMatched = state.view === "all" || state.favorites.has(item.url);
      const queryMatched = !state.query.trim() || item.matchScore > 0;
      return categoryMatched && planMatched && favoriteMatched && queryMatched;
    });

  return filtered.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name);
    if (state.sort === "rating") return b.score - a.score;
    if (state.sort === "favorites") {
      return Number(state.favorites.has(b.url)) - Number(state.favorites.has(a.url));
    }
    if (state.query.trim()) return b.matchScore - a.matchScore;
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.score - a.score;
  });
}

function createBadge(text, modifier = "") {
  return `<span class="badge ${modifier}">${text}</span>`;
}

function getPlanBadge(plan) {
  if (plan === "开源") return createBadge(plan, "badge--open");
  return createBadge(plan, "badge--free");
}

function renderFeatured() {
  const featured = resources
    .filter((item) => item.featured)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  elements.featuredGrid.innerHTML = featured
    .map(
      (item) => `
        <a class="feature-card" href="${item.url}" target="_blank" rel="noreferrer">
          <div class="site-head">
            ${renderLogo(item)}
            <span class="score">${item.score}</span>
          </div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.summary}</p>
          </div>
          <div class="tag-row">
            ${getPlanBadge(item.plan)}
            ${createBadge(item.category)}
          </div>
        </a>
      `,
    )
    .join("");
}

function renderInstantResults() {
  const list = getFilteredResources().slice(0, 6);
  const query = state.query.trim();

  elements.instantSummary.textContent = query ? `匹配 ${list.length} 个` : "推荐站点";
  elements.instantGrid.innerHTML = list
    .map(
      (item) => `
        <a class="instant-link" href="${item.url}" target="_blank" rel="noreferrer">
          ${renderLogo(item)}
          <span>${item.name}</span>
        </a>
      `,
    )
    .join("");
}

function renderFilterButtons() {
  const categoryCounts = resources.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  elements.categoryList.innerHTML = categories
    .map((category) => {
      const count = category === "全部" ? resources.length : categoryCounts[category];
      return `
        <button class="filter-button ${state.category === category ? "is-active" : ""}" type="button" data-category="${category}">
          <span>${category}</span>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");

  elements.planList.innerHTML = plans
    .map(
      (plan) => `
        <button class="plan-button ${state.plan === plan ? "is-active" : ""}" type="button" data-plan="${plan}">
          <span>${plan}</span>
        </button>
      `,
    )
    .join("");
}

function renderResources() {
  const list = getFilteredResources();

  elements.resourceGrid.innerHTML = list
    .map((item) => {
      const isFavorite = state.favorites.has(item.url);
      return `
        <article class="resource-card">
          <a class="resource-card__link resource-card__main" href="${item.url}" target="_blank" rel="noreferrer">
            <div class="site-head">
              ${renderLogo(item)}
              <span class="score">${item.score}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.summary}</p>
          </a>
          <div class="resource-card__actions">
            <button
              class="favorite-button ${isFavorite ? "is-active" : ""}"
              type="button"
              data-favorite="${item.url}"
              aria-label="${isFavorite ? "取消收藏" : "收藏"} ${item.name}"
              title="${isFavorite ? "取消收藏" : "收藏"}"
            >
              ★
            </button>
          </div>
          <div class="meta-row">
            ${getPlanBadge(item.plan)}
            ${createBadge(item.category)}
            ${createBadge(`${item.score} 分`)}
          </div>
          <div class="tag-row">
            ${item.tags.map((tag) => createBadge(tag)).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  elements.emptyState.hidden = list.length > 0;
  elements.resultSummary.textContent = `已筛选出 ${list.length} / ${resources.length} 个资源`;
}

function renderStats() {
  elements.totalCount.textContent = resources.length;
  elements.categoryCount.textContent = categories.length - 1;
}

function render() {
  renderFilterButtons();
  renderResources();
  renderInstantResults();
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderResources();
  renderInstantResults();
});

elements.categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  render();
});

elements.planList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan]");
  if (!button) return;
  state.plan = button.dataset.plan;
  render();
});

elements.resourceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;

  const url = button.dataset.favorite;
  if (state.favorites.has(url)) {
    state.favorites.delete(url);
  } else {
    state.favorites.add(url);
  }
  persistFavorites();
  renderResources();
  renderInstantResults();
});

elements.resetFilters.addEventListener("click", () => {
  state.category = "全部";
  state.plan = "全部";
  state.query = "";
  state.sort = "recommended";
  state.view = "all";
  elements.searchInput.value = "";
  elements.sortSelect.value = "recommended";
  elements.viewTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === "all"));
  render();
});

elements.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderResources();
  renderInstantResults();
});

elements.viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    elements.viewTabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderResources();
    renderInstantResults();
  });
});

renderStats();
renderFeatured();
renderInstantResults();
render();
