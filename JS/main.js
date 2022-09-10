let btnTop = document.querySelector('.btn-top')
window.onscroll = () => {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
    if (window.scrollY > 600) {
        btnTop.classList.add('active');
    } else {
        btnTop.classList.remove('active')
    }
}
btnTop.onclick =
    () => {
        window.scroll(0, 0)
    }

let bars = document.querySelector('.fa-bars');
let nav = document.querySelector('nav')
bars.onclick = () => {
    bars.classList.toggle("fa-times");
    nav.classList.toggle('active')
}