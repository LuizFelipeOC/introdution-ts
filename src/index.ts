interface IAccount {
  titular: string;
  saldo?: number;
}

class Account {
  private titular: string;
  private saldo: number;

  constructor({ titular, saldo = 0 }: IAccount) {
    (this.titular = titular),
      (this.saldo = saldo),
      console.log("Bem vindo ao DioBank!");
  }

  myValues = (): number => {
    return this.saldo;
  };

  deposit = (depositValue: number): number => (this.saldo += depositValue);

  retiredValue = (retiredValue: number): number => {
    const value: number = this.saldo - retiredValue;
    return value;
  };
}

const createAccount: Account = new Account({
  titular: "Luiz",
  saldo: 1000,
});

console.log(createAccount);
console.log(createAccount.myValues());
console.log(createAccount.deposit(5000));
console.log(createAccount.retiredValue(500));

// function sum(num: number,) {
//     return num + 1;
// }

// interface ISumAge {
//     name: string,
//     yearnBorn: number,
//     profissional?: string,
// }

// function sumAge({ name, yearnBorn, profissional
// }: ISumAge): string {
//     const age: number = 2022 - yearnBorn;

//     if(profissional == ""){
//         return `Olá ${name} você tem ${age} anos.`;

//     }

//     return `Olá ${name} você tem ${age} anos e sua profissão é ${profissional}.`;
// }

// console.log(sumAge({ name: "Luiz", yearnBorn: 2002, profissional: ''}));
