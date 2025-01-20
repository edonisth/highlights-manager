document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    const icon = toggleButton.querySelector('i');

    function toggleSidebar() {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
        } else {
            sidebar.classList.toggle('active');
        }
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
    });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('collapsed');
            } else {
                sidebar.classList.remove('active');
            }
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
        } else {
            sidebar.classList.remove('collapsed');
        }
    });

    // Add active class to selected book
    document.querySelectorAll('.book-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.book-item').forEach(item => {
                item.classList.remove('active');
            });
            this.closest('.book-item').classList.add('active');
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon();
    }

    // Toggle Theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeIcon();
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : '';
        localStorage.setItem('theme', currentTheme);
    });

    // Update Theme Icon
    function updateThemeIcon() {
        const isLightMode = body.classList.contains('light-mode');
        themeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // Initialize theme icon on page load
    updateThemeIcon();
});