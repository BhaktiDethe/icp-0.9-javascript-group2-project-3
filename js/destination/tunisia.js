const overlay = document.getElementById("overlay");
    function openSidebar(sidebarId) {
        const sidebars = document.querySelectorAll('.ask');
        sidebars.forEach(sidebar => sidebar.style.visibility = 'hidden');
        const sidebar = document.getElementById(sidebarId);
        sidebar.style.visibility = 'visible';
        overlay.classList.add('show');
    }

    function closeSidebar() {
        const sidebars = document.querySelectorAll('.ask');
        sidebars.forEach(sidebar => sidebar.style.visibility = 'hidden');
        overlay.classList.remove('show');
    }
    