function calculate() { // calculate the equation displayed on the screen
    if (lastOperator() == "+" ||
                lastOperator() == "-" ||
                lastOperator() == "÷" ||
                lastOperator() == "%" ||
                lastOperator() == "*") {
        userInput = userInput.substring(0, userInput.length-3); 
    }
    const calculation = eval(userInput);
    userInput = calculation;
    screenInput.innerHTML = calculation;
}

function lastOperator() { // returns the last operator of the string sequence displayed on the screen
    let lastOperator = userInput.substring(userInput.length-2,userInput.length-1);
    return lastOperator;
}

function clear() { // clears all the numbers from screen and start from nothing
    userInput = '';
    screenInput.innerHTML = userInput;
}

function lastSection(input) { // splits the last number section of the screen where the user is inputting numbers
    let inputSplit = input.split('');
    let lastSpaceIndex = inputSplit.findLastIndex((space) => space == ' ');
    let lastSection = inputSplit.slice(lastSpaceIndex+1);
    return lastSection;
}

function duplicateDecimal(input) { // removes last decimal of the string sequence, removes it, and adds the decimal to the end of the string
    let inputSplit = input.split('');
    let lastSpaceIndex = inputSplit.findLastIndex((space) => space == ' ');
    let lastSection = inputSplit.slice(lastSpaceIndex+1);
    let endHalf = lastSection.slice(lastSection.indexOf('.')+1);
    let startHalf = inputSplit.slice(0, inputSplit.lastIndexOf('.'));
    let updatedSplit = startHalf.concat(endHalf, '.');
    return updatedSplit.join('');
}

let userInput = '';

const numberButtons = document.querySelectorAll("#number");
const opButtons = document.querySelectorAll("#operators");
const screenInput = document.querySelector("#input");
const equalsButton = document.querySelector("#equals-sign");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener("click", ()=> {
    const decimalInput = decimalButton.innerHTML;
    if(lastSection(userInput).includes('.')){
        userInput = duplicateDecimal(userInput);
    } else {
        userInput+=decimalInput;
    }
    screenInput.innerHTML=userInput;
})

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