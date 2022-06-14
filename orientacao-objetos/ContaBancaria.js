//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;

class ContaBancaria{
  //sempre que for mandar os parametros para uma classe, cria o método construtor
  constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  //Dentro de ContaBancaria, construa o getter e o setter de saldo
  get saldo(){
    return this._saldo;
  }

  set saldo(valor){
    this._saldo = valor;
  }

  //Dentro de ContaBancaria, crie os métodos sacar e depositar;
  sacar(valor){
    if (valor > this._saldo) return 'Operação negada'

    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

//Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito){
    super(agencia, numero);
    //em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  //Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
  get cartaoCredito(){
    return this._cartaoCredito;
  }

  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }
}

//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero);
    this.tipo = 'poupança'
  }
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero);
    this.tipo = 'universitária'
  }

    //Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
  sacar(valor){
    if (valor > 500) return 'Operação negada'

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

/* ---TESTES---
const minhaConta = new ContaCorrente(1, 234, true)
minhaConta.saldo
minhaConta.depositar(1000)
minhaConta.sacar(500)
minhaConta.saldo
minhaConta.sacar(600)

constcontaPoup = new ContaPoupanca(1, 22)
const contaUni = new ContaUniversitaria(1, 22)
contaUni.depositar(1000)
contaUni.sacar(550)

*/