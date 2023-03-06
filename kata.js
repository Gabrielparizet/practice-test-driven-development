// Create a string calculator

const add = (myStr) => {
    const delimiter = findDelimiter(myStr);
    let numbersToAdd = myStr.split('\n').join(delimiter).split(delimiter);
    numbersToAdd = convertArrayOfStringToArrayOfIntegers(numbersToAdd);
    let hasNegatives = hasNegativeNumber(numbersToAdd);
    if (hasNegatives.length > 0){
        let result = "";
        for (i in hasNegatives){
            result += " " + hasNegatives[i];
        }
        return "Error, negative numbers are not authorized:" + result + ".";
    }
    if (myStr === ""){
        return 0;
    } else if (numbersToAdd.length === 1) {
        return parseInt(myStr);
    } else {
        let result = numbersToAdd.reduce((acc, curr) => 
            acc + curr, 0
        );
        return result;
    };
};

const findDelimiter = (myStr) => {
    if (myStr[0] === "/" && myStr[1] === "/"){
        return myStr[2];
    } else {
        return ",";
    };
};

const convertArrayOfStringToArrayOfIntegers = (myArr) => {
    let result = [];
    for (i in myArr){
        if (!isNaN(myArr[i]) && myArr[i] != ""){
            result.push(parseInt(myArr[i]));
        }
    }
    return result;
};

const hasNegativeNumber = (myArr) => {
    let result = [];
    for (i in myArr){
        if (myArr[i] < 0){
            result.push(myArr[i].toString());
        };
    };
    return result
};

// add('//;\n1;2');
console.log(add('//;\n1;-2'));

module.exports = {add, findDelimiter, convertArrayOfStringToArrayOfIntegers, hasNegativeNumber};
