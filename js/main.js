document.addEventListener("DOMContentLoaded", () => {
  // モバイルナビ開閉
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // コピーライト年
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // お知らせ（note RSS）自動掲載：noteアカウント開設後に有効化
  // loadNoteFeed("https://note.com/XXXX/rss");
});

async function loadNoteFeed(rssUrl) {
  const container = document.getElementById("note-feed");
  if (!container) return;
  try {
    const endpoint = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl);
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data.items) return;
    container.innerHTML = "";
    data.items.slice(0, 5).forEach((item) => {
      const a = document.createElement("a");
      a.className = "news-item";
      a.href = item.link; a.target = "_blank"; a.rel = "noopener";
      const date = new Date(item.pubDate);
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      a.innerHTML = '<time>' + y + "." + m + "." + d + '</time><span class="label">お知らせ</span><span class="title"></span>';
      a.querySelector(".title").textContent = item.title;
      container.appendChild(a);
    });
  } catch (e) { /* 失敗時は既存表示を維持 */ }
}
