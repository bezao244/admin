//criando as trocas de funcionalidades da pág
//comecando pegando os botoes de funcionalidades

var pegCadastro = document.querySelector("#cadastrar");
var pegMenu = document.querySelector(".menu");

pegCadastro.addEventListener('click', function(event){
event.preventDefault();

//pegando a largura da tela para fazer a validacao de celular ou computador
var largura = window. screen. width;
if(largura< 1340){
    pegMenu.classList.toggle("sumir");
}
//fechando as outras funcionalidades abertas
var pegCadastroOficio = document.querySelector(".cadastrar-oficio");
pegCadastroOficio.classList.add("invisivel-2");

//adicionando o a classe do menu ativo para a borda da div mudar
var item = pegCadastro;
item.classList.toggle('menu-ativo');

//pegando a div de cadastro
var pegDivCadastro = document.querySelector(".cadastro");
pegDivCadastro.classList.toggle("invisivel");

//fechando a funcionalidade de cadastro e voltando para principal
var pegSair = document.querySelector(".botao-sair");
pegSair.addEventListener('click', function(event){
event.preventDefault();
pegDivCadastro.classList.add("invisivel");
setTimeout(() => {
    item.classList.remove('menu-ativo'); 
}, 100);
});
});


//agora com a funcionalidade de cadastrar oficio
var pegCadOficio = document.querySelector("#cad-oficio");

pegCadOficio.addEventListener('click', function(event){
event.preventDefault();

//so funciona pra quando é celular
var largura = window. screen. width;
if(largura< 1340){
    pegMenu.classList.toggle("sumir");
}

//fechando as outras funcionalidades abertas
//comecando pela de cadastro de acessos
var pegDivCadastro = document.querySelector(".cadastro");
pegDivCadastro.classList.add("invisivel");

//pegando a div de cadastro
var pegCadastroOficio = document.querySelector(".cadastrar-oficio");
pegCadastroOficio.classList.toggle("invisivel-2");

//adicionando a borda no oficio
var item2 = pegCadOficio;
item2.classList.toggle('menu-ativo');

var pegSair = document.querySelector("#sair-oficio");
pegSair.addEventListener('click', function(event){
event.preventDefault();

pegCadastroOficio.classList.add("invisivel-2");
setTimeout(() => {
    item2.classList.remove('menu-ativo');
}, 100);
});
});