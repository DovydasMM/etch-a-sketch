function boxCreate(amount){  // function to create box grid
let div="";
for (let i=0;i<(amount**2);i++){
div=document.createElement('div');
div.classList.add('boxes');
container.appendChild(div)
}
boxFit(amount);
hoverButton()
}
// code for box color change, when hovered
function hoverButton() {
const container = document.querySelector('#container');
container.addEventListener('mouseover', function (e) {
if (e.target.classList.contains('boxes')) {
 e.target.classList.add('hover')
}
});
};
//restart button
const btnRestart = document.querySelector('.reload');
btnRestart.addEventListener('click',()=> {
    location.reload()
});
//function to position boxes correctly
function boxFit(amount){
    const boxCount = document.getElementById('container');
boxCount.style.gridTemplateColumns=`repeat(${amount}, auto)`;
}
let boxCount = prompt("Įveskite norimą grid'o skaičių (32 bus 32x32, 64 bus 64x64 ir t.t)");
boxCreate(boxCount);

const input = document.querySelector('.input');
input.addEventListener('click', () => {
    let boxCount = prompt("Įveskite norimą grid'o skaičių (32 bus 32x32, 64 bus 64x64 ir t.t)");
    location.reload()
  });

