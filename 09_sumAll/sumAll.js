const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    

    let currentNumber = num1;
    let finalSum = 0;
    for (i = num1; i <= num2; i++) {
        finalSum += currentNumber;
        currentNumber += 1;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
