import { getCurrencies } from './getCurrencies';

describe ('getCurrencies',() => {
    it('Debe regresar soporte de concurrencias',() =>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});