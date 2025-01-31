// Пример из Модуля 1 - видео 2 

// находим объект с селектором button с аттрибутом data-add
// и присваиваем его переменной
const btnAdd = document.querySelector('button[data-add]');

const btnReset = document.querySelector('button[data-reset]');

// находим объект с селектором input c атрибутом data-value
// и присваиваем его переменной
const valueInput = document.querySelector('input[data-value]');

// находим объект по названию класса js-output и потомком span
// и присваиваем его переменной
const outputElement = document.querySelector('.js-output span');

// Получение всех свойств и методов выбранного объекта
console.dir(btnAdd); 

// Подучение свойства объекта - textContent (в данном случае подпись кнопки)
console.dir(btnAdd.textContent);

// Получение информации об input
console.dir(valueInput);

// Переменная суммы чисел
let total = 0;

btnAdd.addEventListener('click', function () {

    console.log('Click button');

    // Получение значения из input
    console.log(valueInput.value); // Здесь символьная строка

    // Преобразование символьной строки в число и в переменную
    const value = Number(valueInput.value); // Здесь уже число

    // Добавление введенного числа к сумме
    total = total + value;
    console.log(value, total);

    // Обнуление поля input - пустая строка
    valueInput.value = '';

    // Вывод суммы (меняем свойство textContent )
    outputElement.textContent = total;

});

btnReset.addEventListener('click', function () {
    // Обнуление суммы (меняем свойство textContent )
    total = 0;
    outputElement.textContent = 0;
});
