let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operationCode) {
    let number1 = +input1.value;
    let number2 = +input2.value;
    
    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "-") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    } else {
        alert("operation is unknown");
    }

    alert(result);
}

function onOperationButtonClick(eventObject) {
    debugger;
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener("click", onOperationButtonClick);
buttonMinus.addEventListener("click", onOperationButtonClick);
buttonMultiply.addEventListener("click", onOperationButtonClick);
buttonDevide.addEventListener("click", onOperationButtonClick);