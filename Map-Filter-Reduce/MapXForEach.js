//usando Map
const array = [1,2,3,4,5];
array.map((item) => item * 2); //retorna:[2,4,6,8,10];

//usando forEach (precisa de um array auxiliar)
const array1 = [1,2,3,4,5];
array.forEach((item) => item * 2); //retorna: undefined;