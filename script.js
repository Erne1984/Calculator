const btnAc = document.querySelector("#btn-AC");
const btnDelete = document.querySelector("#btn-delete");
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");

const value1Display = document.querySelector("#value1");
const value2Display = document.querySelector("#value2");
const operator = document.querySelector("#operator");

const btnNumbers = document.getElementsByClassName("btn-number");
const btnOperators = document.getElementsByClassName("operator");

function add(a, b) {
    clearAll()
    return a + b;
}

function subtract(a, b) {
    clearAll()
    return a - b;
}

function multiply(a, b) {
    clearAll()
    return a * b;
}

function divide(a, b) {
    clearAll()
    return a / b;
}

function percentage() {
    
}

function clearAll() {
    value1Display.textContent = "";
    value2Display.textContent = "";
    operator.textContent = "";
}

function erase() {
    if (value2Display.textContent != "") {
        let newValue = value2Display.textContent.split("");
        newValue.pop();
        value2Display.textContent = newValue.join("");
    } else if (operator.textContent != "") {
        operator.textContent = "";
    } else if (value1Display.textContent != "") {
        let newValue1 = value1Display.textContent.split("");
        newValue1.pop();
        value1Display.textContent = newValue1.join("");
    }
}

const operatorFunctions = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "÷": divide
}

Array.from(btnNumbers).map((btnNumber) => {
    btnNumber.addEventListener("click", () => {
        const btnClicked = parseFloat(btnNumber.textContent);

        if (operator.textContent == "") {
            value1Display.textContent += btnClicked;
        } else {
            value2Display.textContent += btnClicked;
        }
    })
})

Array.from(btnOperators).map((btnOperator) => {

    btnOperator.addEventListener("click", () => {

        const operatorClicked = btnOperator.textContent;

        if (value1Display.textContent == "") {
            return alert("insira um valor primeiro");
        }

        operator.textContent += operatorClicked;
    })
})

btnAc.addEventListener("click", clearAll)
btnEqual.addEventListener("click", () => {
    if (value1Display.textContent == "" || value2Display.textContent == "" || operator.textContent == "") {
        return alert("nada para ser calculado");
    }

    const operationFunction = operatorFunctions[operator.textContent];

    if (operationFunction) {
        value1Display.textContent = operationFunction(
            parseFloat(value1Display.textContent),
            parseFloat(value2Display.textContent)
        );
    } else {
        return alert("Operador inválido");
    }
})
btnDelete.addEventListener("click", erase)