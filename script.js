document.addEventListener('DOMContentLoaded', () => {
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
});