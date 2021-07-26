const btnRandomColor = document.getElementById('btnRandomColor');
const spnColor = document.getElementById('spnColor');

// thanks stack overflow 😎
let getRandomInt = (min, max) => {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }


 let componentToHex = (c) => {
     var hex = c.toString(16);
     return hex.length == 1 ? "0" + hex : hex;
   }
   

 let rgbToHex = (r, g, b) => {
     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
   }




btnRandomColor.addEventListener('click', () =>{
     var redVal = getRandomInt(0,255);
     var greenVal = getRandomInt(0,255);
     var blueVal = getRandomInt(0,255);
    var randomColor =  rgbToHex(redVal, greenVal, blueVal);
     spnColor.innerHTML = randomColor
     spnColor.style = 'color:' + randomColor
})