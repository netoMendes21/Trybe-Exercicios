const novaPessoa = (nomeCompleto) => {
  const pessoa = {
    nomeCompleto,
    email: `${nomeCompleto.replace(' ', '_')}@trybe.com`.toLowerCase(),
  }
  return pessoa
};
console.log(novaPessoa('Neto'));


const newEmployees = (funcao) => {
  const employees = {
    id1: funcao ('Pedro Guerra'),
    id2: funcao ('Luiza Drumond'),
    id3: funcao('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(novaPessoa));