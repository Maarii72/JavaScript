//clona a estrutura da função onde é chamada e aplica o valor do onjeto passado como parâmetro
const retornaNomes = function(){
  return this.nome;
};

let bruno = retornaNomes.bind({nome: 'bruno'});

bruno();