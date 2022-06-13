/*
Executa instrução até que a condição
se torne falsa.
A primeira execução sempre ocorre.
*/

function exemploDoWhile(){
  let num = 6;

  do{
    console.log(num);
    num++;
  }while(num <= 5)
}

exemploDoWhile()