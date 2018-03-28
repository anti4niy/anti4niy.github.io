let canv = document.getElementById('canvas'); 
let ctx = canv.getContext('2d');
let isMouseDown = false; 
let selectLineWidth = document.querySelector('.selectLineWidth');   
let lineWidth = selectLineWidth.options.selectedIndex + 1;
let colorPicker = document.getElementById('primary_block');
let color = 'black';
let btnClear = document.querySelector('.btn-clear');
let downloadImg = document.querySelector('.downloadImg');
let btnColorPick = document.querySelector('.btn-color-picker');
let currentColor = document.querySelector('.current-color');
let eraser = document.querySelector('.eraser');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

selectLineWidth.addEventListener('change', function(e) {
    lineWidth = selectLineWidth.options.selectedIndex + 1;
});

btnColorPick.addEventListener('click', e => {
    if (getComputedStyle(colorPicker).display === 'none' ) {
        btnColorPick.textContent = 'Hide Color Picker ▲';
        colorPicker.style.display = 'block';
    } else {
        btnColorPick.textContent = 'Show Color Picker ▼';
        colorPicker.style.display = 'none';
    }
    
});

// eraser.addEventListener('click', e => {
//     currentColor.style.backgroundColor = '#fff';
//     color = '#fff';
// });

btnClear.addEventListener('click', e => clear());

canv.addEventListener('mousedown', function() {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});

document.addEventListener('mousemove', e => {
    currentColor.style.backgroundColor = getComputedStyle(document.getElementById('out_color')).backgroundColor;
    color = getComputedStyle(document.getElementById('out_color')).backgroundColor;
});

canv.addEventListener('mousemove', function(e) {
    if(isMouseDown) {

        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth * 2;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, lineWidth, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);

    }

});

// document.addEventListener('touchmove', function(e) {
//     e.preventDefault();
//     ctx.fillStyle = color;
//     ctx.strokeStyle = color;
//     ctx.lineWidth = lineWidth * 2;
//     ctx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY - 75);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(e.changedTouches[0].pageX, e.changedTouches[0].pageY - 75, lineWidth, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(e.offsetX, e.offsetY);

// });

function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    ctx.fillStyle = color;
}
