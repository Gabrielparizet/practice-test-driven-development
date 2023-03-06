// Create a string calculator

const add = (myStr) => {
    const numbersToAdd = myStr.split(",");
    if (myStr === ""){
        return 0;
    } else if (numbersToAdd.length === 1) {
        return parseInt(myStr);
    } else {
        let result = numbersToAdd.reduce((acc, curr) => 
            parseInt(acc) + parseInt(curr), 0
        );
        return result;
    }
}

console.log(add("1, 2"));

module.exports = {add};