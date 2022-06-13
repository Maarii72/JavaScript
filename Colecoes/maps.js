/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1-Crie uma função getAdmins que recebe um Map;
2-Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3-Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

function getAdmins(map){
  let admins= [];
  for([key, value] of map){
    if(value === 'admin'){
      admins.push(key)
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Mari', 'admin');
usuarios.set('Regis', 'admin');
usuarios.set('Nana', 'admin');
usuarios.set('Ana', 'admin');
usuarios.set('João', 'user');
usuarios.set('Isaac', 'user');

console.log(getAdmins(usuarios));