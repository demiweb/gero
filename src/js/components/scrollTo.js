export default () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-scroll-to');

    if (!btn) return;
    const href = btn.getAttribute('href');
    const target = document.querySelector(href);

    if (!target) return;
    e.preventDefault();
    const out = document.querySelector('.out');
    const offset = parseInt(window.getComputedStyle(out).paddingTop, 10);
    const top = target.getBoundingClientRect().top - offset;

    window.scrollBy({
      top,
      behavior: 'smooth',
    });
  });
};
