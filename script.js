document.getElementById('year').textContent = new Date().getFullYear();
// Minimal JS: mobile nav toggle and set current year (dark-only site)
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle && navToggle.addEventListener('click', ()=> nav && nav.classList.toggle('open'));

const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
