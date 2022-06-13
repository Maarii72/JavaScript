/*
Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando 
o parâmetro this de um objeto criado por você, e depois sem ele.
*/

const maca ={
  value: 2,
};

const banana ={
  value: 3,
};

function mutiplica(arr, thisArg){
  return arr.map(function(item){
    return item * this.value;
  }, thisArg);
}

const nums =[1, 2];

console.log('this -> maçã', mutiplica(nums,maca)); //[2, 4]
console.log('this -> banana', mutiplica(nums,banana)); //[3, 6]

