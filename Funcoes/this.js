/*
A palavra reservada this é uma referência de contexto
Exemplo: this refere-se ao objeto pessoa.
*/

const pessoa ={
  firstName: "Marilena",
  lastName: "Neves",
  id: 1,
  fullName: function(){
    return this.firstName+ " " +this.lastName;
  },
  getId: function(){
    return this.id;
  }
};
console.log(pessoa.fullName());
//pessoa.getId();