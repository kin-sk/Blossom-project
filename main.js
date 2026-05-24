// ヘッダーの高さ分だけスクロール位置を補正する
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerHeight = document.querySelector(".header").offsetHeight;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  });
});
