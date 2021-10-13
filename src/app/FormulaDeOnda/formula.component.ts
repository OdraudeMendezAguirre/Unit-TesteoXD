export class formulaOnda {
    longitudOnda=0;
    calcularLongitud(velocidadOnda:number, frecuencia:number){
        if (velocidadOnda==0){
            this.longitudOnda=0
        } else if(frecuencia==0){
            this.longitudOnda=-1;
        }else{
            this.longitudOnda=velocidadOnda/frecuencia;
        }
    }
    
}