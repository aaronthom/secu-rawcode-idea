window.onload = function () {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const navMenuFirst = document.querySelector('.navMenuFirst');
    const navMenuSecond = document.querySelector('.navMenuSecond');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle("active");
        navMenuFirst.classList.toggle("active");
        navMenuSecond.classList.toggle("active");
    })

    document.querySelectorAll('.navLink').forEach( n => n.addEventListener('click', () => {
        hamburgerMenu.classList.remove("active");
        navMenuFirst.classList.remove("active");
        navMenuSecond.classList.remove("active");
    }))
}