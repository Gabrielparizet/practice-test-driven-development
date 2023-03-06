const {add} = require('./kata');

describe("Test add function" , () => {

    it("With an empty string, add() should return 0", () => {
        // Given
            const myStr = "";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(0);
    });
    
    it("With a string containing one number, add() should return that number as an integer", () => {
        // Given
            const myStr = "1";
        // When
            const result = add(myStr);
        // Then
            expect(result).toStrictEqual(1);
    });

    it("Given a string as argument, add() should always return an integer", () => {
        // Given
            const myStr = "";
        // When
            const result = add(myStr);
        // Then
            expect(typeof(myStr)).toEqual("string");
            expect(typeof(result)).toEqual("number");
    });

    it("Being given a string containing two numbers as argument, add() should return the sum of these numbers as an integer", () => {
        // Given
            const myStr = "1, 2";
        // When
            const result = add(myStr);
        // Then
            expect(result).toEqual(3);
    })


});