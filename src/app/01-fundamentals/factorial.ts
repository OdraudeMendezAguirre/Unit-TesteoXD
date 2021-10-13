
export function factorial(number: number){
    if(number==0)
        return 1;
    else if(number >= 10){
        return -1;
    }

    var acumulador=1;
    while(number>=1){
        acumulador=acumulador*number;
        number=number-1;
    }
    return acumulador;
}
