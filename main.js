let htmlContent = document.querySelector("body");

function calculateValue (erase, calculate, zero, one, two, three, four, five, six, seven, eight, nine, decimal, equals, plus, minus, times, divide) {

    let templateLiteral = `
            <p>THE QUACKULATOR</p>
            <div id="wrapper">
                
                <div class="calculator">
                    <div class = "row1">
                        <div class="clear" id = "clearButton">${erase}</div>
                        <div class="value" id = "valueButton">${calculate}</div>
                    </div>
                    <div class = "row2">
                        <div class="numbervalue" id = "buttonNum7">${seven}</div>
                        <div class="numbervalue" id = "buttonNum8">${eight}</div>
                        <div class="numbervalue" id = "buttonNum9">${nine}</div>
                        <div class="operator" id = "dividerButton">${divide}</div>
                    </div>
                    <div class = "row3">
                        <div class="numbervalue" id = "buttonNum4">${four}</div>
                        <div class="numbervalue" id = "buttonNum5">${five}</div>
                        <div class="numbervalue" id = "buttonNum6">${six}</div>
                        <div class="operator" id = "multiplierButton">${times}</div>
                    </div>
                    <div class= "row4">
                        <div class="numbervalue" id = "buttonNum1">${one}</div>
                        <div class="numbervalue" id = "buttonNum2">${two}</div>
                        <div class="numbervalue" id = "buttonNum3">${three}</div>
                        <div class="operator" id = "subtractionButton">${minus}</div>
                    </div>
                    <div class = "row5">
                        <div class="numbervalue" id = "buttonNum0">${zero}</div>
                        <div class="decimal" id = "decimalButton">${decimal}</div>
                        <div class="equals" id = "equalsButton">${equals}</div>
                        <div class="operator" id = "additionButton">${plus}</div>
                    </div>
                </div>
            </div>`;
    // console.log(templateLiteral);
    return templateLiteral;
}
htmlContent.innerHTML = calculateValue("C", "Quackulate", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "=", "+", "-", "x", "/");

// variables to be able to add my event listener

let buttonOne = document.getElementById("buttonNum1");
let buttonTwo = document.getElementById("buttonNum2");
let buttonThree = document.getElementById("buttonNum3");
let buttonFour = document.getElementById("buttonNum4");
let buttonFive = document.getElementById("buttonNum5");
let buttonSix = document.getElementById("buttonNum6");
let buttonSeven = document.getElementById("buttonNum7");
let buttonEight = document.getElementById("buttonNum8");
let buttonNine = document.getElementById("buttonNum9");


// adding event listeners and function

// buttonOne.addEventListener("click", oneFunction)


let string = ""

console.log(eval(string));
eval (string);

document.getElementsByClassName("row1", "row2", "row3", "row4", "row5");
