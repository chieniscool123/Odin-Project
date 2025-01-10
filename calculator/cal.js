let total = 0;
let current_value = 0;

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

function operate(num_1, num_2, operator) {
    switch (operator) {
        case '+':
            add(num_1, num2)
            break;

        case '-':
            subtract(num_1, num2)
            break;

        case '*':
            multiply(num_1, num2)
            break;

        case '/':
            divide(num_1, num2)
            break;

    }
}


