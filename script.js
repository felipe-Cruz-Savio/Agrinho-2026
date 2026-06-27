if (document.getElementById('entrar')) {
    document.getElementById('entrar').addEventListener('click', function() {
        const nomeUsuario = document.querySelector('.camponome').value.trim();
        if (nomeUsuario === "") {
            alert("Por favor, insira seu nome!");
            return;
        }
        document.getElementById('nome-carregamento').textContent = nomeUsuario;
        document.querySelector('.login').classList.add('escondido');
        document.getElementById('tela-loading').classList.remove('escondido');
        setTimeout(function() {
            window.location.href = "main.html";
        }, 2000); 
    });
}

if (document.getElementById('btn-acessibilidade')) {
    document.getElementById('btn-acessibilidade').addEventListener('click', function() {
        const botoesAcessibilidade = document.getElementById('botoes-acessibilidade');
        if (botoesAcessibilidade.style.display === 'none' || botoesAcessibilidade.style.display === '') {
            botoesAcessibilidade.style.setProperty('display', 'flex', 'important');
        } else {
            botoesAcessibilidade.style.setProperty('display', 'none', 'important');
        }
    });
}

let fontSize = 20; 
const fontSizeMin = 16; 
const fontSizeMax = 28; 

function atualizarFonte() {
    document.body.style.fontSize = fontSize + 'px';
}

if (document.getElementById('btn-aumentar')) {
    document.getElementById('btn-aumentar').addEventListener('click', function() {
        if (fontSize < fontSizeMax) {
            fontSize += 2; 
            atualizarFonte(); 
        }
    });
}

if (document.getElementById('btn-diminuir')) {
    document.getElementById('btn-diminuir').addEventListener('click', function() {
        if (fontSize > fontSizeMin) {
            fontSize -= 2; 
            atualizarFonte(); 
        }
    });
}

atualizarFonte();

if (document.getElementById('btn-mudar-cor')) {
    document.getElementById('btn-mudar-cor').addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });
}