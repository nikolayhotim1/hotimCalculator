let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function getNumber1() {
    return +input1.value;
}

function getNumber2() {
    return +input2.value;
}

function makeOperation(operationCode) {
    if (operationCode === "+") {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === "-") {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === "*") {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === "/") {
        var result = getNumber1() / getNumber2();
    } else {
        alert("operation is unknown");
    }

    alert(result);
}

function onButtonPlusClick() {
    makeOperation("+");
}

function onButtonMinusClick() {
    makeOperation("-");
}

function onButtonMultiplyClick() {
    makeOperation("*");
}

function onButtonDevideClick() {
    makeOperation("/");
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);