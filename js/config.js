//criando uma funcionalidade de abrir as configuracoes
var pegConfig = document.querySelector("#config");
pegConfig.addEventListener("click", function(event){
event.preventDefault();
var pegDivConfig = document.querySelector(".config");
setTimeout(() => {
    pegDivConfig.classList.remove("sumir-config");
}, 100);

var pegClose = document.querySelector(".botao-config");
pegClose.addEventListener("click", function(event){
    event.preventDefault();
    setTimeout(() => {
        pegDivConfig.classList.add("sumir-config");
    }, 100);
})
});