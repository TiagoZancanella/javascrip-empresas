let urlAPI = "https://public.franciscosensaulas.com";


const campoNomeProduto = document.getElementById('campoNomeProduto');
const campoPreco = document.getElementById("campoPreco");
const campoSelect = document.getElementById("campoSelect")
// const mascara = {
//     mask: "00.000.000/0000-00"
// };
// const mask = IMask(campoNomeProduto, mascara);


let botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener('click', salvar);


async function salvar(e) {
    e.preventDefault(); // form não deve ser enviado, interrompe o envio do formulário 

    let nome = campoNomeProduto.value; // Obtém o valor do nome
    let preco = campoPreco.value; // Obtém o valor do preço
    let categoria = campoSelect.value; //Obtém o ID da categoria selecionada
    



    if (nome.length < 3) {
        alert("Nome deve conter no mínimo 3 caracteres");
        return; // Faz com que o código abaixo não seja executado, ou seja, encerrando a execução dessa função
    }

    if (nome.length > 20) {
        alert("Nome deve conter no máximo 20 caracteres");
        return;
    }

    let Nome = campoNomeProduto.value;


    const dados = {
        nome: nome,
        preco: preco,
        categoria : categoria
    }





    let url = `${urlAPI}/api/v1/empresa/produtos` ;
    const resposta = await fetch(url, { 
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dados)
    });

    if (resposta.ok == false) {
        alert("não foi possivel cadastrar")
    } else {
        location.href ='produto/index.html'
    }



} 