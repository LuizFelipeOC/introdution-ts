function sum(num: number,) {
    return num + 1;
}


interface ISumAge {
    name: string,
    yearnBorn: number,
    profissional?: string,
}

function sumAge({ name, yearnBorn, profissional
}: ISumAge): string {
    const age: number = 2022 - yearnBorn;

    if(profissional == ""){
        return `Olá ${name} você tem ${age} anos.`;

    }

    return `Olá ${name} você tem ${age} anos e sua profissão é ${profissional}.`;


}


console.log(sumAge({ name: "Luiz", yearnBorn: 2002, profissional: ''}));