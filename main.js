let myInput = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let myTasksDiv = document.querySelector(".tasks");


addBtn.addEventListener("click", function() {
    // Tasks + Delete Button
    let singleTask = document.createElement("div")
    let myTasks = document.createElement("p");
    let deleteBtn = document.createElement("button");
    // Values
    myTasks.innerText = myInput.value;
    // Styles
    myTasks.style.cssText = `
    font-size: 20px;
    line-height: 40px;
    padding: 10px;
    `
    deleteBtn.textContent = `Delete`
    deleteBtn.style.cssText = `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    background-color: rgb(255, 83, 51);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    width: 60px;
    height: 30px;
    padding: 2px;
    `
    singleTask.style.cssText = `
    min-height: 50px;
    width: 100%;
    position: relative;
    background-color: white;
    border-radius: 5px;
    overflow-wrap: break-word;
    `
    deleteBtn.addEventListener("click", function() {
        singleTask.remove()
    })
    singleTask.append(myTasks);
    singleTask.append(deleteBtn);
    myTasksDiv.append(singleTask);
    window.localStorage.setItem("myTasks", myInput.value);
    if (myInput.value === "") {
        singleTask.remove()
    }
    myInput.value = "";
})

let title = document.querySelector("h1")
title.innerText = "By Billel<Dev>"
title.style.cssText = `
    position: absolute;
    left: 50%;
    top: -5px;
    transform: translateX(-50%);
    color: #ABC;
    }`









