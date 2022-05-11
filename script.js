function boxCreate(amount){
let div="";

for (let i=0;i<(amount**2);i++){
div=document.createElement('div');
div.classList.add('boxes');
container.appendChild(div)
}

}


const container = document.querySelector('#container');
container.addEventListener('mouseover', function (e) {
if (e.target.classList.contains('boxes')) {
    console.log("yra");
    e.target.classList.add('boxes-hover')
}
});




boxCreate(16);

