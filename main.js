
/* Create grit */
const container = document.getElementById('container');
for (i = 0; i < 256 ; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    };

/* Update color when hovering */
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener ('mouseover', () => {
        box.setAttribute('id', 'boxEdited');
    })});