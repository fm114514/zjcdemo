// 文章数据：以后加文章，往这个数组里加一条即可
const posts = [
  {
    title: "第一篇：为什么开始写博客",
    date: "2026-09-01",
    excerpt: "记录一些想法，顺便练练打字。",
    content: [
      "<p>一直想有个地方写点东西，不需要多正式，想到哪写到哪。</p>",
      "<p>这个博客就是一个开始，黑白配色，干净简单。</p>",
      "<h2>写点什么</h2>",
      "<p>可能是读书笔记，也可能是日常碎碎念。总之先写着。</p>"
    ]
  },
  {
    title: "用纯 HTML/CSS/JS 搭一个博客",
    date: "2026-09-05",
    excerpt: "不依赖任何框架，三个文件搞定。",
    content: [
      "<p>没有框架，没有构建工具，就是三个文件：HTML、CSS、JS。</p>",
      "<p>文章数据放在一个数组里，改数组就能加文章，很适合入门。</p>",
      "<h2>怎么做</h2>",
      "<p>列表页渲染所有文章标题，点进去切换成详情。简单直接。</p>"
    ]
  },
  {
    title: "最近读的一本书",
    date: "2026-09-08",
    excerpt: "一些零散的读后感。",
    content: [
      "<p>最近翻了本书，讲的是慢下来生活这件事。</p>",
      "<p>挺有感触，人总是急着赶路，却忘了为什么出发。</p>"
    ]
  }
];

const app = document.getElementById("app");

// 渲染文章列表
function renderList() {
  const list = document.createElement("ul");
  list.className = "post-list";

  posts.forEach((post, index) => {
    const item = document.createElement("li");
    item.className = "post-item";

    const link = document.createElement("a");
    link.href = "#";
    link.className = "post-link";
    link.textContent = post.title;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      renderDetail(index);
    });

    const date = document.createElement("div");
    date.className = "post-date";
    date.textContent = post.date;

    const excerpt = document.createElement("div");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    item.appendChild(link);
    item.appendChild(date);
    item.appendChild(excerpt);
    list.appendChild(item);
  });

  app.innerHTML = "";
  app.appendChild(list);
}

// 渲染文章详情
function renderDetail(index) {
  const post = posts[index];

  const article = document.createElement("article");

  const title = document.createElement("h1");
  title.className = "article-title";
  title.textContent = post.title;

  const date = document.createElement("div");
  date.className = "article-date";
  date.textContent = post.date;

  const body = document.createElement("div");
  body.className = "article-body";
  body.innerHTML = post.content.join("\n");

  const back = document.createElement("a");
  back.href = "#";
  back.className = "back-link";
  back.textContent = "← 返回列表";
  back.addEventListener("click", (e) => {
    e.preventDefault();
    renderList();
  });

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(body);
  article.appendChild(back);

  app.innerHTML = "";
  app.appendChild(article);
}

// 首页标题点击返回列表
document.getElementById("home-link").addEventListener("click", (e) => {
  e.preventDefault();
  renderList();
});

renderList();
