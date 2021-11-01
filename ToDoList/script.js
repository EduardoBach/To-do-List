// Dark Mode

var btn = document.getElementById("dark")

btn.addEventListener("click",DarkMode)

function DarkMode(){
    var body = document.body;

    body.classList.toggle("DarkMode")

    if(btn.innerHTML === "Dark Mode"){
        btn.innerHTML = "Light Mode"
    } else{
        btn.innerHTML = "Dark Mode"
    }
}


// Variaveis Globais

var enterButton = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")

// script

function inputLenght(){
    return input.value.length;
}

function createElement(){

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""

    function crossOut(){
        li.classList.toggle("verified")
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button")
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem)

    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click",addClick);
input.addEventListener("keypress",addKeypress);

function addClick(){
    if(inputLenght()>0){
        createElement()
    }else{
        alert("Escreve uma terefa")
    }
}

function addKeypress(){
    if(inputLenght()>0 && event.which === 13){
        createElement();
    }
}
