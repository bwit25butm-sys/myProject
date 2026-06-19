const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu');
const sidebarLinks = sidebar ? sidebar.querySelectorAll('a') : [];
const SIDEBAR_OPEN_CLASS = 'sidebar--open';

function MenuSwitch() {
    if (!sidebar) return;
    const isOpen = sidebar.classList.toggle(SIDEBAR_OPEN_CLASS);
    if (menuButton) {
        menuButton.setAttribute('aria-expanded', String(isOpen));
    }
}

function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove(SIDEBAR_OPEN_CLASS);
    if (menuButton) {
        menuButton.setAttribute('aria-expanded', 'false');
    }
}

if (sidebarLinks.length) {
    sidebarLinks.forEach((link) => {
        link.addEventListener('click', closeSidebar);
    });
}

document.addEventListener('click', (event) => {
    if (!sidebar || !menuButton) return;
    if (!sidebar.classList.contains(SIDEBAR_OPEN_CLASS)) return;
    const target = event.target;
    if (menuButton.contains(target) || sidebar.contains(target)) return;
    closeSidebar();
});
