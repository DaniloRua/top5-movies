const body = document.querySelector('body');
const matrix = document.getElementById('matrixList');
let newCanvas = ''


matrix.addEventListener('mouseover',function(){
  setTimeout(() => {
    fadeOutBody();
    console.log('rodou')
    newCanvas += `<canvas> </canvas>`;
    insertAdjacentElement(newCanvas)
 

  }, 4000);

})


function fadeOutBody(){
  body.classList.toggle('bodyMatrix')

}


function insertAdjacentElement(element ){ 
 element =newCanvas
 
 document.body.insertAdjacentHTML("afterbegin", element, reloaded())  
 
 //start the animation
 var canvas = document.querySelector('canvas')
 ctx = canvas.getContext('2d');


 // Setting the width and height of the canvas
 canvas.width = window.innerWidth
 canvas.height = window.innerHeight;

 // Setting up the letters
var letters = '人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない!£$%^&*#@権利とを承認することは、世界における自由、正義及び平和の基礎であるので、人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のないABCDEFGHIJKLMNO!£$%^&*@#PQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFは、世界における自由、正義及び平和の基礎GHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
 letters = letters.split('');

 // Setting up the columns
 var fontSize = 10,
    columns = canvas.width / fontSize;

 // Setting up the drops
 var drops = [];
 for (var i = 0; i < columns; i++) {
  drops[i] = 1;
 }

 // Setting up the draw function
 function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 60);


}

function reloaded(){
body.addEventListener('click', function(){
  console.log('reloaded');
  location.reload();
}
)}