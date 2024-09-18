const buttonClick = document.querySelector('.button')
const redBlock = document.querySelector('.redBlock')

buttonClick.addEventListener('click', () =>{

    redBlock.classList.toggle('redBlock--open')
})
