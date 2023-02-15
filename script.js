// var button1 = document.querySelector('.btn');
let btns = document.getElementsByClassName("btn");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        let buttonStyle = getComputedStyle(this);
        let buttonBgColor = buttonStyle["backgroundColor"];

        if(buttonBgColor == "rgb(255, 0, 0)"){
            this.style.backgroundColor = "rgb(0, 0, 255)";
        }else{
            this.style.backgroundColor = "rgb(255, 0, 0)";
        }
    })
};

//onmousedown 
//ontouchstart
