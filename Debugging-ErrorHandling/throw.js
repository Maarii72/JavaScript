function verificaPalindromo(string){
  if(!string) throw "string inexistente";

  //split: separa todas as letras
  //reverse: reverter todos os caracteres
  //join: juntar todos elementos
  return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("ovo"))