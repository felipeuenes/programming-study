const evenOdd = require('./evenOdd');

const numEven = 10;
const numOdd = 11;


test("Check num Even", () => {
    expect(evenOdd.check(numEven)).toBe('even')
}); 
test("Check num Odd", () => {
    expect(evenOdd.check(numOdd)).toBe('odd')
});