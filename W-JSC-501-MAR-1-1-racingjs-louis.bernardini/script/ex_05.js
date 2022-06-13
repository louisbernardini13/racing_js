var increment = document.querySelector('.increment');
var decrement = document.querySelector('.decrement');
var body = document.querySelector('body');

increment.addEventListener('click', function(e){
    var css = window.getComputedStyle(body).fontSize;
    var size = parseFloat(css);
    body.style.fontSize = size + 1 + 'px';

});
decrement.addEventListener('click', function(e){
    var css = window.getComputedStyle(body).fontSize;
    var size = parseFloat(css);
    body.style.fontSize = size + (-1) + 'px';
});

var selectColor = document.querySelector('.selectColor');

selectColor.addEventListener('change', function(){
    var yourColor = this.value;
    body.style.backgroundColor = yourColor;
    console.log(yourColor);
})