/* FUNCTION: Create grit */
const container = document.getElementById('container');
function createGrit (noOfRows) {
    for (i = 0; i < noOfRows; i++) {
        const div = document.createElement('div');
        div.classList.add('column');
        container.appendChild(div);
    };

    const columns = document.querySelectorAll('.column');

    columns.forEach((column) => {
        for (i = 0; i < noOfRows; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            column.appendChild(box);
    }
});
}

/* Create initial grit */
let gritSize = 16;
createGrit (gritSize);

/* FUNCTION: Create random color */
function createRandomColor () {
    var rgb = [];
    for (i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random()*256);
    }
    return rgb;
};

/* Update color when hovering */
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        rgbValues = createRandomColor();
        box.style.background = 'rgb(' + rgbValues[0] + ',' + rgbValues[1] + ',' + rgbValues[2] + ')';
    })});

/* FUNCTION: Remove initial grit */
const columns = document.querySelectorAll('.column');
function removeGrit () {
    columns.forEach((column) => {
        while (column.firstChild) {
            column.removeChild(column.lastChild);        
        }
    })
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

};

/* Prompt user for input of grit size */
let userInput;

const btn = document.querySelector('button');
btn.addEventListener ('click', () => {
    userInput = prompt ("Please enter grit size");
    userInput = parseInt (userInput);
    while (!(Number.isInteger(userInput) && userInput < 101)) {
        userInput = prompt ("Please enter number from 1 to 100");
        userInput = parseInt (userInput);
    }
    gritSize = userInput;
    removeGrit();
    createGrit(gritSize);
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener ('mouseover', () => {
            rgbValues = createRandomColor();
            box.style.background = 'rgb(' + rgbValues[0] + ',' + rgbValues[1] + ',' + rgbValues[2] + ')';
    })});
});

