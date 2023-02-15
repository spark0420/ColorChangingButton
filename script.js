var button = document.querySelector('.button');

button.onmousedown = function (event) {
 var red = 0;
 var blue = 255;
 var green = 0;

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
 event.preventDefault();
};

//mousedown 
//touchstart
