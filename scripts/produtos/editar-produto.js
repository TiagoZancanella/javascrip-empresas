const urlAPI = "https://public.franciscosensaulas.com"
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const idParaEditar = params.get("id");

const campoNomeProduto = document.getElementById('campoNomeProduto');
const campoPrecoProduto = document.getElementById('campoPrecoProduto');
const campoCategoria = document.getElementById('campoCategoria')

async function consultarDadosProdutoPorId() {
    const urlParaConsultarProduto = `${urlAPI}/api/v1/empresa/produtos/${idParaEditar}`
    console.log(urlParaConsultarProduto);

    const resposta = await fetch(urlParaConsultarProduto);
    if (resposta.ok == false) {
        alert("Produto não encontrado");
        window.location.href = "/produto/editar.html";
        return
    }

    const dadosProduto = await resposta.json();
    console.log(dadosProduto);

    campoNomeProduto.value = dadosProduto.nome;
    campoPrecoProduto.value = dadosProduto.preco;
    campoCategoria.value = dadosProduto.categoria

}

async function editar(evento) {
    evento.preventDefault();


    let nome = campoNomeProduto.value;
    let preco = campoPrecoProduto.value;
    let categoria = campoCategoria.value;

    const dados = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }

    let url = `${urlAPI}/api/v1/empresa/produtos/${idParaEditar}`;
    const resposta = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    if (resposta.ok == false) {
        alert("não foi possivel alterar")
    } else {
        location.href = '/produto/index.html'
    }

}







const botaoEditar = document.getElementById("botaoAlterar");
botaoEditar.addEventListener("click", editar);

consultarDadosProdutoPorId();
