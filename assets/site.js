// Redirect trailing slashes (e.g., /books/ → /books) except for root /
if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
  window.history.replaceState(null, '', window.location.pathname.slice(0, -1) + window.location.search + window.location.hash);
}

// Shared header HTML content
const headerHTML = `
<div class="header-top">
    <h1>Jared Rosner</h1>
    <div class="social-links">
        <a href="https://blog.jros.com" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href="https://www.x.com/jaredrosnerd" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/jared-rosner/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
</div>
<nav>
    <a href="/">Home</a>
    <a href="/travel">Travel</a>
    <a href="/books">Books & Movies</a>
</nav>
`;

// Load shared header component
function loadHeader() {
  const headerElement = document.querySelector('header');
  
  if (!headerElement) {
    document.body.classList.add('loaded');
    return;
  }

  headerElement.innerHTML = headerHTML;
  
  // Set active nav link after header is loaded
  setActiveNavLink();
  
  // Show page content now that header is loaded
  document.body.classList.add('loaded');
}

// Set active navigation link based on current path
function setActiveNavLink() {
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
}

window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
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
