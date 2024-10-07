const button = document.querySelector('.main-header__button')
const menu = document.querySelector('.main-header__menu')
const closeButton = document.querySelector ('.main-header__menu-button')
const anchors = document.querySelectorAll('.main-header__navigation-item a')
const about = document.querySelector ('.main-aboutproject__project')
const spoilers = document.querySelectorAll ('.spoiler')
const select = document.querySelectorAll ('.select')

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

closeButton.addEventListener('click', onCloseButtonClick)
button.addEventListener('click', onButtonClick)


const onEachSpoiler = (spoiler) => {
    const spoilerHeader = spoiler.querySelector('.spoiler__header')

    const onSpoilerHeaderClick = () => {
        spoiler.classList.toggle ('spoiler--active')
    }

    spoilerHeader.addEventListener ('click', onSpoilerHeaderClick)
}

spoilers.forEach(onEachSpoiler)



const onEachSelect = (select) => {
    const selectButton = select.querySelector ('.select__button')
    const selectButtonText = select.querySelector ('.select__button-text')
    const selectCheckboxes = Array.from(select.querySelectorAll('.checkbox'))

    const onSelectButtonClick = () => {
        select.classList.toggle ('select--active')
    }
    selectCheckboxes.forEach(function onEachSelectCheckbox (checkbox) {
        function onCheckboxChange () {
            const checkedCheckboxes = selectCheckboxes.filter(function (item) {
                return item.querySelector('input').checked
            })
            console.log (checkedCheckboxes)
            // map созает новый массив из элементов которые возвращаются из переданной функции
            const mappedCheckboxes = checkedCheckboxes.map(function (item) {
                return item.querySelector('label').textContent
            })
            console.log (mappedCheckboxes)
            // из массива в строку с указанным символом [1,2,3] => '1, 2, 3'
            const nextLabel = mappedCheckboxes.join(', ')
            console.log(nextLabel)
            if (mappedCheckboxes.length > 0) {
                selectButtonText.textContent = nextLabel
            } else {
                selectButtonText.textContent = 'Модуль'
            }
        }
        checkbox.querySelector('input').addEventListener ('change', onCheckboxChange)
    }
    )
    selectButton.addEventListener ('click', onSelectButtonClick)
}
select.forEach(onEachSelect)
    


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

// Факториал числа: Напиши функцию, которая принимает число и возвращает его факториал, используя цикл for.

function factorial (n) {
    if (n<0) {
        return 'Ne opredelit'
    }
    let result = 1
    for (i = 1; i<=n; i++) {
        result *= i;
    }
        return result
}
console.log (factorial(3))

// Реверс строки: Создай функцию, которая принимает строку и возвращает ее реверс (например, "hello" → "olleh").

function reversString (stroka) {
    let newString = '';

    for (let i = stroka.length - 1; i>=0; i-- ) {
        newString += stroka[i]
    }
    return newString
}
console.log (reversString('hello'))

// Сумма элементов массива: Создай функцию, которая принимает массив чисел и возвращает их сумму с использованием цикла for.

function sumArray (arr) {
    let sum = 0;
    
    for (let i = 0; i<arr.length; i++ ){
        sum += arr[i]
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]))

// Нахождение максимального числа: Создай функцию, которая находит максимальное число в массиве чисел, используя цикл.

function maxNumberArray (array) {
    // return Math.max (...array)
    let max = array[0]

    for (let i = 1; i<array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
console.log (maxNumberArray([1,10,251,23,100]))

function prinimaetChislo (n) {
    
    for (i=0; i<=n; i++) {
        console.log (i)
    }
}
prinimaetChislo (5)

let a = [1, 2, 3, 4, 5];


a.forEach (function (i) {
    console.log(i)
})