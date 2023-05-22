function alertaEntrar() {
    var desc = document.getElementById('login-box');
    if (window.getComputedStyle(desc).display === "none") {
        document.getElementById('necessario-entrar').classList.remove('hidden');
        document.getElementById('bem-vindo').classList.add('hidden');
    }
}

function Entrar() {
    document.getElementById('bem-vindo').classList.add('hidden');
    document.getElementById('necessario-entrar').classList.add('hidden');
    document.getElementById('login-box').classList.remove('hidden');
}

const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    window.location='index-inicio.html';
});
