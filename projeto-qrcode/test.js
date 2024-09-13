function calcularDano(ataque, defesa){

    let dano = ataque - defesa;
    
    if(dano < 0){
        dano = 0;
    }
    
    return dano;


}

const ataque = parseFloat(gets());

const defesa = parseFloat(gets());

const danoCausado = calcularDano(ataque, defesa);
print("o dano causado foi de:" + danoCausado)