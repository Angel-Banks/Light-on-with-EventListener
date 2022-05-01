


// // Target the containers

var bulbImage =document.getElementById ('pic');
var onBulb = document.getElementById ('onBulb');
var offBulb = document.getElementById ("offBulb");


// Action them

onBulb.addEventListener ("click", function (){
  bulbImage.src ='images/pic2.png';
});

offBulb.addEventListener ("click", function (){
  bulbImage.src ='images/pic1.png';
});
