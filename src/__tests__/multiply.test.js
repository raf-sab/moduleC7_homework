const multiply = require('../multiply.js');

describe('test multiply', () => {
    it('multiply 1 * 0 to equal 0', () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    }),
    it('multiply 2 * 5 to equal 0', () => {
        const result = multiply(2, 5);
        expect(result).toBe(10);
    })
});