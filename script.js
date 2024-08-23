let listItem = document.createElement("li");
let addButton = document.querySelector("button");
let input = document.querySelector("input");

addButton.addEventListener("click",()=>{
    console.log("hello")
    listItem.textContent = input.textContent
})