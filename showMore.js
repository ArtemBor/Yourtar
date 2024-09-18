const showMoreButton = document.querySelector('.calculator__modules-info')
const hiddenSelects = document.querySelectorAll('.select--hidden')

showMoreButton.addEventListener('click', () => {
    hiddenSelects.forEach(function(hiddenSelect){
        hiddenSelect.classList.remove('select--hidden')
    })
    showMoreButton.classList.add('calculator__modules-info--hidden')
})

