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


for(let a = 0; a<numbers.length; a=a+1) {
    console.log('a=', numbers[a])
}

let result = [2,4,6,8];
let b = 1;
result.forEach(function(resultItem){
    b = resultItem * b;
})
console.log(b)

let name = ['A', 'R', 'T', 'E', 'M', 'B', 'O', 'R'];

let sum = '';

name.forEach(function(sumResult){
    sum = sum + sumResult
})

for (let i = 0; i<name.length; i=i+1)
    sum = sum + name[i]
console.log(sum)

// сделать перебор 5 разных массивов через for и  foreach
// Создаем 5 разных массивов
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false, true];
const array4 = [1.1, 2.2, 3.3];
const array5 = ['apple', 'banana', 'cherry'];

// Сохраним массивы в один общий массив
const allArrays = [array1, array2, array3, array4, array5];

// Перебор массивов с помощью for
console.log("Перебор массивов с помощью for:");
for (let i = 0; i < allArrays.length; i++) {
    console.log(`Массив ${i + 1}:`, allArrays[i]);
}
// Перебор массивов с помощью forEach
console.log("\nПеребор массивов с помощью forEach:");
allArrays.forEach((array, index) => {
    console.log(`Массив ${index + 1}:`, array);
});


closeButton.addEventListener('click', onCloseButtonClick)
button.addEventListener('click', onButtonClick)