// ========================================================================================
// Модальное окно - работа с событиями
// ========================================================================================

// Пример.  Текущие задачи :
// 1. Открыть и закрыть по кнопкам : onModalOpen  и  onModalClose
// 2. Закрыть по клику в бекдроп : onBackDropClick
// 3. Закрыть по нажатию клавиши Escape :  onEscapeKeyPress
// В CSS есть класс show-modal, которій необходимо добавить на body при открытии модалки



const refsModal = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
}
// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector('.js-backdrop');

// Добавление слушателей событий

// На кнопку - Открыть модальное окно
refsModal.openModalBtn.addEventListener('click', onModalOpen);

// На кнопку - Закрыть модальное окно
refsModal.closeModalBtn.addEventListener('click', onModalClose);

// На любой клик на свободной области  backdrop
refsModal.backdrop.addEventListener('click', onBackDropClick);



// Открыть модальное окно по кнопке
function onModalOpen(event) { 

    // Слушатель события на нажатие клавиши Escape - только при открытой модалке
    window.addEventListener('keydown', onEscapeKeyPress);

    // Добавляем класс на body
    document.body.classList.add('show-modal');
};

// Закрыть модальное окно по кнопке
function onModalClose(event) {

    // Снимаем слушателя событий при закрывании модалки
    window.removeEventListener('keydown', onEscapeKeyPress);
    
    // Снимаем класс из body
    document.body.classList.remove('show-modal');
};
 

// Закрыть по клику в бекдроп 
// -------------------------------------------------------------------------------------------
// Всплывающие события – это когда событие происходит на верхнем элементе - потомке, 
// а ловится это событие – уже на каком-то предке, на который установлен слушатель событий.
// -------------------------------------------------------------------------------------------
// event.currentTarget – возвращает элемент, который словил событие (там, где слушатель)
// event.target – возвращает целевой элемент, на котором первоначально было событие.
// -------------------------------------------------------------------------------------------

function onBackDropClick(event) { 
    console.log(event.currentTarget) // весь родительский элемент - backdrop
    console.log(event.target) // целевой элемент события - backdrop или его дети/потомки

    // Если целевой элемент - это backdrop, а не модальное окно или его потомки
    // event.target===refsModal.backdrop
    if (event.currentTarget === event.target) {
        // Вариант 1 = Снять класс
        //             document.body.classList.remove('show-modal');
        // Вариант 2 = Просто вызвать функцию по закрытию модального окна
        onModalClose();
    }  
};

// Закрыть по нажатию клавиши Escape 
function onEscapeKeyPress(event) {
    console.log('event.code - ', event.code);
    if (event.code === "Escape") {
        // Вариант 1 = Снять класс
        //             document.body.classList.remove('show-modal');
        // Вариант 2 = Просто вызвать функцию по закрытию модального окна
        onModalClose();
    }
};




