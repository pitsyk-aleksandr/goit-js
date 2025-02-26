const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
} = {}) {

    // Типа внутренние приватные свойства объекта 
    this._value = initialValue;
    this._step = step;

    // Запись в свойство - результат вызова внутреннего метода по получению ссылок - Reference
    this._refs = this._getRefs(rootSelector);
    console.log('_refs', this._refs);

    // Вызов - Метод - Обновление на сайте полученного значения
    this._updateValueUI();

    // Вызов метода - Привязка событий по нажатию на кнопку
    // В аргументе - передаем также ссілку на текущий объект, так как внутри _bindEvent меняется this
    this._bindEvents(this);
};

// Метод - Получение ссылок на объекты - Reference
CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log('rootSelector - ', rootSelector);
    
    // Пустой объект для хранения ссылок
    const refs = {};

    // Поиск селектора по id 
    refs.container = document.querySelector(rootSelector);
    console.log('refs.container - ', refs.container);

    // Поиск селектора по атрибуту (уже внутри контейнера, а не по всему документу !)
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    console.log('refs.incrementBtn - ', refs.incrementBtn);

    // Поиск селектора по атрибуту (уже внутри контейнера, а не по всему документу !)
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    console.log('refs.decrementBtn - ', refs.decrementBtn);

    // Поиск селектора по атрибуту (уже внутри контейнера, а не по всему документу !)
    refs.value = refs.container.querySelector('[data-value]');
    console.log('refs.value - ', refs.value);

    return refs;
};

// Метод - Привязка событий по нажатию на кнопку
// Текущий объект передаю параметром функции
CounterPlugin.prototype._bindEvents = function (objectMy) {

    // Слушатели событий

    // При нажатии на кнопку Добавить - вызвать метод по увеличению значения
    this._refs.incrementBtn.addEventListener('click', function () {
        // Вызов - Метод - Увеличение значения текущего объекта
        objectMy.increment();
        // Вызов - Метод - Обновление на сайте полученного значения
        objectMy._updateValueUI();
    });

    // При нажатии на кнопку Уменьшить - вызвать метод по уменьшению значения
    this._refs.decrementBtn.addEventListener('click', function() {
        // Вызов - Метод - Уменьшение значения
        objectMy.decrement();
        // Вызов - Метод - Обновление на сайте полученного значения
        objectMy._updateValueUI();
    });

};

// Метод - Обновление на сайте полученного значения
CounterPlugin.prototype._updateValueUI = function () {
    this._refs.value.textContent = this._value;
};

// Метод - Увеличение значения
CounterPlugin.prototype.increment = function () {
    this._value = this._value + this._step;
};

// Метод - Уменьшение значения
CounterPlugin.prototype.decrement = function () {
    this._value = this._value - this._step;
};

const counter1 = new CounterPlugin({rootSelector:'#counter-1', initialValue:100, step:1});

console.log('counter1',counter1);

const counter2 = new CounterPlugin({rootSelector:'#counter-2', initialValue:20, step:2});

console.log('counter2',counter2);