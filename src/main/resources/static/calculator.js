/* JavaScript file for the webpage*/


let elementCount = 1;

/*  
    First row 
*/
let percentage1 = document.getElementById("percent1");
let numeratorNum1 = "";
let denominatorNum1 = "";

let gradeNumerator1 = document.getElementById("gradeNumerator1");
gradeNumerator1.addEventListener("input", () => {
    try {
        numeratorNum1 = gradeNumerator1.value;
        // If the variables are not numbers or the denominator is 0
        if (isNaN(numeratorNum1) || isNaN(denominatorNum1) || denominatorNum1 == 0 || numeratorNum1 == "") {
            percentage1.innerText = "";
        }
        // Else display it
        else {
            percentage1.innerText = `${(numeratorNum1/denominatorNum1).toFixed(2) * 100}%`; // Rounding it to 2 decimals
        }
    }
    // Catching any errors
    catch (error) {
        console.log(error);
        percentage1.innerText = "";
    }
});

let gradeDenominator1 = document.getElementById("gradeDenominator1");
gradeDenominator1.addEventListener("input", () => {
    try{
        denominatorNum1 = gradeDenominator1.value;
        // If the variables are not numbers or the denominator is 0
        if (isNaN(numeratorNum1) || isNaN(denominatorNum1) || denominatorNum1 == 0 || numeratorNum1 == "") {
            percentage1.innerText = "";
        }
        // Else display it
        else {
            percentage1.innerText = `${(numeratorNum1/denominatorNum1).toFixed(2) * 100}%`; // Rounding it to 2 decimals
        }
    }
    // Catching any errors
    catch (error) {
        console.log(error);
        percentage1.innerText = "";
    }
});


/* 
    Adding subsequent rows 
*/
let tableContainer = document.getElementById("innerTable");

let addRowBtn = document.getElementById("addRowButton");
addRowBtn.addEventListener("click", (event) => {
    event.preventDefault();

    elementCount++;
    let newRow = document.createElement("tr");

    // Name column
    let colN= document.createElement("td");
    colN.classList.add("tableData");
    colN.innerText = ` Activity ${elementCount} `;
    newRow.appendChild(colN);

    // Short name column
    let colSN = document.createElement("td");
    colSN.classList.add("tableData");
    colSN.innerText = ` A${elementCount} `;
    newRow.appendChild(colSN);

    // Weight column
    let colW = document.createElement("td");
    colW.classList.add("tableData");
    let wInput = document.createElement("input");
    wInput.id = `weight${elementCount}`;
    wInput.type = "text";
    wInput.classList.add("inputBox");
    colW.appendChild(wInput);
    newRow.appendChild(colW);

    // Grade column
    let colG = document.createElement("td"); // Numerator
    colG.classList.add("tableData");
    let gNInput = document.createElement("input");
    gNInput.id = `gradeNumerator${elementCount}`;
    gNInput.type = "text";
    gNInput.classList.add("inputBox");
    colG.appendChild(gNInput);
    let gDivision = document.createElement("span"); // Division symbol
    gDivision.classList.add("division");
    gDivision.innerText = " / "
    colG.appendChild(gDivision);
    let gDInput = document.createElement("input"); // Denominator
    gDInput.id = `gradeDenominator${elementCount}`;
    gDInput.type = "text";
    gDInput.classList.add("inputBox");
    colG.appendChild(gDInput);

    newRow.appendChild(colG);    

    // Percent column
    let colP = document.createElement("td");
    colP.id = `percent${elementCount}`;
    colP.classList.add("tableData");
    newRow.appendChild(colP); // Appending percent column to the row

    // Appending the row to the table
    tableContainer.appendChild(newRow);

    // Event listeners for the percentage column
    let percentage = document.getElementById(`percent${elementCount}`);
    let numeratorNum = "";
    let denominatorNum = "";
    let gradeNumerator = document.getElementById(`gradeNumerator${elementCount}`);
    gradeNumerator.addEventListener("input", () => {
        try {
            numeratorNum = gradeNumerator.value;
            // If the variables are not numbers or the denominator is 0
            if (isNaN(numeratorNum) || isNaN(denominatorNum) || denominatorNum == 0 || numeratorNum == "") {
                percentage.innerText = "";
            }
            // Else display it
            else {
                percentage.innerText = `${(numeratorNum/denominatorNum).toFixed(2) * 100}%`; // Rounding it to 2 decimals
            }
        }
        // Catching any errors
        catch (error) {
            console.log(error);
            percentage.innerText = "";
        }
    });
    let gradeDenominator = document.getElementById(`gradeDenominator${elementCount}`);
    gradeDenominator.addEventListener("input", () => {
        try{
            denominatorNum = gradeDenominator.value;
            // If the variables are not numbers or the denominator is 0
            if (isNaN(numeratorNum) || isNaN(denominatorNum) || denominatorNum == 0 || numeratorNum == "") {
                percentage.innerText = "";
            }
            // Else display it
            else {
                percentage.innerText = `${(numeratorNum/denominatorNum).toFixed(2) * 100}%`; // Rounding it to 2 decimals
            }
        }
        // Catching any errors
        catch (error) {
            console.log(error);
            percentage.innerText = "";
        }
    });
})


/* 
    Weighted calculation
*/
let weightButton = document.getElementById("weightedBtn");
weightButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Looping to add the percentages
    let weightSum = 0;
    let weightCount = 0;
    for (let i = 1; i <= elementCount; i++) {
        try {
            let tempW = document.getElementById(`weight${i}`);
            let tempP = document.getElementById(`percent${i}`);
            // If the current row's percentage and weight are numbers, increment the variables
            if (!isNaN(parseFloat(tempW.value)) && !isNaN(parseFloat(tempP.innerText)) && tempW.value != "" && tempP.innerText != "") {
                weightSum += parseFloat(tempW.value) * parseFloat(tempP.innerText);
                weightCount += parseFloat(tempW.value);
            }
        }
        catch (error) {

        }
    }

    // Displaying the result
    let result = document.getElementById("calcResult");
    if (weightCount > 0) {
        result.innerText = `${(weightSum/weightCount).toFixed(2)}%`;
    }
    else {
        result.innerText = "";
    }
});


/* 
    Mean calculation
*/
let meanButton = document.getElementById("meanBtn");
meanButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Looping to add the percentages
    let meanSum = 0;
    let meanCount = 0;
    for (let i = 1; i <= elementCount; i++) {
        try {
            let tempP = document.getElementById(`percent${i}`);
            // If the current row's percentage and weight are numbers, increment the variables
            if (!isNaN(parseFloat(tempP.innerText)) && tempP.innerText != "") {
                meanSum += parseFloat(tempP.innerText);
                meanCount += 1;
            }
        }
        catch (error) {

        }
    }

    // Displaying the result
    let result = document.getElementById("calcResult");
    if (meanCount > 0) {
        result.innerText = `${(meanSum/meanCount).toFixed(2)}%`;
    }
    else {
        result.innerText = "";
    }
});
