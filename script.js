document.addEventListener('DOMContentLoaded', () => {
    // Idioma inicial
    let currentLang = 'es';

    // Cambiar tema claro/oscuro
    function toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
    }

    // Cambiar idioma español/inglés
    function toggleLanguage() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        document.getElementById('langBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';
        
        document.querySelectorAll('[data-es]').forEach(element => {
            const text = element.getAttribute(`data-${currentLang}`);
            if (text !== null) {
                element.textContent = text;
            }
        });
    }

    // Mostrar/ocultar menú en móvil
    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    }

    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Cerrar menú en móvil si estaba abierto
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });

    // Exponer funciones para botones del HTML
    window.toggleTheme = toggleTheme;
    window.toggleLanguage = toggleLanguage;
    window.toggleMenu = toggleMenu;
});
