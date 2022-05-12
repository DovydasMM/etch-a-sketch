let boxCount = prompt("Įveskite norimą grid'o skaičių (32 bus 32x32, 64 bus 64x64 ir t.t)");


// function to create box grid
function boxCreate(amount){
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


//function to position boxes correctly
function boxFit(amount){
    const boxCount = document.getElementById('container');
boxCount.style.gridTemplateColumns=`repeat(${amount}, auto)`;
}

// creating new grid
const input = document.querySelector('.input');
input.addEventListener('click', () => {
    removeBoxes(boxCount);
    boxCount = prompt("Įveskite norimą grid'o skaičių (32 bus 32x32, 64 bus 64x64 ir t.t)");
    boxCreate(boxCount);
    boxFit(boxCount);
  });

//restart button
const hoverBox = document.querySelector('hover')
const btnRestart = document.querySelector('.reload');
btnRestart.addEventListener('click',()=> {
    removeBoxes(boxCount);
    boxCreate(boxCount);
    boxFit(boxCount);
});

//box deletion
function removeBoxes(amount){
    for (let i=0;i<(amount**2);i++){
        const div = document.querySelector('.boxes')
        container.removeChild(div);    
}
}
boxCreate(boxCount);