async function buscarCEP() {

    const cep = document
        .getElementById("cep")
        .value
        .replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    }

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const endereco = await resposta.json();

        if (endereco.erro) {
            alert("CEP não encontrado.");
            return;
        }

        document.getElementById("resultado").innerHTML = `
            <p><strong>Logradouro:</strong> ${endereco.logradouro}</p>
            <p><strong>Bairro:</strong> ${endereco.bairro}</p>
            <p><strong>Cidade:</strong> ${endereco.localidade}</p>
            <p><strong>UF:</strong> ${endereco.uf}</p>
        `;

        buscarLocais(
            endereco.localidade,
            endereco.uf
        );

    } catch (erro) {

        console.error("Erro:", erro);
        alert("Não foi possível consultar o CEP.");

    }
}


function buscarLocais(cidade, uf) {

    const locaisEncontrados = locais.filter(local =>
        local.cidade === cidade &&
        local.uf === uf
    );

    const resultado = document.getElementById("resultado");

    if (locaisEncontrados.length === 0) {
        resultado.innerHTML = `
            <h3>Locais Encontrados</h3>
            <p>Nenhum local encontrado para esta região.</p>
        `;
        return;
    }

    resultado.innerHTML = `
        <h3>Locais Encontrados</h3>
        ${locaisEncontrados.map(local => `
            <div class="local">
                <h4>${local.nome}</h4>
                <p>${local.endereco}</p>
                <p>${local.cidade} - ${local.uf}</p>
            </div>
        `).join("")}
    `;
}