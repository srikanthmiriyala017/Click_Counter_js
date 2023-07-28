const clickButton = document.getElementById('clickButton');
const countElement = document.getElementById('count');

let clickCount = 0;

clickButton.addEventListener('click', () => {
    clickCount++;
    countElement.textContent = clickCount;
});
