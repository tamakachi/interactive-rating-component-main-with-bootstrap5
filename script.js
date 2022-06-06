var mainForm = document.getElementById("mainform")
var secondForm = document.getElementById("secondform")
var numberSelected
var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var button5 = document.getElementById("btn5")

var submitButton = document.getElementById("submitbutton")

var paragraph = document.getElementById("selectionparagraph")

button1.addEventListener("click",function(){
    numberSelected = 1
    console.log(numberSelected)
})

button2.addEventListener("click",function(){
    numberSelected = 2
    console.log(numberSelected)
})

button3.addEventListener("click",function(){
    numberSelected = 3
    console.log(numberSelected)
})

button4.addEventListener("click",function(){
    numberSelected = 4
    console.log(numberSelected)
})

button5.addEventListener("click",function(){
    numberSelected = 5
    console.log(numberSelected)
})

submitButton.addEventListener("click",function(){
    if(numberSelected!== undefined){
    paragraph.innerHTML="You selected " +numberSelected + " out of 5"
    mainForm.style.display="none"
    secondForm.style.display="block"
    }
})