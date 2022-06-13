//Filtre e retorne todos os números pares de um array


function filtraPares(arr){
  return arr.filter(callback);
}

function callback(item){
  return item % 2 === 0;
}

const array = [10, 11, 12, 22, 25, 30, 31, 58, 67, 158, 485];

console.log(filtraPares(array));
