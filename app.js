//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function adicionarAmigo() {
    let dados_amigo = document.querySelector('input').value;

    if (dados_amigo == "") {
        alert('Por favor, insira um nome.');
    } else {
        if (amigos.includes(dados_amigo)) {
            alert('Esse nome já foi inserido.');  
        } else {
            amigos.push(dados_amigo);
            console.log(amigos);
            atualizarListaAmigos(); // Atualiza a lista após adicionar um novo amigo
        }
        
        document.querySelector('input').value = '';
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos na lista
        alert('Favor incluir um nome para o sorteio');
        return;
    }
    
    const max = amigos.length

    // gera um número aleatório entre o mínimo e o máximo (intervalo fechado)
    let indice = Math.floor(Math.random() * max); // Gera um índice válido
    console.log('O índice é ' + indice)
    let amigoSorteado = amigos[indice]; // Pega o nome sorteado

    console.log(amigoSorteado); // Mostra o nome sorteado no console
    document.getElementById('resultado').innerHTML = amigoSorteado; // Exibe o nome na tela
}