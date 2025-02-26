// Скрипт для счетчика
// ----------------------------------------------------------------------------------------
const counter = {
    value: 0,
    increment(value) {
        // console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        // console.log('decrement -> this', this);
        this.value -= value;
    }
}

// Ccылка на объект, у которой есть класс js-decrement
// В нашем случае это кнопка "Уменьшить"
const decrementBtn = document.querySelector('.js-decrement');

// Вывод в консоль значения этого объекта
console.log(decrementBtn);      // <button class="js-decrement">Уменьшить</button>

// Вывод в консоль полного значения этого объекта (со свойствами и методами)
console.dir(decrementBtn);      // button.js-decrement

// Ccылка на объект, у которой есть класс js-increment
// В нашем случае это кнопка "Увеличить"
const incrementBtn = document.querySelector('.js-increment');

// Ccылка на объект, у которой есть класс js-value
// В нашем случае это текст, в котором будет значение
const valueElem = document.querySelector('.js-value');

// Вызов метода по прослушиванию события
decrementBtn.addEventListener('click', function () {
    // console.log('Кликнули на decrement');
    // Вызов метода объекта
    counter.decrement(1);
    // console.log(counter);
    // Обновление значения на экране
    valueElem.textContent = counter.value;
});

// Вызов метода по прослушиванию события
incrementBtn.addEventListener('click', function () {
    // console.log('Кликнули на increment');
    // Вызов метода объекта
    counter.increment(1);
    // console.log(counter);
    // Обновление значения на экране
    valueElem.textContent = counter.value;
});