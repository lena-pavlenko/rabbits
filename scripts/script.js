'use strict';

// Получаем элементы со страницы
const body = document.querySelector('.wrapper');
const blocks = body.querySelectorAll('.block');
const numbers = body.querySelectorAll('.block-number');
const btnReset = document.querySelector('.btn-reset');

// Вешаем обработчик клика
body.addEventListener('click', (e) => {

    // Получаем блок с классом стрелки
    let arrow = e.target.closest('.arrow');

    // Получаем блок ячейки
    let block = e.target.closest('.block');

    // Создаем переменную для хранения индекса элемента
    let index = 0;

    // Если клик по стрелке
    if (arrow) {
        // Перебираем массив ячеек
        blocks.forEach((thisBlock, thisIndex) => {
            // Если ячейка совпадает с кликнутой ячейкой
            if (block === thisBlock){
                // Индексу элемента присваиваем значение индекса ячейки
                index = thisIndex;
            }
        });
    
        // Клик по стрелке влево
        if (arrow.classList.contains('left')){
            // Проверяем, чтобы стрелка не срабатывала на верхней левой ячейке
            if (index > 0){
                // Выполняем подмену переменных для ячеек
                [block.querySelector('.block-number').textContent, numbers[index - 1].textContent] = 
                [numbers[index - 1].textContent, block.querySelector('.block-number').textContent];
            }
        }
    
        // Клик по стрелке вправо
        if (arrow.classList.contains('right')){
            // Проверяем, чтобы стрелка не срабатывала на нижней правой ячейке
            if (index < blocks.length - 1){
                // Выполняем подмену переменных для ячеек
                [block.querySelector('.block-number').textContent, numbers[index + 1].textContent] = 
                [numbers[index + 1].textContent, block.querySelector('.block-number').textContent];
            }
        }
        
        // Клик по стрелке вверх
        if (arrow.classList.contains('top')){
             // Проверяем, чтобы стрелка не срабатывала на верхних ячейках
            if (index > 5){
                // Выполняем подмену переменных для ячеек
                [block.querySelector('.block-number').textContent, numbers[index - 5].textContent] = 
                [numbers[index - 5].textContent, block.querySelector('.block-number').textContent];
            }
        }
        
        // Клик по стрелке вниз
        if (arrow.classList.contains('bottom')){
            // Проверяем, чтобы стрелка не срабатывала на нижних ячейках
            if (index < blocks.length - 5){
                // Выполняем подмену переменных для ячеек
                [block.querySelector('.block-number').textContent, numbers[index + 5].textContent] = 
                [numbers[index + 5].textContent, block.querySelector('.block-number').textContent];
            }
        }
    }
})

// Сброс
btnReset.addEventListener('click', () => {
    numbers.forEach((number, index) => {
        number.textContent = +index + 1
    })
})