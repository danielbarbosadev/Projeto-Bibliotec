const btnMenu = document.querySelector(".btn-menu");
const navHome = document.querySelector(".navegacao");

btnMenu.addEventListener("click", mostrarMenu);

function mostrarMenu()
{
    navHome.classList.toggle("ativo");
}