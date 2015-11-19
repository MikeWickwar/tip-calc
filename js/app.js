//test
  alert("javascript is rockin");

var btn = document.getElementById('submit');

btn.addEventListener('click', function(){
// console.log('test1')
var tA = document.getElementById('tA')
var money = tA.value;


console.log(money)
var tip = (money * .2);
// console.log('test2')
var output = document.getElementById('output')
// console.console.log('test3');
output.innerHTML = "You should tip:" +tip.toFixed(2);
// console.log('test4');

})
