import { formulaOnda } from './formula.component';

describe ('FormulaOnda',() => {
    let component: formulaOnda;

    beforeEach(()=>{
        component= new formulaOnda();
    });
    
    it('si mando 10 m/s y 2 Hz, deberia dar de resultado 5',() =>{  
        component.calcularLongitud(10,2);
        expect(component.longitudOnda).toBe(5);
    });
    it('si mando 0 m/s y 20 Hz, deberia dar de resultado 0',() =>{  
        component.calcularLongitud(0,20);
        expect(component.longitudOnda).toBe(0);
    });
    it('si mando 10 m/s y 0 Hz, deberia dar de resultado -1',() =>{  
        component.calcularLongitud(10,0);
        expect(component.longitudOnda).toBe(-1);
    });
    it('si mando 10 m/s y  4, deberia dar de resultado 2.5',() =>{  
        component.calcularLongitud(10,4);
        expect(component.longitudOnda).toBe(2.5);
    });
    it('si mando 2 m/s y 10 Hz, deberia dar de resultado 0.2',() =>{  
        component.calcularLongitud(2,10);
        expect(component.longitudOnda).toBe(0.2);
    });

});