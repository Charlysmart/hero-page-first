document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem('theme');

    if (theme === "light") {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    let body = document.getElementById('body');
    body.addEventListener('scroll', () => {
        if (body.scrollTop === 0) {
            document.getElementById('nav').classList.remove('shadow-md');
            document.getElementById('nav').classList.remove('backdrop-blur-2xl');
            console.log("Hello");
        } else {
            document.getElementById('nav').classList.add('shadow-md');
            document.getElementById('nav').classList.add('backdrop-blur-2xl');
        }
    });
})
function toggleBar() {
    const nav = document.getElementById('mobileNav');
    if (nav.classList.contains('animate-left')) {
        nav.classList.remove('animate-left');
        nav.classList.add('animate-right');
    } else {
        nav.classList.remove('animate-right');
        nav.classList.add('animate-left');
    }
    console.log(nav);      
}

function toggleTheme() {
    let theme = localStorage.getItem('theme');
    document.documentElement.classList.toggle('dark');
    theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    console.log(theme);
    
    localStorage.setItem('theme', theme);
}