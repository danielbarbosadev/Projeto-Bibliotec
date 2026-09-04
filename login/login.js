const campoSenha = document.getElementById("password");
const btnMostrarSenha = document.querySelector(".btn-olho");

console.log(campoSenha.type)

btnMostrarSenha.addEventListener("click", mostrarSenha);

function mostrarSenha()
{
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
}
