var rod = document.getElementsByClassName('rod');
console.log(rod);
var k
document.addEventListener('keypress',function(event){
    k = event.key;


    if(k=='a'){
        rod.style.left = 10;
    }


});