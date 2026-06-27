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