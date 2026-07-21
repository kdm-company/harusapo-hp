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
});
