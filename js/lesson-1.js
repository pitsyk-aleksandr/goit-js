// Модуль 1 - Примеры

// Присвоение переменной
const a = 10;
const totalPrice = 200.45;

// Вывод в консоль браузера
console.log('Цена товара ', totalPrice, 'грн.');

// Проверка типа переменной
let name1 = 'Alex';
let type = typeof name1;
console.log(name1,type);
const quantity = 17;
console.log(typeof quantity);

// Диалоговое окно alert()
// alert('Проверьте состояние памяти !');

// Диалоговое окно подтверждения или отмены
// const shouldReNew = confirm('Подтвердите подписку');
// console.log(shouldReNew);

// Диалоговое окно ввода данных
// const quantityUser = prompt('Введите количество пользователей - ');
// console.log(quantityUser);

// Парсинг значений и перевод в числа
let elementWidth = '50px';
let result = Number.parseInt(elementWidth);
console.log('Результат ', result);
console.log(typeof result);

let price = '250.25 грн.';
result = Number.parseFloat(price);
console.log('Результат ', result);
console.log(typeof result);

// Отбрасываение знаков
let num = 139.2224;
let numFixed = num.toFixed(2);
console.log(typeof num, num); // number 139.2224
console.log(typeof numFixed, numFixed); // string 139.22

// Преобразование в число
console.log(Number('55'));          // число 55
console.log(Number(true));          // число 1
console.log(Number('проверка'));    // значение NaN

// Библиотека Math - математические функции
// Math.pow(основание, степень) - возведение в степень
console.log(Math.pow(2, 3))  // 8 (2 в третьей степени)
// Оператор экспоненты **
console.log(2 ** 3);        // 8 (2 в третьей степени)


// Math.random() – генерирует случайное число в диапазоне от 0 до 1
// Чтобы сгенерировать случайное число в диапазоне значений,
// применяется алгоритм :
// Math.random()*(max_число-min_число)+min_число
let numMax = 100;
let numMin = 50;
let resRandom = Math.random() * (numMax - numMin) + numMin;
let resRandomRound = Math.round(resRandom);
console.log(resRandomRound);

// Пример применения рандомных чисел
const colors = ['skyblue', 'blue', 'tomato', 'white', 'orange', 'teal'];
const minIndex = 0;
const maxIndex = colors.length - 1;
const currentIndex = Math.round(Math.random() * (maxIndex - minIndex) + minIndex);
console.log(minIndex, maxIndex, currentIndex);
// Устанавливаем цвет фона для элемента body
document.body.style.backgroundColor = colors[currentIndex];

// Строки

// Пустая строка
const emptyString = '';
// Длина строки
const message = 'Проверьте длину строки';
const messageLenght = message.length;
console.log(message, messageLenght); // 22
// Конкатенация строк
const firstName = 'Alex';
const lastName = 'Popov';
const fullName = firstName + ' ' + lastName;
console.log(fullName);  // Alex Popov

// Шаблонные строки
const roomNumber = 105;
const roomType = 'VIP';
const guestMsg = `Гость ${firstName} ${lastName} поселился в номере ${roomType} №${roomNumber}`;
console.log(guestMsg); // Гость Alex Popov поселился в номере VIP №105

// Нормализация пользовательского ввода
const brand = 'Samsung';
// Приведение строки к нижнему регистру символов
const brandNormalized = brand.toLowerCase(); 
console.log(brand, brandNormalized);    // Samsung samsung
// Вытягивание третьей буквы из слова по индексу 2 
console.log(brand[2]);                  // m
// Вытягивание всех символов строки, начиная со 2-й буквы из слова (по индексу 1) 
console.log(brand.slice(1));            // amsung
// Выбираются символы от индекса 1 до индекса 3 (4-1 : символ с индексом 4 – НЕ ВКЛЮЧАЕТСЯ !)
console.log(brand.slice(1,4))	                    // ams
// Верхний регистр для всех букв, начиная со 2-й буквы из слова (по индексу 1) 
console.log(brand.slice(1).toUpperCase());            // AMSUNG

// Поиск в строке с методом includes()
console.log(brand.includes('su'));  // true

// Логические операторы

// Логическое И &&
// Запинается на лжи.
// Возвращает то, на чем запнулось, а если все true – то последний операнд.
console.log(5 && 10 && 20);       // 20
console.log(5 && 0 && 20);       // 0

// Логическое ИЛИ ||
// Запинается на правде.
// Выводит то, на чем запнулось, или последний операнд.
console.log(5 || 10 || 20);       // 5
console.log(0 || null || 20);       // 20
console.log(0 || false || null);       // null

// Логическое НЕ !
// Отрицание.
// Делает инверсию правда -> ложь  или  ложь -> правда
console.log(!0);       // true
console.log(!555);     // false

// Пример : Вхождение числа numberX в отрезок x1 x2
const x1 = 10;
const x2 = 50;
const numberX = 30;
console.log(`Число ${numberX} меньше начала отрезка ${x1}`, numberX < x1);  // false
console.log(`Число ${numberX} больше конца отрезка ${x2}`, numberX > x2);   // false
const res1 = numberX >= x1 && numberX <= x2;
console.log(`Число ${numberX} попадает в отрезок от ${x1} до ${x2}`, res1); // true
const res2 = (numberX < x1 || numberX > x2);
console.log(`Число ${numberX} попадает до ${x1} или после ${x2}`, res2); // false

// Пример : Допуск к чату в соцсети при наличии условий пользователя
const isFriend = true;  // Друг
const isOnline = true;  // В сети онлайн
const isDnd = false;    // Не в режиме "Не беспокоить"
const canOpenChat = isFriend && isOnline && !isDnd;
console.log('Доступ к чату - ',canOpenChat);

// Пример : Проверка пользователя при доступе к контенту
// Доступ только для пользователей 'vip' или 'pro'
const subscription = 'pro';
const canAccess = subscription==='pro' || subscription==='vip';
console.log('Доступ к контенту - ', canAccess);

// Условный оператор if ...  else
const paiment = 500; // Зарплата
let level; // Переменная уровня зарплаты
if (paiment <= 200) {
    level = 'Уровень 1';
} else if (paiment > 200 && paiment <= 400) {
    level = 'Уровень 2';
} else {
    level = 'Уровень 3';
}
console.log(level);

// Тернарный оператор 
const bal = 5;
const messageBal = bal >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(messageBal);


// Switch
// Пример. Цена на номер в зависимости от звезды отеля.
const stars = 1;
let priceRoom;

switch (stars) {
    // Если stars === 1
    case 1:
        priceRoom = 10;
        break;

    // Если условие проверки stars === 2 || stars === 3 , то делается так
    case 2:
    case 3:
        priceRoom = 30;
        break;
    
    // Если stars === 4
    case 4:
        priceRoom = 30;
        break;
    
    // В других стучаях :
    default:
        console.let('Категория номера не определена');
        break;
}
console.log(`Цена категории ${stars}* за номер -`, priceRoom);

// Цикл while с предусловием
// Заполняем отель клиентами до максимального значения
let clientCounter = 18;
const maxClients = 25;
while (clientCounter <= maxClients) {
  console.log(clientCounter);  // 18....25
  clientCounter += 1;
}

// Цикл while с постусловием
// Пример - ввод пароля
let password = "";
// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);
console.log("Ввели пароль: ", password);

// Цикл for
// Подсчет суммы числе до определенного значения
const target = 3;
let sum = 0;
for (let i = 0; i <= target; i += 1) {
  sum += i;
}
console.log(sum); // 6

// Пример. Вывод непарных чисел.
const number = 10;
for (let i = 0; i < number; i += 1) {
    // Если остаток от деления равен 0
    // a % b - это остаток от деления двух чисел : a / b
  if (i % 2 === 0) {
    continue; // Переход на следующую итерацию цикла, без вывода числа в консоль.
  }
  console.log("Нечетное число i: ", i); // 1, 3, 5, 7, 9
}

// Пример. Расчет общей зарплаты работников, каждая зарплата генерируется автоматически.
const employees = 5;
const minSalary = 500;
const maxSalary = 1500;
let totalSalary = 0;

for (let i = 1; i <= employees; i+=1) {
    let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Зарплата работника ${i} = ${salary}`);
    totalSalary += salary;
}
console.log('Всего зарплата - ', totalSalary);

// Пример. Расчет суммы всех четных чисел в диапазоне
const minNumber = 0;
const maxNumber = 10;
let totalNumber = 0;
for (let i = minNumber; i <= maxNumber; i += 1) {
    if (i % 2 !== 0) {
        console.log(`Число ${i} - нечетное`);
        // Переход на следующую итерацию цикла
        continue;
    }
    totalNumber = totalNumber + i;
}
console.log('Сумма всех четных чисел = ', totalNumber);

// Пример. Расчет скидки в зависимости от суммарных покупок в магазине
const sumTotalShop = 1200;
// Сумма покупки
let paymentShop = 500;
// Скидка
let discount = 0;
// Сумма покупки со скидкой
let paymentDiscount = 0;
if (sumTotalShop<100) { 
    console.log('Не участник партнерской программы. Скидка - 0%');
    discount = 0;
} else if (sumTotalShop >= 100 && sumTotalShop < 1000) {
    console.log('Скидка - 2%');
    discount = 0.02;
} else if (sumTotalShop >= 1000 && sumTotalShop < 10000) {
    console.log('Скидка - 5%');
    discount = 0.05;
} else {
    console.log('Скидка - 10%');
    discount = 0.10; 
} 
paymentDiscount = paymentShop - paymentShop * discount;
console.log(`Сумма ${paymentShop} Дисконт ${discount * 100}% Всего - ${paymentDiscount} грн.`);

// 



