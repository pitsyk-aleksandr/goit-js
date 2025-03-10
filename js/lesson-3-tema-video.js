// Модуль 3-1
// ****************************************************************************************

// Примеры из видео

// ========================================================================================
// Создание литерала
// ========================================================================================

const playlist = {
    name: 'Путь домой',
    rating: 5,
    tracks: ['Песня 1', 'Песня 2', 'Песня 3'],
    trackCount: 3,
}

console.log(playlist);
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Получение значения свойства объекта 
// ========================================================================================
// 1. Через точку - основной способ
// ----------------------------------------------------------------------------------------
console.log(playlist.tracks);
// ----------------------------------------------------------------------------------------
// 2. Если имя свойства хранится в переменной, то используя квадратные скобки
// ----------------------------------------------------------------------------------------
const propertyName = 'name';
console.log(playlist[propertyName]); // вызов названия свойства (в виде строковой переменной)
console.log(playlist['name']);      //  идентично - вызов строки
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Короткая запись свойств (если имя переменной и имя ключа в объекте совпадают)
// ========================================================================================
// Имя переменной используется как имя свойства, 
// а значение переменной используется как значение этого свойства.
// ----------------------------------------------------------------------------------------

const username = 'Sasha';
const email = 'san@gmail.com';

const signupData = {
    username,
    email,
};

console.log(signupData);

// ----------------------------------------------------------------------------------------

// ========================================================================================
// Вычисляемые свойства
// ========================================================================================
// Если необходимо динамически получить ключ (название свойства объекта) из переменной -
// используются квадратные скобки
// Чтобы получить значение свойства - ставим просто имя переменной
// ----------------------------------------------------------------------------------------
const inputName = 'color';
const inputValue = 'tomato';

const colorData = {
    // color: 'tomato';  Название свойства необходимо получить динамически
    [inputName]: inputValue,
}

console.log(colorData);  // Объект {color: 'tomato'}

// ----------------------------------------------------------------------------------------

// ========================================================================================
// Добавление свойства в объект
// ========================================================================================
// Просто обратиться к новому свойству объекта через течку и присвоить этому свойству значение
// ----------------------------------------------------------------------------------------
signupData.userType = 'VIP';
console.log(signupData); // {username: 'Sasha', email: 'san@gmail.com', userType: 'VIP'}

// ----------------------------------------------------------------------------------------

// ========================================================================================
// Редактирование свойства в объекте
// ========================================================================================
// Просто обратиться к  свойству объекта через течку и присвоить этому свойству новое значение
// ----------------------------------------------------------------------------------------
signupData.username = 'Vova';
console.log(signupData); // {username: 'Vova', email: 'san@gmail.com', userType: 'VIP'}
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Объект - это сложный тип (как и массив)
// ========================================================================================
// В переменной объекта хранится ССЫЛКА (адрес) на объект
// ----------------------------------------------------------------------------------------
const a = { x: 1, y: 2 };
const b = a;
console.log(a, b); // {x: 1, y: 2}     {x: 1, y: 2}

// Новое свойство объекта  a
a.z = 3;
// В объекте b также появилось свойство  z = 3.
console.log(a, b);  // {x: 1, y: 2, z: 3}    {x: 1, y: 2, z: 3}

// Вывод в консоль сущности объекта со всеми свойствами
console.dir(a); 
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Методы объекта
// ========================================================================================
// Объект хранит в себе набор характеристик (свойств)  со значениями и
// набор методов (функций) для работы с этими характеристиками (свойствами)
// ----------------------------------------------------------------------------------------
// Метод – это функция, которая работает со свойствами объекта.
// Внутри метода объекта НЕ используется имя самого объекта.
// ----------------------------------------------------------------------------------------
// this - это ссылка на тот объект, который вызвал эту функцию.
// this – только у методов (функций) внутри объекта
// ----------------------------------------------------------------------------------------
const playlistNew = {
    name: 'Путь домой',
    rating: 5,
    tracks: ['Песня 1', 'Песня 2', 'Песня 3'],
    trackCount: 3,

    // Создание метода объекта с выводом на консоль значения свойства  name
    // Запись метода по старому синтаксису
    getName: function () {
        console.log(this.name);
    },
    // Запись метода по новому синтаксису - метод объекта
    getRating() {
        console.log(this.rating);
    },

    // Метод по изменению рейтинга
    setRating(newRating) {
        this.rating = newRating;
    },

    // Метод добавления трека в массив треков
    addTrack(trackNew) {
        this.tracks.push(trackNew);
        // Изменение свойства количества треков в плейлисте = длина массива с треками
        this.trackCount = this.tracks.length;
    },

    // Метод получения количества треков в плейлисте
    getTrackCount() { 
        return this.tracks.length;
    },
    
}
console.log(playlistNew);

// Вызов метода объекта
playlistNew.getName();  // Путь домой
playlistNew.getRating();  // 5

// Вызов метода изменения рейинга с аргументом нового рейтинга
playlistNew.setRating(3);
playlistNew.getRating();  // 3

// Вызов метода изменения рейинга с аргументом нового рейтинга
playlistNew.addTrack('Песня Новая');
console.log(playlistNew); // ..tracks : (4) ['Песня 1', 'Песня 2', 'Песня 3', 'Песня Новая']

// Вызов метода получения количества треков
console.log('Количество треков - ',playlistNew.getTrackCount());

// ----------------------------------------------------------------------------------------

// ========================================================================================
// Получение массива ключей из объекта
// ========================================================================================
// СИНТАКСИС :      Object.keys(наименование_объекта)
// Возвращает массив ключей объекта
// ----------------------------------------------------------------------------------------
// Пример - объект с отзывами
const feedBack = {
    good: 5,
    normal: 10,
    bad: 3,
}
const keysFeedBack = Object.keys(feedBack);
console.log(keysFeedBack);    // ['good', 'normal', 'bad']
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Перебор массива по ключу
// ========================================================================================
// Используя цикл  for ... of
// ----------------------------------------------------------------------------------------
for (const key of keysFeedBack) {
    console.log('Ключ - ',key);
    console.log('Значение - ', feedBack[key]); // Получение значения через переменную ключа
}
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Получение массива значений из объекта
// ========================================================================================
// СИНТАКСИС :      Object.values(наименование_объекта)
// Возвращает массив значений объекта
// ----------------------------------------------------------------------------------------
const valuesFeedBack = Object.values(feedBack);
console.log(valuesFeedBack);    //  [5, 10, 3]
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Перебор значений
// ========================================================================================
// Используя цикл  for ... of
// ----------------------------------------------------------------------------------------
// ПРИМЕР : Подсчет общего количества отзывов
let totalFeedBack = 0;
for (const value of valuesFeedBack) {
    totalFeedBack = totalFeedBack + value;
}
console.log('totalFeedBack - ', totalFeedBack);
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Работа с коллекцией (массив объектов)
// ========================================================================================

// ----------------------------------------------------------------------------------------
// Создание массива объектов
// ----------------------------------------------------------------------------------------
const friends = [
    { name: 'Саша', online: true, },
    { name: 'Света', online: true, },
    { name: 'Вася', online: false, },
    { name: 'Петя', online: false, },
];
// ----------------------------------------------------------------------------------------
// Вывод массива объектов в виде таблицы
// ----------------------------------------------------------------------------------------
console.table(friends);
// ----------------------------------------------------------------------------------------
// Перебор элементов массива через цикл и получение свойств объекта из массива
// ----------------------------------------------------------------------------------------
for (const friend of friends) {
    console.log('Данные по другу - ', friend);
    console.log('Имя - ', friend.name);
}
// ----------------------------------------------------------------------------------------
// Добавление нового свойства в каждый элемент массива - в каждый объект - через цикл
// ----------------------------------------------------------------------------------------
for (const friend of friends) {
    friend.city = 'Каменское';
    console.log('Данные по другу - ', friend);
}
// ----------------------------------------------------------------------------------------


// ========================================================================================
// Пример : Поиск друга по имени
// ========================================================================================
// Создаем функцию с массивом объектов и поисковой строкой
// ----------------------------------------------------------------------------------------
function findFriendByName (allFriends, nameFriend) {
    for (const friend of allFriends) {
        if (friend.name === nameFriend) {
            console.log(`Друг ${nameFriend} найден !`)
            return friend.online;
        }
    }
    console.log(`Друг ${nameFriend} не найден`)
}

const myfriend = 'Вася';
const isOnline = findFriendByName(friends, myfriend);
console.log(`Статус друга ${myfriend} - `, isOnline);
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Пример : Создать массив с именами всех друзей
// ========================================================================================
// ----------------------------------------------------------------------------------------
function getAllFriends(allFriends) {
    // Пустой локальный массив
    const names = [];
    for (const friend of allFriends) {
        // Добавляем имя в массив
        names.push(friend.name);
    }
    return names;
}
// Вызов функции по созданию массива с именами друзей
console.log('Массив друзей - ',getAllFriends(friends));
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Пример : Создать массив с полными данными всех друзей (объекты), которые в Online (true)
// ========================================================================================
// ----------------------------------------------------------------------------------------
function getAllFriendsOnline(allFriends) {
    // Пустой локальный массив
    const onlineFriends = [];
    for (const friend of allFriends) {
        // Если friend.online === true
        if (friend.online) {
            // Добавляем весь объект в массив
            onlineFriends.push(friend);
        }
    }
    // Возвращаем массив объектов - коллекцию
    return onlineFriends;
}

// Вызов функции по созданию массива друзей, которые в Online 
console.log('Массив друзей в Online - ',getAllFriendsOnline(friends));
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Пример. Узнать количество свойств объекта
// ========================================================================================
// Создаем массив ключей и узнаем его длину
// ----------------------------------------------------------------------------------------
const x = {
    a: 1,
    b: 2,
    c: 50,
}
const lenX = Object.keys(x).length;
console.log('Количество свойств объекта - ', lenX); // 3
// ----------------------------------------------------------------------------------------


// ========================================================================================
// Конкатенация массива методом concat()
// ========================================================================================
// СИНТАКСИС :  массив.concat(массив_1, массив_2)
// ----------------------------------------------------------------------------------------
const numbers = [1, 2].concat([3, 4], [5], [6, 7, 8, 9, 10]);
console.log(numbers);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Операция РАСПЫЛЕНИЯ ... (spread) – современный аналог метода concat()
// ========================================================================================
// Берет определенную коллекцию и разбивает на отдельные элементы
// ...[1,2,3]  получаем распыленный массив = список элементов.
// Распыление может быть в любом месте
// ----------------------------------------------------------------------------------------
const numbersNew = [...[1, 2],...[3, 4], ...[5], ...[6, 7, 8, 9, 10]];
console.log(numbersNew);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Примеры применения операции ... распыления
// ========================================================================================
// ----------------------------------------------------------------------------------------
// Поиск максимального и минимального числа в массиве
// ----------------------------------------------------------------------------------------
const celsius = [18, 5, 100, 55, 99, 77];
const celsiusMax = Math.max(...celsius);
console.log('MAX = ', celsiusMax);          // MAX =  100
const celsiusMin = Math.min(...celsius);
console.log('MIN = ', celsiusMin);          // MIN =  5
// ----------------------------------------------------------------------------------------
// Создание поэлеметной копии массива
// ----------------------------------------------------------------------------------------
const array1 = [1, 2, 3, 4];
const array2 = [...array1];
console.log('array1', array1);  // [1, 2, 3, 4]
console.log('array2', array2);  // [1, 2, 3, 4]
// ----------------------------------------------------------------------------------------
// Создание поэлеметной копии массива объектов
// ----------------------------------------------------------------------------------------
const base1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const base2 = [...base1];
console.log('base1', base1);    // [{ a: 1 }, { b: 2 }, { c: 3 }]
console.log('base2', base2);    // [{ a: 1 }, { b: 2 }, { c: 3 }]
// Массивы между собой НЕ равню, но их элементы равны между собой, так как это ссылки
console.log(base1 === base2);           // false
console.log(base1[1] === base2[1]);     // true  - это ссылки на сложные объекты
// ----------------------------------------------------------------------------------------
// Сшивание нескольких массивов, записанных в переменные
// ----------------------------------------------------------------------------------------
const tempLast = [1, 2, 3];
const tempCurrent = [4, 5, 6];
const tempFuture = [7, 8, 9];
const tempAll = [...tempLast, ...tempCurrent, ...tempFuture];
console.log('tempAll - ', tempAll);     // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Распыление объектов с объединением в один
// ========================================================================================
// Object.prototype.assign() и    ... spread
// ----------------------------------------------------------------------------------------

const objectFirst = { x: 1, y: 1 };
const objectSecond = { x: 2, z: 3 };

// Старая запись
const objectAll = Object.assign({}, objectFirst, objectSecond); 

// Свойство x: 1 было заменено на x: 2, так как имя свойства - уникально
console.log('objectAll', objectAll);    // {x: 2, y: 1, z: 3}
// ----------------------------------------------------------------------------------------
// Новая запись
const objectAllNew = { ...objectFirst, ...objectSecond };
console.log('objectAllNew', objectAllNew);    // {x: 2, y: 1, z: 3}
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Примеры - Распыление объектов
// ========================================================================================
// ----------------------------------------------------------------------------------------
// Если необходимо распылить в новый объект с заранее установленнымb свойствами
// ----------------------------------------------------------------------------------------
const prod = {
    name: 'Зажигалка',
    ...objectFirst,
    price: 10.5,
    ...objectSecond,
};
console.log('prod ', prod);     //   {name: 'Зажигалка', x: 2, y: 1, price: 10.5, z: 3}
// ----------------------------------------------------------------------------------------
// Финальные настройки программы - задаются как по-умолчанию, частично измененные пользователем
// ----------------------------------------------------------------------------------------
// Базовые настройки
const settingDefault = {
    theme: 'light',
    showNotification: false,
    showSidebar: true,
};
// Пользовательские настройки
const settingUser = {
    theme: 'dark',
    showNotification: true,
};
// Окончательные настройки программы
const settingFinal = { ...settingDefault, ...settingUser };
console.log(settingFinal);  // {theme: 'dark', showNotification: true, showSidebar: true}
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Деструктуризация 
// ========================================================================================
// Это практически РАСПАКОВКА-РАЗАРХИВИРОВАНИЕ объектов
// Позволяют создать переменные, одноименные с именами свойств объекта, со значениями объекта
// ----------------------------------------------------------------------------------------
const user = {
    nameUser: 'Саша',
    dateBorn: 18,
    userWeight: 87,
    worker: 100,
}
// ----------------------------------------------------------------------------------------
// Деструктуризация объекта в определенные переменные, одинаковые с названиями свойств
// ----------------------------------------------------------------------------------------
const { nameUser, userWeight} = user;
console.log(userWeight);    // 87;

// ----------------------------------------------------------------------------------------
// Установка значения переменной "по умолчанию" (дефолтное) при деструктуризации
// Если есть такое свойство, то локальная переменная получит значение свойства из объекта,
// Если нет такого свойства, то локальная переменная получит дефолтное значение.
// ВНИМАНИЕ !  Свойство в объект НЕ добавляется :)
// ----------------------------------------------------------------------------------------
const { dateBorn = 1, monthBorn = 1 } = user;
console.log(dateBorn, monthBorn);    //    18    1;

// ----------------------------------------------------------------------------------------
// Установка в локальную переменную значения свойства, если их имена отличаются :
// СИНТАКСИС :  { имя_свойства_объекта : имя_локальной_переменной } = имя_объекта
// ----------------------------------------------------------------------------------------
const { worker: workCount } = user;
console.log(workCount);             // 100
// Установка значения переменной "по умолчанию" (дефолтное) в этом случае :
const { workerName: workName = 'Alex' } = user;
console.log(workName);             // Alex
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Деструктуризация сложных объектов 
// ========================================================================================
// Сложный объект - у которого в свойствах есть тоже вложенные объекты
// ----------------------------------------------------------------------------------------
const profile = {
    namePro: 'Aleks',
    location: 'Ukraine',
    tag: 'aleks123',
    stats: {
        followers: 100,
        views: 200,
        likes:50,
    },
};
// ----------------------------------------------------------------------------------------
// Деструктуризация вложенного объекта   stats
// В локальную переменную  stats  записывается объект
// ----------------------------------------------------------------------------------------
// const { namePro, tag, stats } = profile;
// console.log(namePro, tag, stats);   // Aleks aleks123 {followers: 100, views: 200, likes: 50}

// ----------------------------------------------------------------------------------------
// Можно сделать глубже деструектуризацию - объект, который уже в переменной  stats
// ----------------------------------------------------------------------------------------
// const { followers, views, likes } = stats;
// console.log(followers, views, likes);   // 100 200 50

// ----------------------------------------------------------------------------------------
// Другая запись глубокой деструктуризации в одном операторе
// ----------------------------------------------------------------------------------------
const { namePro, tag, stats: {followers, views, likes}, } = profile;
console.log(namePro, tag, followers, views, likes);     // Aleks aleks123 100 200 50
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Деструктуризация массивов
// ========================================================================================
// При деструктуризации элементы массива присваиваются локальным переменным
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// Создание массива  rgb
// ----------------------------------------------------------------------------------------
const rgb = [255, 145, 28];
console.log(rgb);                   // [255, 145, 28]
// ----------------------------------------------------------------------------------------
// Присваивание локальным переменным значений из массива  rgb  по порядку индекса
// ----------------------------------------------------------------------------------------
const [red, green, blue] = rgb;
console.log(red, green, blue);      // 255 145 28
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Пример. Получение данных по авторам и их рейтингу из объекта
// ========================================================================================
// ----------------------------------------------------------------------------------------
// Объявляем объект
// ----------------------------------------------------------------------------------------
const autors = {
    san: 10,
    vasya: 5,
    petro: 2,
}
// ----------------------------------------------------------------------------------------
// Получаем массив массивов [Ключ, Значение]
// ----------------------------------------------------------------------------------------
const entries = Object.entries(autors);
console.log(entries);
// ----------------------------------------------------------------------------------------
// Перебираем массив
// ----------------------------------------------------------------------------------------
for (const entry of entries) {
    // Деструктуризация полученного массива [Ключ, Значение]
    const [name, rating] = entry;
    // получаем отдельные переменные
    console.log(name, rating);
}
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Операция ... rest (сбор) - в объект
// ========================================================================================
// Собирает значения в один объект
// ----------------------------------------------------------------------------------------
const album = {
    nameAlbum: 'Название',
    year: 1990,
    property1: 'Свойство 1',
    property2: 'Свойство 2',
    length: 54,
}

// ----------------------------------------------------------------------------------------
// Деструктуризируем объект в переменные, собирая последние свойства в объект
// ----------------------------------------------------------------------------------------
const { nameAlbum, year, ...allProperty } = album;
         // В переменной  allProperty  - объект с остальными свойствами объекта  album
console.log(nameAlbum, year, allProperty);
         // Название 1990 {property1: 'Свойство 1', property2: 'Свойство 2', length: 54}
// ----------------------------------------------------------------------------------------


// ========================================================================================
// Паттерн "Объект настроек"
// ========================================================================================
// Часто применяется в приложениях, когда у функции больше 2-3 аргументов.
// ----------------------------------------------------------------------------------------
// Функция просмотра информации о профиле пользователя
// В качестве параметров - объект  profile (описан и создан ранее) :
// ---------------------------------------------------------------------------------------- 
// const profile = {
//     namePro: 'Aleks',
//     location: 'Ukraine',
//     tag: 'aleks123',
//     stats: {
//         followers: 100,
//         views: 200,
//         likes:50,
//     },
// };
// ----------------------------------------------------------------------------------------
const showProfileInfo = function (userProfile) {
    console.log(userProfile);
    // Дестуктуризация всех свойств объекта в локальные переменные
    const { namePro, location, tag, stats: { followers, views, likes } } = userProfile;
    // Использование переменных, например вывод на консоль
    console.log(namePro, followers, views, likes);      // Aleks 100 200 50
};

// ----------------------------------------------------------------------------------------
// Вызов функции 
// ----------------------------------------------------------------------------------------
showProfileInfo(profile);

// ----------------------------------------------------------------------------------------
// Можно деструктуризировать сразу в параметрах функции при объявлении в подписи
// ----------------------------------------------------------------------------------------
const showProfileInfoNew = function ({ namePro, location, tag, stats: { followers, views, likes } }) {
    // Использование переменных, например вывод на консоль
    console.log(namePro, location, followers, views, likes);   // Aleks Ukraine 100 200 50
};
// ----------------------------------------------------------------------------------------
// Вызов функции 
// ----------------------------------------------------------------------------------------
showProfileInfoNew(profile);
// ----------------------------------------------------------------------------------------

// ========================================================================================
// Рендеринг страницы с полученными данными
// ========================================================================================
//
// ----------------------------------------------------------------------------------------
const makeProfileMarkup = function (userProfile) {
    console.log(userProfile);
    // Дестуктуризация всех свойств объекта в локальные переменные
    const { namePro, location, tag, stats: { followers, views, likes } } = userProfile;
    // Использование переменных
    // Формирование профайла на HTML-странице
    return `<div>
            <p>Пользователь - ${namePro} </p>
            <p>Локация - ${location}</p>
            <p>Ник - @${tag}</p>
            <ul>
                <li>Подписчиков : ${followers}</li>
                <li>Просмотров : ${views}</li>
                <li>Лайков : ${likes}</li>
            </ul>
            </div>`;
   
};

// Вызов функции формирования динамического HTML-кода с данными пользователя
const markup = makeProfileMarkup(profile);

// Вывод строки кода в консоль
console.log(markup);

// Вывод строки HTML-кода в страницу
document.body.insertAdjacentHTML('afterbegin', markup);

// ----------------------------------------------------------------------------------------

// ========================================================================================
// Операция ... rest (сбор) - передача аргументов в функцию
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------




// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
// 
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
//
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
//
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
//
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------


// ========================================================================================
//
// ========================================================================================
//
// ----------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
