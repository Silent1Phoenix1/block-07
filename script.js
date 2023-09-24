const buttonBc =document.querySelector(".btn-bc")
const buttonTitle =document.querySelector("#btn-bc")
const buttonCir =document.querySelector("#btn-circles")
const body = document.querySelector("#body");
const mainTitle = document.querySelector("#main-title");

console.log({buttonBc,buttonCir,buttonTitle})

buttonBc.addEventListener('click',()=>{
    body.style.backgroundColor = "blue";

})

buttonTitle.addEventListener('click',()=>{
    mainTitle.textContent= "I am him!"
})

buttonCir.addEventListener('click',()=>{
const circle = document.createElement('div');
circle.style.width = "200px";
circle.style.height = "200px";
circle.style.borderRadius = "100%";
circle.style.border = "1px solid black";
body.append(circle);

})