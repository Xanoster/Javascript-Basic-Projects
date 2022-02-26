let count = 0;

const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = '#27ae60';
    } else if (count < 0) {
        counter.style.color = '#e74c3c';
    } else {
        counter.style.color = '#667eea';
    }
}

/* Add increase button */
/* Add decrease button */
/* Add reset button */
/* Add color change on value */