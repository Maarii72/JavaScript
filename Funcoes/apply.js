//no apply passa entre [ ] dentro de um array

const myObj ={
  num1: 2,
  num2: 4,
};

function soma(a,b){
  console.log(this.num1 + this.num2 + a + b);
}

console.log(soma.apply(myObj,[1,5]));