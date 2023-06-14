const meuTitulo = document.getElementById('page-title');
meuTitulo.innerText= 'Jhon Wick';

const firstParagraph = document.getElementById('first-paragraph');
firstParagraph.innerText = 'Assassino de aluguel ,que se aposenta e tenta viver uma vida tranquila,porém o seu passado vem ao seu encontro e ele sai da sua vida tranquila para voltar a ser o Baba yaga';

const segundoTitulo = document.getElementsByTagName('h2');
segundoTitulo.innerText = 'Principais informações'

const paragrafoRenomeado = document.getElementsByClassName('paragraph-style');

  const novoParagrafo = paragrafoRenomeado[0];
  firstParagraph.style.fontStyle = 'italic';