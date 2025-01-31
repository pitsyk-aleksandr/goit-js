// Модуль 2-1 - Массивы

// Примеры из конспекта

// Создание массива
const clients = ["Mango", "Ajax", "Poly"];

// Длина массива
const lenClients = clients.length;
console.log('Длина массива = ', lenClients);  // 3

// Изменение элемента массива
clients[0] = "Alex";
console.log(clients); // ['Alex', 'Ajax', 'Poly']

// Добавление элемента массива 
clients[3] = "Jane";
console.log(clients); //  ['Alex', 'Ajax', 'Poly', 'Jane']

// Итерация по массиву через цикл через индексы
for (let i = 0; i < clients.length; i += 1) {
  console.log('Элемент = ', i, clients[i]);
  // clients[i] = clients[i] + '-1' ;   // Добавление строчки -1 к каждому элементу
}

// Цикл for ... of для переборки массива или строк
// Пример - Переборка массива
for (const client of clients) {
  console.log(client);
}
// Пример - Переборки символов строки
let stringName = "javascript";
console.log(stringName);
for (const characterString of stringName) {
  console.log(characterString);
}

// Пример. Поиск клинта в базе данных массива по имени, 
// используя ранее созданный массив  clients
const clientNameToFind = "Poly";
let message = "Клиента с таким именем нет в базе данных!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = `Клиент с именем ${clientNameToFind} есть в базе данных!`;
    // Выход из цикла
    break;
  }
  // Следующая итерация
}
console.log(message); // Вывод сообщения


// Пример. Вывод из массива чисел, которые больше заданного числа
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;   // Пороговое число
// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] <= threshold) {
    continue;
  }
  console.log(`Число ${numbers[i]} больше ${threshold}`); // 18, 29, 34
}

// Присвоение по значению (by value) - Делается копия значения
// Примитивы: строки, числа, були, null і undefined
let  aV = 5;
// Присвоение по значению в переменную bV 
// в пямяти создается еще одна ячейка, в которую копируется значение 5
let bV = aV;
console.log('aV = ',aV); // 5
console.log('bV = ',bV); // 5
// Меняем значение aV
aV = 10;
console.log('aV = ',aV); // 10
// Значение bV не изменилось, так ка это отдельная копия
console.log('bV = ',bV); // 5


// Сложные типы - объекты, массивы, функции присваиваются по ссылке (by reference), 
// то есть переменная просто получает ссылку на уже существующий объект.
const aR = ["Mango"];
// Так как aR - єто массив, в bR записівается ссілка на уже существующий массив в памяти.
// Теперь aR и bR указівают на один и тот же массив.
const bR = aR;
console.log(aR); // ["Mango"]
console.log(bR); // ["Mango"]
// Змінимо масив, додавши ще один елемент, використовуючи вказівник з aR
aR.push("Poly");
console.log(aR); // ["Mango", "Poly"]
// bR також змінилось, тому що bR, як і aR,
// просто містить посилання на те ж саме місце в пам'яті
console.log(bR); // ["Mango", "Poly"]
// Результат повторюється
bR.push("Ajax");
console.log(aR); // ["Mango", "Poly", "Ajax"]
console.log(bR); // ["Mango", "Poly", "Ajax"]


// Методы массива

// split(delimiter)
// =========================
// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter.
// Якщо роздільник - це порожній рядок, то створиться масив окремих символів. 
const name1 = "Mango";
console.log(name1.split("")); // ["M", "a", "n", "g", "o"]

const message1 = "JavaScript - це цікаво";
console.log(message1.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// join(delimiter)
// =========================
// Метод масивів join(delimiter) об'єднує елементи масиву у рядок. 
// У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

// indexOf(value)​
// =========================
// Метод indexOf(value) повертає перший індекс, в якому елемент зі значенням  value  був 
// знайдений в масиві, або число -1, якщо такий елемент відсутній. 
const clients1 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients1.indexOf("Poly"));      // 2
console.log(clients1.indexOf("Monkong"));   // -1

// includes(value)​
// =========================
// Метод includes(value) перевіряє, чи містить масив елемент зі значенням  value 
// і повертає  true  або  false  відповідно.
const clients2 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients2.includes("Poly"));      // true
console.log(clients2.includes("Monkong"));   // false

// push(value) 
// =========================
// Метод push(value) додає один або декілька елементів наприкінці масиву, 
// без необхідності зазначати індекси елементів, що додаються. 
// Повертає довжину масиву після додавання елементів.
const numbers1 = [];
// Добавляем в конец массива один элемент со значением 11
let lenNumber1 = numbers1.push(11);
console.log('Новый массив ',numbers1);              // [11]
console.log('Новая длина массива - ',lenNumber1)    // 1
numbers1.push(2222);
console.log(numbers1);      // [11, 2222]

// unshift(value)
// =========================
// Метод добавляет один или несколько элементов в начало массива
// Добавляем в начало массива два элемента со значением 3 и 33
numbers1.unshift(3, 33);
console.log(numbers1);      // [3, 33, 11, 2222]

// pop()
// =========================
// Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент. 
// Якщо масив порожній, метод повертає undefined.
const numbers2 = [10, 21, 35, 44, 55];
// Удаляем последний элемент массива
console.log(numbers2.pop());     //  55 - значение удаленного элемента
console.log(numbers2);           // [10, 21, 35, 44]
// Удаляем последний элемент массива
console.log(numbers2.pop());     //  44 - значение удаленного элемента
console.log(numbers2);           // [10, 21, 35]

// shift()
// =========================
// Метод shift() видаляє останній елемент з кінця масиву і повертає видалений елемент. 
// Удаляем первый элемент массива
console.log(numbers2.shift());     //  10 - значение удаленного элемента
console.log(numbers2);           // [21, 35]

// slice()​
// =========================
// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
// не змінюючи його. 
// Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.
const clients3 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients3.slice(1, 3));      // ["Ajax", "Poly"]
// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
console.log(clients3.slice());          // ["Mango", Ajax", "Poly", "Kiwi"]
// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
console.log(clients3.slice(1));         // ["Ajax", "Poly", "Kiwi"]
// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
console.log(clients3.slice(-2));        // ["Poly", "Kiwi"]

// splice()
// =========================
// Универсальный инструмент для роботи з массивами, если исходный массив необходимо изментить.
// Видаляє, додає і замінює елементи у довільному місці масиву.

// -------------------------
// Видалення​
// Щоб видалити елементи в масиві, передаються два аргументи.
//    splice(position, num)
//       position - вказує на позицію (індекс) першого елемента для видалення
//       num - визначає кількість елементів, що видаляються
// Змінює вихідний масив і повертає масив, що містить видалені елементи. 
const scores = [1, 2, 3, 4, 5];
// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);
// Тепер масив scores містить два елементи
console.log(scores);            // [4, 5]
// А масив deletedScores містить три видалені елементи
console.log(deletedScores);     // [1, 2, 3]

// -------------------------
// Додавання
// Для того, щоб додати один або декілька елементів в масив,
// необхідно передати три або більше аргументи.
// другий аргумент повинен дорівнювати нулю.
//    splice(position, 0, new_element_1, new_element_2, ...)
// position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// 2-й аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// є масив з назвами кольорів у вигляді рядків. Додамо нові кольори перед елементом з індексом 2.
const colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple", "yellow", "pink");
console.log(colors);    // ["red", "green", "purple", "yellow", "pink" , "blue"]

// -------------------------
// Заміна
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// Для цього необхідно передати мінімум три аргументи.
// Кількість елементів, що видаляються і додаються, може не збігатися.
//      splice(position, num, new_element_1, new_element_2, ...)
//   position - вказує на позицію (індекс) першого елемента для видалення
//   num - визначає кількість елементів, що видаляються
//   Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// є масив мов програмування з чотирьох елементів.
const languages = ["C", "C++", "Java", "JavaScript"];
// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// concat(массив)​
// =========================
// Метод concat()​ об'єднує два або більше масивів в один. 
// Він не змінює масив, на якому викликається, а повертає новий. 
// Порядок аргументів методу впливає на порядок елементів нового масиву.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];
// К старым клиентам добавляются новые клиенты
const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
// К новым клиентам добавляются старые клиенты
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
// Старые массивы не меняются
// Вывод в консоль в виде таблички (table)
console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]


/* ******************************************************* */
// Примеры из видео
/* ******************************************************* */

// ------------------------------------------------------------------------------
// Пример. Посчитать сумму четных чисел из массива
// ------------------------------------------------------------------------------
const numbersVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 28, 35, 40];
let totalEven = 0;
// Вариант 1 (через цикл for)
for (let i = 0; i < numbersVar.length; i += 1) {
  // Если число нечетное - следующая итерация
  if ( (numbersVar[i] % 2) !== 0) {
    continue;
  }
  totalEven = totalEven + numbersVar[i];
  console.log(`Вариант 1. Число - ${numbersVar[i]}   Сумма всех чисел = ${totalEven}`);
}
// Вариант 2 (через цикл for of)
totalEven = 0;
for (const number of numbersVar) {
  if (number % 2 === 0) {
      totalEven = totalEven + number;
  console.log(`Вариант 2. Число - ${number}   Сумма всех чисел = ${totalEven}`);
  }
}
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Поиск логина в массиве данных.
// ------------------------------------------------------------------------------
const logins = ['12hghg', 'jhdsfjs', '1S5a', 'G6hf5'];
// Логин для поиска
const loginToFind = '1S5a';
// По умолчанию - сообщение, что пользователь не найден. Дефолтное значение...
let messageLogin = `Логин ${loginToFind} НЕ найден`;

// ВАРИАНТ поиска 1
for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];
  console.log('Логин - ',login)
  if (login === loginToFind) {
    messageLogin = `Логин ${loginToFind} найден`;
    break; // Прерываем выполнение цикла
  }
}
// ВАРИАНТ поиска 2
for (const login of logins) {
  console.log('Логин - ',login)
  if (login === loginToFind) {
    messageLogin = `Логин ${loginToFind} найден`;
    break; // Прерываем выполнение цикла
  }
}
// ВАРИАНТ поиска 3 ( через метод includes() и оператор if )
  if (logins.includes(loginToFind)) {
    messageLogin = `Логин ${loginToFind} найден`;
}
// ВАРИАНТ поиска 4 ( через метод includes() и тернарный оператор)
messageLogin = logins.includes(loginToFind)
  ? `Логин ${loginToFind} найден`
  : `Логин ${loginToFind} НЕ найден` ;

// Сообщение  
console.log(messageLogin);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Поиск самого маленького числа в массиве, при этом все числа уникальные
// ------------------------------------------------------------------------------
const numbersAll = [51, 21, 7, 45, 3, 56, 5, 90, 23];
// Переменной наименьшего числа = значение первогочисла в массиве
let smallestNumber = numbersAll[0];
// Линейный перебор массива
for (const number of numbersAll) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(`Самое маленькое число в массиве - ${smallestNumber}`);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Сшить в одну строку все элементы массива, через тире
// ------------------------------------------------------------------------------
const fruits = ['Яблоко', 'Слива', 'Вишня', 'Абрикос'];
let fruitsString = '';

//  Вариант 1 - через цикл for of
for (const fruit of fruits) {
  fruitsString = fruitsString + fruit + '-';
}
// Обрезаем последнее тире в строке
fruitsString = fruitsString.slice(0, fruitsString.length - 1);
// Вывод строки
console.log(fruitsString);

// Вариант 2 - через метод join()
fruitsString = fruits.join('-')
// Вывод строки
console.log(fruitsString);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Заменить регистр каждого символа в строке
// ------------------------------------------------------------------------------
const strStart = 'Java-Script';
let strEnd = '';

// Вариант 1. Разбивка на символы через for  of
for (const str of strStart) {
     // console.log(str);
}

// Вариант 2. Разбивка на символы в массив  letters, используя метод  split()
const letters = strStart.split('');
// console.log(letters);

// Цикл проверки по буквам по 2 варианту разбивки
for (let letter of letters) {
  // Если буква в нижнем регистре (сравниваем букву с ее переводом в нижний регистр)
  if (letter === letter.toLowerCase()) {
    letter = letter.toUpperCase(); // Перевод в Верхний регистр
  } else {
    letter = letter.toLowerCase(); // Перевод в нижний регистр
  }
  // Добавляем обновленный символ к конечной строке
  strEnd = strEnd + letter;
}

// Цикл проверки по буквам по 2 варианту разбивки - Вариант с тернарным оператором
for (let letter of letters) {
    // Переменная проверки буквы на нижний регистр 
  const isEqual = letter === letter.toLowerCase();
    // Тернарный оператор присвоения строки
  strEnd += isEqual
  ? letter = letter.toUpperCase()
  : letter = letter.toLowerCase();
}

console.log('Начальная строка - ', strStart);
console.log('Конечная строка - ', strEnd);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Привести "Web Design 102 Method" в slug в URL "web-design-102-method"
// ------------------------------------------------------------------------------
let stringText = 'Web Design 102 Method';
console.log(stringText);
stringText = stringText.toLowerCase(); // Перевод в нижний регистр
const stringWord = stringText.split(' '); // Разбиваем на массив слов по разделителю ' '
const stringSlug = stringWord.join('-'); // Объединяем с разделителем '-'
console.log(stringText, stringSlug);

// Используя цепочки методов - исключая ненужные переменные
const stringSlug1 = stringText.toLowerCase().split(' ').join('-');
console.log( stringSlug1);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Посчитать сумму элементов двух массивов
// ------------------------------------------------------------------------------
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

// Объединяем 2 массива, используя метод concat()
const numbersArray = array1.concat(array2);

console.log(numbersArray); // [5, 10, 15, 20, 10, 20, 30]
// Переменная суммы и цикл
let totalArray = 0;
for (const number of numbersArray) {
  totalArray += number;
}
console.log('totalArray - ', totalArray);
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Пример. Работа с карточками в trello, используя метод splice()
// ------------------------------------------------------------------------------
const card = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
  'Карточка-6'
];
console.table(card);

// Удаление карточки из массива по индексу
const cardToRemove = 'Карточка-3';
// Нахождение в массиве индекса удаляемой карточки
const indexRemove = card.indexOf(cardToRemove);
// Удаление из массива 1 элемента по индексу
card.splice(indexRemove, 1);
console.table(card);

// Добавление карточки в массив по индексу
const cardToAdd = 'Карточка-7-Добавлена';
// Индекс для вставляемой карточки
const indexAdd = 3;
// Вставляем карточку
card.splice(indexAdd, 0, cardToAdd);
console.table(card);

// Обновление карточки по индексу - изменение текста
const cardToUpdate = 'Карточка-5';
const cardToUpdateNew = 'Карточка-5-Обновлена';
// Индекс для обновляемой карточки
const indexUpdate = card.indexOf(cardToUpdate);
// Обновление карточки
card.splice(indexUpdate, 1, cardToUpdateNew);
console.table(card);
// ------------------------------------------------------------------------------
