// Create a string calculator

const add = (myStr) => {
    const delimiter = findDelimiter(myStr);
    let numbersToAdd = myStr.split('\n').join(delimiter).split(delimiter);
    numbersToAdd = convertArrayOfStringToArrayOfIntegers(numbersToAdd);
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

// convertArrayOfStringToArrayOfIntegers(["1", "2", "3", "abc"]);
convertArrayOfStringToArrayOfIntegers(['//', '', '1', '2']);
add("//;\n1;2");


module.exports = {add, findDelimiter, convertArrayOfStringToArrayOfIntegers};