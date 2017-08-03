let htmlContent = document.querySelector("body");

function calculateValue (erase, calculate, zero, one, two, three, four, five, six, seven, eight, nine, decimal, equals, plus, minus, times, divide) {

    let templateLiteral = `
            <p>THE QUACKULATOR</p>
            <div id="wrapper">
                
                <div class="calculator">
                    <div class = "row1">
                        <div class="clear">${erase}</div>
                        <div class="value">${calculate}</div>
                    </div>
                    <div class = "row2">
                        <div class="numbervalue">${seven}</div>
                        <div class="numbervalue">${eight}</div>
                        <div class="numbervalue">${nine}</div>
                        <div class="operator">${divide}</div>
                    </div>
                    <div class = "row3">
                        <div class="numbervalue">${four}</div>
                        <div class="numbervalue">${five}</div>
                        <div class="numbervalue">${six}</div>
                        <div class="operator">${times}</div>
                    </div>
                    <div class= "row4">
                        <div class="numbervalue">${one}</div>
                        <div class="numbervalue">${two}</div>
                        <div class="numbervalue">${three}</div>
                        <div class="operator">${minus}</div>
                    </div>
                    <div class = "row5">
                        <div class="numbervalue">${zero}</div>
                        <div class="decimal">${decimal}</div>
                        <div class="equals">${equals}</div>
                        <div class="operator">${plus}</div>
                    </div>
                </div>
            </div>`;
    console.log(templateLiteral);
    return templateLiteral;
}
htmlContent.innerHTML = calculateValue("C", "Quackulate", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "=", "+", "-", "x", "/");

