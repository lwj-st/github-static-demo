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

function matchesQuery(item) {
  const keyword = state.query.trim().toLowerCase();
  if (!keyword) return true;

  return [item.name, item.category, item.plan, item.summary, ...item.tags]
    .join(" ")
    .toLowerCase()
    .includes(keyword);
}

function getFilteredResources() {
  const filtered = resources.filter((item) => {
    const categoryMatched = state.category === "全部" || item.category === state.category;
    const planMatched = state.plan === "全部" || item.plan === state.plan;
    const favoriteMatched = state.view === "all" || state.favorites.has(item.url);
    return categoryMatched && planMatched && favoriteMatched && matchesQuery(item);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name);
    if (state.sort === "rating") return b.score - a.score;
    if (state.sort === "favorites") {
      return Number(state.favorites.has(b.url)) - Number(state.favorites.has(a.url));
    }
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
            <span class="site-logo">${getInitials(item.name)}</span>
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
          <div class="site-head">
            <a class="resource-card__link" href="${item.url}" target="_blank" rel="noreferrer">
              <span class="site-logo">${getInitials(item.name)}</span>
            </a>
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
          <a class="resource-card__link" href="${item.url}" target="_blank" rel="noreferrer">
            <h3>${item.name}</h3>
            <p>${item.summary}</p>
          </a>
          <div class="meta-row">
            ${getPlanBadge(item.plan)}
            ${createBadge(item.category)}
            ${createBadge(`${item.score} 分`)}
          </div>
          <div class="tag-row">
            ${item.tags.map((tag) => createBadge(tag)).join("")}
          </div>
          <div class="card-footer">
            <a class="visit-link" href="${item.url}" target="_blank" rel="noreferrer">访问网站</a>
            <span class="badge">${new URL(item.url).hostname.replace("www.", "")}</span>
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
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderResources();
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
});

elements.viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    elements.viewTabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderResources();
  });
});

renderStats();
renderFeatured();
render();
