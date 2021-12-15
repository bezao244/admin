//criando a funcionalidade de abrir e fechar o menu
var pegBotao = document.querySelector(".botao-menu");
pegBotao.addEventListener('click', function(event){
    event.preventDefault();
    var pegMenu = document.querySelector(".menu");
    setTimeout(() => {
        pegMenu.classList.toggle("sumir");
    }, 150);
    
})