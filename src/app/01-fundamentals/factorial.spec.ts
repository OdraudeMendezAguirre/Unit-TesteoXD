import { factorial } from './factorial';

describe('factorial',()=>{
    it('Deberia regresar 1 si el numero es 0',()=>{
        const result = factorial(0);
        expect(result).toBe(1);
    })
    it('Deberia regresar 2 si el numero es 2',()=>{
        const result = factorial(2);
        expect(result).toBe(2);
    })
    it('Deberia regresar 24 si el numero es 4',()=>{
        const result = factorial(4);
        expect(result).toBe(24);
    })
    it('Deberia regresar -1 si el numero es >=10',()=>{
        const result = factorial(10);
        expect(result).toBe(-1);
    })
})