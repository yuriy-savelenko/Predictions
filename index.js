// // Сейчас мы сделаем сайт, который будет выдавать предсказания. Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться 
// таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.
// // Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать 
// некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а 
// все лишние кнопки уберите с экрана,
// //  чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.

const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');
const predBox = document.getElementById('predbox');
const title = document.getElementById('title');
let timerId;

startTimer = () => {
    timerId = window.setInterval(() => {
        randomNumber = Math.ceil(Math.random(1) * 10);
        predBox.textContent = randomNumber;
    }, 100);
}

stopTimer = () => {
    window.clearInterval(timerId);
}

firstBtn.addEventListener('click', () => {
    startTimer();
    firstBtn.classList.add('hide');
    secondBtn.classList.add('anim');
})

secondBtn.addEventListener('click', () => {
    stopTimer();
    switch (randomNumber) {
        case 1: if (randomNumber === 1) {
            predBox.textContent = 'Предсказание 1';
        }
        case 2: if (randomNumber === 2) {
            predBox.textContent = 'Предсказание 2';
        } case 3: if (randomNumber === 3) {
            predBox.textContent = 'Предсказание 3';
        } case 4: if (randomNumber === 4) {
            predBox.textContent = 'Предсказание 4';
        } case 5: if (randomNumber === 5) {
            predBox.textContent = 'Предсказание 5';
        } case 6: if (randomNumber === 6) {
            predBox.textContent = 'Предсказание 6';
        } case 7: if (randomNumber === 7) {
            predBox.textContent = 'Предсказание 7';
        } case 8: if (randomNumber === 8) {
            predBox.textContent = 'Предсказание 8';
        } case 9: if (randomNumber === 9) {
            predBox.textContent = 'Предсказание 9';
        } case 10: if (randomNumber === 10) {
            predBox.textContent = 'Предсказание 10';
        }
    }
    title.classList.add('anim');
    title.textContent = 'It is your prediction';
    secondBtn.classList.add('hide');
});