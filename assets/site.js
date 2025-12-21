window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname || '/';
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

  document.querySelectorAll('nav a').forEach((link) => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    if (href === '/' && (normalizedPath === '/' || normalizedPath === '/index.html')) {
      link.classList.add('active');
      return;
    }

    if (href !== '/' && normalizedPath === href) {
      link.classList.add('active');
      return;
    }

    if (href !== '/' && normalizedPath.startsWith(href + '/')) {
      link.classList.add('active');
    }
  });
});
