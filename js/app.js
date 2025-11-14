let menuBtn = document.querySelectorAll('.menu__btn');

/* for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', () => {
        for (let k = 0; k < menuBtn.length; k++) {
            menuBtn[k].classList.remove('active')
        }
        menuBtn[i].classList.add('active')
    })
} */

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
});