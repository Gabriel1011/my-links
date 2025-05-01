// Função para definir o tema
function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);

  // Atualizar ícone se existir
  const themeIcon = document.getElementById('theme-icon');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  if (themeIcon && themeToggleBtn) {
    if (theme === 'dark') {
      themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      themeToggleBtn.classList.replace('btn-dark', 'btn-light');
      themeToggleBtn.classList.add('btn-light');
    } else {
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      themeToggleBtn.classList.replace('btn-light', 'btn-dark');
      themeToggleBtn.classList.add('btn-dark');
    }
  }
}

// Inicializar tema
document.addEventListener('DOMContentLoaded', () => {
  // Carregar tema salvo
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Configurar alternador de tema
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
});