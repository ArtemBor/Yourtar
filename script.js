const button = document.querySelector('.main-header__button')
const menu = document.querySelector('.main-header__menu')
const closeButton = document.querySelector ('.main-header__menu-button')
const anchors = document.querySelectorAll('.main-header__navigation-item a')
const about = document.querySelector ('.main-aboutproject__project')
const spoilers = document.querySelectorAll ('.spoiler')

const onButtonClick = () => {
    menu.classList.add ('main-header__menu--active')
}

const onCloseButtonClick = () => {
    menu.classList.remove ('main-header__menu--active')
}

const closeMenu = () => {
    menu.classList.remove ('main-header__menu--active')
}

anchors.forEach((item) => {
    item.addEventListener ('click', closeMenu)
})

const onEachSpoiler = (spoiler) => {
    const spoilerHeader = spoiler.querySelector('.spoiler__header')

    const onSpoilerHeaderClick = () => {
        spoiler.classList.toggle ('spoiler--active')
    }

    spoilerHeader.addEventListener ('click', onSpoilerHeaderClick)
}

spoilers.forEach(onEachSpoiler)

const numbers = [1,2,3,4]

numbers.forEach((number) => {
    console.log(number)
})

closeButton.addEventListener('click', onCloseButtonClick)
button.addEventListener('click', onButtonClick)