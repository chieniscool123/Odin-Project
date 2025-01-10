let total = 0;
let current_value = 0;

let str = ""

const screen = document.getElementById("screen");


document.getElementById("=").addEventListener("click", () => {
    screen.textContent = operate(str);
});


document.getElementById("7").addEventListener("click", () => {
    screen.textContent = "7"
    str += "7"

});


document.getElementById("+").addEventListener("click", () => {
    screen.textContent = "+"
    str += "+"

});

document.getElementById("8").addEventListener("click", () => {
    screen.textContent = "8"
    str += "8"
});






function add(total, current_value) {
    return total + current_value;
    current_value = 0;
    return total;
}
function subtract(total, current_value) {
    return total - current_value;
    current_value = 0;
    return total;
}

function multiply(total, current_value) {
    return total * current_value;
    current_value = 0;
    return total;
}

function divide(total, current_value) {
    return total / current_value;
    current_value = 0;
    return total;

}

function operate(str) {
    let number = str.split(/[+\-/*]+/);

    const operator = str.split(/[0-9]+/);


    switch (operator) {
        case '+':
            return number[0] + number[1]
            break;
        case '-':
            return number[0] - number[1];
            break;
        case '*':
            return number[0] * number[1];
            break;
        case '/':
            return number[0] / number[1];
            break;
    }

}



