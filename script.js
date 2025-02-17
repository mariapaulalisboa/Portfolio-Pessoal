// JavaScript
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('#projects .projects-item');

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const overlay = this.querySelector('.overlay');
            overlay.classList.toggle('active');
        });
    });
});
