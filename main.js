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
htmlContent.innerHTML = calculateValue("C", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "=", "+", "-", "x", "/");

// variables to be able to add my event listener

let eraseButton = document.getElementById("clearButton");
//this is what the clicks are being pushed to
let totalButton = document.getElementById("valueButton");
//this ends where the clicks are being pushed
let divisionButton = document.getElementById("dividerButton");
let multiplicationButton = document.getElementById("multiplierButton");
let minusButton = document.getElementById("subtractionButton");
let decButton = document.getElementById("decimalButton");
let equalButton = document.getElementById("equalsButton");
let adderButton = document.getElementById("additionButton");
let buttonZero = document.getElementById("buttonNum0");
let buttonOne = document.getElementById("buttonNum1");
let buttonTwo = document.getElementById("buttonNum2");
let buttonThree = document.getElementById("buttonNum3");
let buttonFour = document.getElementById("buttonNum4");
let buttonFive = document.getElementById("buttonNum5");
let buttonSix = document.getElementById("buttonNum6");
let buttonSeven = document.getElementById("buttonNum7");
let buttonEight = document.getElementById("buttonNum8");
let buttonNine = document.getElementById("buttonNum9");

// adding event listeners and function - push to total button


buttonZero.addEventListener("click", zeroFunction);
function zeroFunction(){
    totalButton.textContent += "0";
}
buttonOne.addEventListener("click", oneFunction);
function oneFunction (){
    totalButton.textContent += "1";
}
buttonTwo.addEventListener("click", twoFunction);
function twoFunction (){
    totalButton.textContent += "2";
}
buttonThree.addEventListener("click", threeFunction);
function threeFunction (){
    totalButton.textContent += "3";
}
buttonFour.addEventListener("click", fourFunction);
function fourFunction (){
    totalButton.textContent += "4";
}
buttonFive.addEventListener("click", fiveFunction);
function fiveFunction (){
    totalButton.textContent += "5";
}
buttonSix.addEventListener("click", sixFunction);
function sixFunction (){
    totalButton.textContent += "6";
}
buttonSeven.addEventListener("click", sevenFunction);
function sevenFunction (){
    totalButton.textContent += "7";
}
buttonEight.addEventListener("click", eightFunction);
function eightFunction (){
    totalButton.textContent += "8";
}
buttonNine.addEventListener("click", nineFunction);
function nineFunction (){
    totalButton.textContent += "9";
}
decButton.addEventListener("click", decFunction);
function decFunction (){
    totalButton.textContent += ".";
}
eraseButton.addEventListener("click", clearFunction);
function clearFunction(){
    totalButton.textContent = "";
}
divisionButton.addEventListener("click", divisionFunction);
function divisionFunction(){
    totalButton.textContent += " / ";
}
multiplicationButton.addEventListener("click", mulFunction);
function mulFunction(){
    totalButton.textContent += " * ";
}
minusButton.addEventListener("click", subFunction);
function subFunction(){
    totalButton.textContent += " - ";
}
adderButton.addEventListener("click", addFunction);
function addFunction(){
    totalButton.textContent += " + ";
}

// event listeners and functions ends here

// this is my eval function, may take some work

equalButton.addEventListener("click", calculationFunction);
    function calculationFunction(){
        // totalButton.textContent += "sup bro monkey";
        eval(totalButton.innerHTML);
        // endValue = eval(totalButton.innerHTML); it turns out that this wasn't needed , just added an extra step that made the algorithm redundant
        totalButton.textContent = eval(totalButton.innerHTML);
    }


// let equalButton = document.getElementById("equalsButton");

// let string = ""

// console.log(eval(string));

// let equalButton = document.getElementById("equalsButton");

// eval (string);

// document.getElementsByClassName("row1", "row2", "row3", "row4", "row5");
