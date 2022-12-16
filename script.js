function calculate() { // calculate the equation displayed on the screen
    const calculation = eval(userInput);
    userInput = calculation;
    screenInput.innerHTML = calculation;
}

function lastOperator() { // finds the last operator of the string sequence displayed on the screen
    let lastOperator = userInput.substring(userInput.length-2,userInput.length-1);
    return lastOperator;
}

let userInput = '';

const numberButtons = document.querySelectorAll("#number");
const opButtons = document.querySelectorAll("#operators");
const screenInput = document.querySelector("#input");
const equalsButton = document.querySelector("#equals-sign");


for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", ()=>{
        const numberInput = (numberButton.innerHTML);
        userInput += numberInput;
        screenInput.innerHTML = userInput;
    });
}

for(const opButton of opButtons) {
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