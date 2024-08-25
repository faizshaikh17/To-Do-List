let addButton = document.querySelector("button");
let input = document.querySelector("input");
let listConatiner = document.querySelector("#listContainer")


addButton.addEventListener("click",()=>{
    if(input.value == ""){
        alert("Enter the Task");
    }
    else{console.log("hello")
    let listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    listConatiner.appendChild(listItem);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
    }
    saveData();


    listConatiner.addEventListener("click", (e)=>{
        if(e.target.tagName == "LI"){
            e.target.classList.toggle("checked")
            saveData();
        }else if(e.target.tagName == "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    })

})

let saveData = () =>{
    localStorage.setItem("data",listConatiner.innerHTML)
}

let showData = () => {
    listConatiner.innerHTML = localStorage.getItem("data");
}

showData();