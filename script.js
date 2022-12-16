function calculate() { // calculate the equation displayed on the screen
    const calculation = eval(userInput);
    userInput = calculation;
    screenInput.innerHTML = calculation;
}

function lastOperator() { // returns the last operator of the string sequence displayed on the screen
    let lastOperator = userInput.substring(userInput.length-2,userInput.length-1);
    return lastOperator;
}

function clear() {
    userInput = '';
    screenInput.innerHTML = userInput;
}

let userInput = '';

const numberButtons = document.querySelectorAll("#number, .decimal");
const opButtons = document.querySelectorAll("#operators");
const screenInput = document.querySelector("#input");
const equalsButton = document.querySelector("#equals-sign");
const clearButton = document.querySelector(".clear");

// if (screenInput.innerHTML == '') {
//     screenInput.innerHTML = 'Enter calculations here';
//     screenInput.style.fontSize = '16px';
//     screenInput.style.opacity = '30%';
// } else {
//     screenInput.style.fontSize = '24px';
//     screenInput.style.opacity = '100%';
// }

for (const numberButton of numberButtons) { // adds number to the end of string when button is clicked
    numberButton.addEventListener("click", ()=>{
        const numberInput = (numberButton.innerHTML);
        userInput += numberInput;
        screenInput.innerHTML = userInput;
    });
}

for(const opButton of opButtons) { // adds operator to the end of string when button is clicked
    opButton.addEventListener("click", ()=>{
        const opInput = ` ${(opButton.innerHTML)} `;

        if(lastOperator() == opInput.trim()) {
            return;
        } else if (lastOperator() == "+" ||
                lastOperator() == "-" ||
                lastOperator() == "÷" ||
                lastOperator() == "%" ||
                lastOperator() == "*") {
            let replaceOperator = userInput.substring(0, userInput.length-3) + opInput;
            userInput = replaceOperator;
            screenInput.innerHTML = userInput;
            return;
        }

        userInput += opInput;
        screenInput.innerHTML = userInput;
    })
}

equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);