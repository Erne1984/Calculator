const btnAc = document.querySelector("#btn-AC");
const btnDelete = document.querySelector("#btn-delete");
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
const btnNegative = document.querySelector("#btn-negative");

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
    if (b === 0) {
        alert("NÃO É POSSÍVEL DIVDIR POR ZERO!");
        return 0;
    }
    return a / b;
}

function calcule() {

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

        if (operator.textContent) {
            calcule()
        }

        operator.textContent += operatorClicked;
    })
})


btnAc.addEventListener("click", clearAll)
btnEqual.addEventListener("click", calcule)
btnDelete.addEventListener("click", erase)
btnDot.addEventListener("click", () => {
    if (!value1Display.textContent) {
        return "";
    }
    if (value1Display.textContent && value2Display.textContent) {
        value2Display.textContent += ".";
    } else if (value1Display.textContent && operator.textContent) {
        return "";
    } else {
        value1Display.textContent += ".";
    }
})
btnNegative.addEventListener("click", () => {
    if (!operator.textContent) {
        if (value1Display.textContent == "") { return "" };
        let currentValue = value1Display.textContent == "0" ? "" : value1Display.textContent;
        value1Display.textContent = "-" + currentValue;
    } else {
        if (value2Display.textContent == "") { return "" };
        let currentValue = value2Display.textContent == "0" ? "" : value2Display.textContent;
        value2Display.textContent = "-" + currentValue;
    }
})