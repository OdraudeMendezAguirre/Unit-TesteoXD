import { greed } from './greed';

describe('greed',()=>{
    it('Deberia incluir el nombre en el mensaje',()=>{
        expect(greed('Odry')).toContain('Odry');
    })
})