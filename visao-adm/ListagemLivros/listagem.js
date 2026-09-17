const livros = document.querySelectorAll(".livro");

const btnAnterior = document.getElementById("pagina-anterior");
const btnProxima = document.getElementById("pagina-posterior");
const numPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

// Definir quantos livros serão mostrados por página
const livroPorPagina = 4;

// Guarda qual página está sendo exibida - começa na página 1
let paginaAtual = 1;

// Calculando o total de páginas
// Math.ceil -> Arrendonda para cima caso sobre resto

// EXEMPLO:
// 10 Livros / 4 por páginas = 2,5 -> 3

const totalPaginas = Math.ceil(livros.length / livroPorPagina);

function mostrarPagina() 
{
    const inicio = (paginaAtual - 1) * livroPorPagina;
    const fim = inicio + livroPorPagina;

    livros.forEach((livro, pos) => 
    {
        if (pos >= inicio && pos < fim) 
        {
            livro.style.display = "grid"
        }
        else    
        {
            livro.style.display = "none"
        }
    });

    numPagina.textContent = paginaAtual;
    
    let ultimoLivro = fim;

    // EXEMPLO - TENDO 6 LIVROS
    // PÁGINA 1
    // LIVRO
    // LIVRO
    // LIVRO
    // LIVRO
    // PÁGINA 2
    // LIVRO
    // LIVRO < Determinar que o fim é aqui
    // ------
    // ------ < Não aqui, por que não tem livro o suficiente

    if (ultimoLivro > livros.length) 
    {
        ultimoLivro = livros.length;    
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}


// Controle de avançar ou voltar entre páginas
btnProxima.addEventListener('click', () => 
{
    if(paginaAtual < totalPaginas)
    {
        paginaAtual++;
        mostrarPagina()
    }
});

btnAnterior.addEventListener('click', () => 
{
    if(paginaAtual > 1)
    {
        paginaAtual--;
        mostrarPagina()
    }
});

mostrarPagina();
