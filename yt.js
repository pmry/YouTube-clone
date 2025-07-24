const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    menuBtn.textContent = sidebar.classList.contains('collapsed') ? 'Expand' : 'Collapse';
});