function forInExemplo(obj){
  for(prop in obj){
    //console.log(prop);
    console.log(obj[prop]);
  }
}

const meuObjeto ={
  nome: "joão",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto);