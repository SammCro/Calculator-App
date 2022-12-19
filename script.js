let inputArea = document.querySelector(".calculator-input");

let inputAreaValue = "";



document.querySelectorAll(".number").forEach(number => number.addEventListener("click",function() {

        inputAreaValue+=this.value;
        inputArea.value = inputAreaValue;
    


}))

document.querySelector(".decimal").addEventListener("click",function () {
    if(!inputAreaValue.includes(".")){
        inputAreaValue+=this.value;
        inputArea.value = inputAreaValue;
    }
})

document.querySelector(".clear").addEventListener("click",function () {
    inputAreaValue = "";
    inputArea.value = 0 ;
})
