const btnMenu = document.querySelector(".botao-menu");
const navHome = document.querySelector(".navegacao");

btnMenu.addEventListener("click", mostrarMenu);

function mostrarMenu()
{
    navHome.classList.toggle("ativo");
}