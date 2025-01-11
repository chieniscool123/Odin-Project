let total = 0;
let current_value = 0;

let str = ""

const screen = document.getElementById("screen");


document.getElementById("=").addEventListener("click", () => {
    let display = (operate(str));
    screen.textContent = display;
    str = "";
    str += display;

});


document.getElementById("+").addEventListener("click", () => {
    screen.textContent += "+"
    str += "+"

});


document.getElementById("/").addEventListener("click", () => {
    screen.textContent += "/"
    str += "/"

});


document.getElementById("-").addEventListener("click", () => {
    screen.textContent += "-"
    str += "-"

});


document.getElementById("*").addEventListener("click", () => {
    screen.textContent += "*"
    str += "*"

});

document.getElementById("1").addEventListener("click", () => {
    screen.textContent += "1"
    str += "1"
});

document.getElementById("2").addEventListener("click", () => {
    screen.textContent += "2"
    str += "2"
});

document.getElementById("3").addEventListener("click", () => {
    screen.textContent += "3"
    str += "3"
});

document.getElementById("4").addEventListener("click", () => {
    screen.textContent += "4"
    str += "4"
});

document.getElementById("5").addEventListener("click", () => {
    screen.textContent += "5"
    str += "5"
});


document.getElementById("6").addEventListener("click", () => {
    screen.textContent += "6"
    str += "6"
});


document.getElementById("7").addEventListener("click", () => {
    screen.textContent += "7"
    str += "7"
});

document.getElementById("8").addEventListener("click", () => {
    screen.textContent += "8"
    str += "8"
});


document.getElementById("9").addEventListener("click", () => {
    screen.textContent += "9"
    str += "9"
});


document.getElementById("clear").addEventListener("click", () => {
    screen.textContent = ""
    str = ""
});

document.getElementById("delete").addEventListener("click", () => {
    screen.textContent = screen.textContent
        .toString()
        .slice(0, -1);

    str = screen.textContent;
});



function operate(str) {

    // \d is for one or more digit from 0-9
    // regex = regular expression
    // match[0] will be equal to the orignal string so we must start at match 1
    const regex = /(\d+)([+\-*/])(\d+)/;
    const match = str.match(regex);

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    switch (operator) {
        case '+':
            return num1 + num2
            break;
        case '-':
            return num1 - num2
            break;
        case '*':
            return num1 * num2
            break;
        case '/':
            return num1 / num2
            break;
    }

}



