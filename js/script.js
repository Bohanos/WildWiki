/* =====================================================================
   WILDWIKI SCRIPT
   Simplified strictly for Theme Toggling. 
   ===================================================================== */

const themeToggle = document.getElementById('themeToggle');

function applyThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (themeToggle) {
    themeToggle.querySelector('.theme-toggle__icon').textContent = isDark ? '☀️' : '🌙';
  }
}

if (themeToggle) {
  applyThemeIcon();
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('wildwiki-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('wildwiki-theme', 'dark');
    }
    applyThemeIcon();
  });
}