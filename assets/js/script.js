// Alterna el modo oscuro y guarda la preferencia
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-toggle');
    
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Verificar preferencia guardada al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    
    if (savedDarkMode) {
        body.classList.add('dark-mode');
    }
});