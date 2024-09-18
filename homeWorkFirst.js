const buttonHome = document.querySelector('.main-header__button')
const link = document.querySelector('.main-header__link')
const closeButtonHome = document.querySelector('.main-header__link-button')
const anchorsHome = document.querySelectorAll('.main-header__navigation-item a')
const spoilersHome = document.querySelectorAll('.spoiler')

const onButtonClickHome = () => {
    link.classList.add ('main-header__link--active')
}

const onCloseButtonClickHome = () => {
    link.classList.remove ('main-header__link--active')
}

const closeLink = () => {
    link.classList.remove ('main-header__link--active')
}

anchorsHome.forEach((item) => {
    item.addEventListener ('click', closeLink)
})
closeButtonHome.addEventListener('click', onCloseButtonClickHome)
buttonHome.addEventListener('click', onButtonClickHome)

const onEachSpoilerHome = (spoiler) => {
    const spoilerHeaderHome = spoiler.querySelector('.spoiler__button')

    const onSpoilerHeaderClickHome = () => {
        spoiler.classList.toggle ('spoiler--active')
    }

    spoilerHeaderHome.addEventListener ('click', onSpoilerHeaderClickHome)
}

spoilersHome.forEach(onEachSpoilerHome)

const showMoreButtonHome = document.querySelector('.information__text')
const hiddenSpoilersHome = document.querySelectorAll('.spoiler--hidden')

showMoreButtonHome.addEventListener('click', () => {
    hiddenSpoilersHome.forEach(function(hiddenSpoilerHome){
        hiddenSpoilerHome.classList.remove('spoiler--hidden')
    })

    showMoreButtonHome.classList.add('information__text--hidden')
})