(() => {
  const button = document.getElementById('menuBtn');
  const nav = document.getElementById('gnav');
  if (!button || !nav) return;
  const setOpen = open => {
    document.body.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  };
  button.addEventListener('click', () => {
    const open = !document.body.classList.contains('nav-open');
    setOpen(open);
    if (open) nav.querySelector('a').focus();
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (!document.body.classList.contains('nav-open')) return;
    if (event.key === 'Escape') { setOpen(false); button.focus(); }
    if (event.key === 'Tab') {
      const items = [...nav.querySelectorAll('a'), button].filter(el => el.getClientRects().length);
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault(); button.focus(); }
    }
  });
  matchMedia('(min-width:768px)').addEventListener('change', event => { if (event.matches) setOpen(false); });
})();
