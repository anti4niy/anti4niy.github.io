let canv = document.getElementById('canvas'); 
let ctx = canv.getContext('2d');
let isMouseDown = false; 
let selectLineWidth = document.querySelector('.selectLineWidth');   
let lineWidth = 1;
let colors = document.querySelector('.colors');
let color = 'black';
let btnClear = document.querySelector('.btn-clear');
let downloadImg = document.querySelector('.downloadImg');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// colors.addEventListener('click', function(e) {
//     color = _res;
// });
//document.addEventListener('change', e => color = getComputedStyle(document.getElementById('out_color')).backgroundColor);

selectLineWidth.addEventListener('change', function(e) {
    lineWidth = selectLineWidth.options.selectedIndex + 1;
});

btnClear.addEventListener('click', e => clear());
//btnClear.addEventListener('touchstart,')
canv.addEventListener('mousedown', function() {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});

canv.addEventListener('mousemove', function(e) {
    
    color = getComputedStyle(document.getElementById('out_color')).backgroundColor;

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
