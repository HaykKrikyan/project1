const box = document.querySelector('.box');
const input = document.querySelector('.range');


let gradient = '';

input.oninput = function(){
    gradient = `linear-gradient(90deg, red 0% ${this.value}%,
     grey ${this.value}% 100%)`;
     
     if(this.value > 33.3 && this.value < 66.6){
        gradient = `linear-gradient(90deg, red 0% 33.3%,
          blue  33.3% ${this.value}% ,  grey ${this.value}% 100%)`;
     } else if(this.value > 66.6){
           gradient = `linear-gradient(90deg, red 0% 33.3%, blue 33.3% 66.6%,
           orange 66.6% ${this.value}% , grey ${this.value}% 100%)`;
     }
     box.style.background = gradient;
}
