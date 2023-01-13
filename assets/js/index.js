let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')

function activeBurger() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}
// function inactiveMenu() {
//     console.log('desactivate menu')
//     burger.classList.remove('active')
//     menu.classList.remove('active')    
// }
burger.addEventListener('click', activeBurger)