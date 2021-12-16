//abrindo a pagina de pesquisa
var pegDivPesquisa = document.querySelector(".pesquisa");
var botaoGerenciar = document.querySelector("#gerenciar-acessos");
botaoGerenciar.addEventListener("click", function(event){
    event.preventDefault();
    pegDivPesquisa.classList.toggle("invisivel4");
    //adicionando o a classe do menu ativo para a borda da div mudar
    var item = botaoGerenciar;
    item.classList.toggle('menu-ativo');
    //fechando a pagina pelo x
    var pegBotaoSair = document.querySelector(".saindo-x");
    pegBotaoSair.addEventListener("click", function(event){
        console.log("x funcionando!");
        event.preventDefault();
        pegDivPesquisa.classList.add("invisivel4");
        setTimeout(() => {
            item.classList.remove('menu-ativo');
        }, 100);
});
});

//criando a funcionalidade de pesquisa
var pegPesquisa = document.querySelector(".pesquisa-item");
pegPesquisa.addEventListener('input', function(event){
    var pegTabela = document.querySelectorAll(".linha-filtro");
    for(var i = 0; i < pegTabela.length; i++){
        var tabela = pegTabela[i];
        //pegando os nomes
        var pegNome = tabela.querySelector(".nome-filtro");
        var nome = pegNome.textContent;
        var expressao2 = new RegExp(this.value, "i");
        if(!expressao2.test(nome)){
            tabela.classList.add("sumir-linha");
            console.log("nao é igual");
        }else{
            tabela.classList.remove("sumir-linha");
            console.log("é igual!");
        }
        if(tabela.length < 1){
            var pegSpan = pegTabela[i].querySelector(".span-pesquisa");
            pegSpan.classList.remove("span-pesquisa");
        }
    }
}); 

//criando a de filtro
var pegSubmitFiltro = document.querySelector("#filtrar");
pegSubmitFiltro.addEventListener("click", function(event){
    event.preventDefault();
    var pegTabela = document.querySelectorAll(".linha-filtro");
    var pegCheck = document.querySelectorAll(".check");
    for(var i=0; i< pegCheck.length ; i++){
        if(pegCheck[0].checked){
            for(var i = 0; i < pegTabela.length; i++){
                var tabela = pegTabela[i];
                var Pegcargo = tabela.querySelector(".cargo");
                var cargo = Pegcargo.textContent;
                if(cargo != "Avaliador"){
                    tabela.classList.add("sumir-linha");
                }
            }
        }else  if(pegCheck[1].checked){
            for(var i = 0; i < pegTabela.length; i++){
                var tabela = pegTabela[i];
                var Pegcargo = tabela.querySelector(".cargo");
                var cargo = Pegcargo.textContent;
                if(cargo != "Terçeirizada"){
                    tabela.classList.add("sumir-linha");
                }
            }
        }else  if(pegCheck[2].checked){
            for(var i = 0; i < pegTabela.length; i++){
                var tabela = pegTabela[i];
                var Pegcargo = tabela.querySelector(".cargo");
                var cargo = Pegcargo.textContent;
                if(cargo != "Siderúrgica"){
                    tabela.classList.add("sumir-linha");
                }
            }
        }else  if(pegCheck[3].checked){
            for(var i = 0; i < pegTabela.length; i++){
                var tabela = pegTabela[i];
                var Pegcargo = tabela.querySelector(".cargo");
                var cargo = Pegcargo.textContent;
                if(cargo != "Candidato"){
                    tabela.classList.add("sumir-linha");
                }
            }
        }
    }
    
})
//FALTOU TROCAR POR UMA TABELA A LISTA
//PEGAR OS VALORES DOS CHECKBOX MARCADOS APENAS
//E FECHAR AS OUTRAS PAGINAS QUANDO ABRIR A DE PESQUISA