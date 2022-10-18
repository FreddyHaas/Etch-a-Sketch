/* Create grit */
const container = document.getElementById('container');
for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('column');
        container.appendChild(div);
    };

const columns = document.querySelectorAll('.column');

columns.forEach((column) => {
    for (i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        column.appendChild(box);
    }
});

/* Update color when hovering */

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener ('mouseover', () => {
        box.setAttribute('id', 'boxEdited');
    })});