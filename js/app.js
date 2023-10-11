let listaDeAmigos = [];

function adicionar() {
    // Obtem os objetos que serão manipulados
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    if (nome.value == '') { // Verifica se o o campo está vazio
        alert('Por favor, adicione um nome válido.');
        return;
    }   
    
    if (listaDeAmigos.includes(nome.value)) { // Verifica se o nome já existe dentro da lista
        alert('Esse nome já consta na lista.');
        return;
    } 

    listaDeAmigos.push(nome.value); // Adiciona o nome na lista de amigos

    // Adiciona o nome no campo de amigos incluídos
    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent += ', ' + nome.value;
    }

    nome.value = ''; // Limpa o campo de preenchimento do nome
}

function sortear() {
    const numeroDeParticipantes = 4; // Define um número mínimo de participantes

    if (numeroDeParticipantes > listaDeAmigos.length) {
        alert(`Por favor, insira pelo menos o nome de ${numeroDeParticipantes} participantes.`);
        return;
    }

    embaralhar(listaDeAmigos);

    let sorteio = document.getElementById('lista-sorteio');

    // Imprime na tela o nome de cada amigo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i == listaDeAmigos.length - 1) {
            sorteio.innerHTML += listaDeAmigos[i] + ' --> ' + listaDeAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML += listaDeAmigos[i] + ' --> ' + listaDeAmigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
