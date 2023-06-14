const meuTitulo = document.getElementById('page-title');
meuTitulo.innerText= 'Jhon Wick';

const firstParagraph = document.getElementById('first-paragraph');
firstParagraph.innerText = 'Assassino de aluguel ,que se aposenta e tenta viver uma vida tranquila,porém o seu passado vem ao seu encontro e ele sai da sua vida tranquila para voltar a ser o Baba yaga';

const segundoTitulo = document.getElementById('subtitle');
segundoTitulo.innerText = 'Principais informações'
segundoTitulo.style.color = 'red';

const paragrafoRenomeado = document.getElementsByClassName('paragraph-style')[0];
paragrafoRenomeado.innerHTML = `<i>${paragrafoRenomeado.innerText}</i>`;

// outra opção de colocar o texto em itálico a baixo.
// paragrafoRenomeado.style.fontStyle = "italic";

const paragrafoInformacoesPrincipais = document.getElementById('second-paragraph');

paragrafoInformacoesPrincipais.innerText = 'Exemplo: Direção: nome da pessoa,roteirista: Nome das pessoas responsáveis pelo roteiro.';