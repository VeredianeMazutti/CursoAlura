// theme-toggle.js
const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(mode) {
    if (mode === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌞';
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        toggleBtn.textContent = '🌙';
    }
    localStorage.setItem('theme', mode);
}

function toggleTheme() {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', toggleTheme);

// Inicialização
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(prefersDark ? 'dark' : 'light');
}
