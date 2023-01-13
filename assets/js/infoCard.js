const openButton = document.querySelector('#openCardButton')
const infoCard = document.querySelector('.infoCard')
const closeCard = document.querySelector('.closeCard')
openButton.addEventListener('click', () => {
    infoCard.classList.toggle('show')
})
closeCard.addEventListener('click', () => {
    infoCard.classList.toggle('show')
})