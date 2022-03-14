const colors = ["green", "red", "blue", "yellow", "purple", "orange", "pink", "brown", "gray", "cyan"];
const btn = document.getElementById('btn');
const colorName = document.getElementById('color-name');
const simpleBtn = document.getElementById('simple');
const hexBtn = document.getElementById('hex');

let isHexMode = false;

btn.addEventListener('click', function () {
    if (isHexMode) {
        const hexColor = getRandomHexColor();
        document.body.style.backgroundColor = hexColor;
        colorName.textContent = hexColor;
    } else {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        colorName.textContent = colors[randomNumber];
    }
});

simpleBtn.addEventListener('click', function () {
    isHexMode = false;
    simpleBtn.classList.add('active');
    hexBtn.classList.remove('active');
    document.body.style.backgroundColor = '#f1f5f8';
    colorName.textContent = '#f1f5f8';
});

hexBtn.addEventListener('click', function () {
    isHexMode = true;
    hexBtn.classList.add('active');
    simpleBtn.classList.remove('active');
    document.body.style.backgroundColor = '#f1f5f8';
    colorName.textContent = '#f1f5f8';
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function getRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber16()];
    }

    return hexColor;
}

function getRandomNumber16() {
    return Math.floor(Math.random() * 16);
}

// feat: implement simple color array logic

// feat: add hex color generation function
