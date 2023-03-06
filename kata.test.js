const {add, findDelimiter, convertArrayOfStringToArrayOfIntegers, hasNegativeNumber} = require('./kata');

describe("Test add() function" , () => {

    it("With an empty string, add() should return 0.", () => {
        // Given
            const myStr = "";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(0);
    });
    
    it("With a string containing one number, add() should return that number as an integer?", () => {
        // Given
            const myStr = "1";
        // When
            const result = add(myStr);
        // Then
            expect(result).toStrictEqual(1);
    });

    it("Given a string as argument, add() should always return an integer.", () => {
        // Given
            const myStr = "";
        // When
            const result = add(myStr);
        // Then
            expect(typeof(myStr)).toEqual("string");
            expect(typeof(result)).toEqual("number");
    });

    it("Being given a string containing two numbers as argument, add() should return the sum of these numbers as an integer.", () => {
        // Given
            const myStr = "1,2";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(3);
    });

    it("Being given a string containing more than two numbers as argument, add() should return the sum of these numbers as an integer.", () => {
        // Given
            const myStr = "1,2,3,4";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(10);
    });

    it("Being given a string containing numbers separated by commas or \n, add() should return the sum of the numbers as an integer.", () => {
        // Given
            const myStr = "1\n2,3";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(6);
    });

    it("Being give a string with different delimiters as arguement before a \n separator, add() should return the sum of the numbers delimited by that delimiter as an integer", () => {
        // Given
            const myStr = "//;\n1;2";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(3);
    });

    it("Being given negative numbers in the string given as parameters, add() should return an error message containing those negative numbers." , () => {
        // Given
            const myStr = "//;\n1;2;-3";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual("Error, negative numbers are not authorized: -3.")
    });

});

describe ("Test findDelimiter() function", () => {

    it("If the string given to findDelimiter as argument contains a first line with a delimiter, findDelimiter should return that delimiter as a string." , () => {
        // Given
            const myStr = "//;\n1;2";
        // When
            const result = findDelimiter(myStr);
        // Then
            expect(result).toEqual(";");
    });

    it("If the string given to findDelimiter as argument does not contain a first line with a delimiter, findDelimiter should a comma as a string." , () => {
        // Given
            const myStr = "1\n2,3";
            const myStr2 = "1,2,3";
        // When
            const result = findDelimiter(myStr);
            const result2 = findDelimiter(myStr2);
        // Then
            expect(result).toEqual(",");
            expect(result2).toEqual(",");
    });

});

describe("Test convertArrayOfStringToArrayOfIntegers() function", () => {

    it("Being given an array containing different types of data as strings, convertArrayOfStringToArrayOfInters() should return an array only containing integers.", () => {
        // Given
            const myArr = ["//", "abc", "1", "//", "3", "4"];
            const myArr2 = ["1"];
            const myArr3 = ["abc"];
        // When
            const result = convertArrayOfStringToArrayOfIntegers(myArr);
            const result2 = convertArrayOfStringToArrayOfIntegers(myArr2);
            const result3 = convertArrayOfStringToArrayOfIntegers(myArr3);
        // Then
            expect(result).toEqual([1, 3, 4]);
            expect(result2).toEqual([1]);
            expect(result3).toEqual([]);
    });

});

describe("Test hasNegativeNumbers() function", () => {

    it("Being given an array of integers, if some of these integers are negative numbers, hasNegativeNumbers() should return these negative numbers as an array of negative numbers as strings", () => {
        // Given
            const myArr = [-2, 3, 6, -5];
            const myArr2 = [3, 5, 7, 8];
            const myArr3 = [-3];
        // When
            const result = hasNegativeNumber(myArr);
            const result2 = hasNegativeNumber(myArr2);
            const result3 = hasNegativeNumber(myArr3);
        // Then
            expect(result).toEqual(["-2", "-5"]);
            expect(result2).toEqual([]);
            expect(result3).toEqual(["-3"]);
    });

});

