const myModule = require('./app.js');

describe('add()', () => {
    test('adds two values together', () => {
        const result = myModule.add(1, 2);
        expect(result).toBe(3);
    })
})

describe('multiply()', () => {
    test('multiplies two values together', () => {
        const result = myModule.multiply(5, 5);
        expect(result).toBe(25);
    })
})