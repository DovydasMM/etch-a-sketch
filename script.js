function boxCreate(amount){  // function to create box grid
let div="";
for (let i=0;i<(amount**2);i++){
div=document.createElement('div');
div.classList.add('boxes');
container.appendChild(div)
}
//hoverButton()
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


boxCreate(10);

