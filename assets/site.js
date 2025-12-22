// Redirect trailing slashes (e.g., /books/ → /books) except for root /
if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
  window.history.replaceState(null, '', window.location.pathname.slice(0, -1) + window.location.search + window.location.hash);
}

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

window.toggleCategory = function (header) {
  const content = header.nextElementSibling;
  const isExpanded = content.classList.contains('expanded');

  if (isExpanded) {
    content.classList.remove('expanded');
    header.classList.remove('expanded');
  } else {
    content.classList.add('expanded');
    header.classList.add('expanded');
  }
};
