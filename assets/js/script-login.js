//SCRIPT FUNÇÕES DO LOGIN

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
    document.getElementById('login-section').classList.remove('hidden');

    var btn = document.querySelector('#show-login');
    var container = document.querySelector('section');

    btn.addEventListener('click', function(){
        if(container.style.display === 'flex'){
            container.style.display = 'nome';
        } else{
            container.style.display = 'flex';
        }

    });
}

const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    window.location='index-inicio.html';
});
