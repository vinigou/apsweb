//SCRIPT CALCULADORA IMC

const form = document.getElementById('form-calc-imc');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('valor-peso').value;
    const altura = document.getElementById('valor-altura').value / 100;
    
    const valimc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor-imc');

    document.getElementById('infos').classList.remove('hidden');
    valor.textContent = valimc.replace('.',',');
    
    var container = document.querySelector('#infos');
    let descriçao = '';
    if (valimc < 18.5) {
        descriçao = 'Você está abaixo de seu peso ideal.';
        container.style.color = '#00fbff';
    } else if (valimc >= 18.5 && valimc < 25) {
        descriçao = 'Você está no seu peso ideal! Parabéns!';
        container.style.color = '#33cc18';
    } else if (valimc >= 25 && valimc < 30) {
        descriçao = 'Você está com sobrepeso.';
        container.style.color = '#e1ff00';
    } else if (valimc >= 30 && valimc < 35) {
        descriçao = 'Você está com obesidade moderada.';
        container.style.color = '#99660c';
    } else if (valimc >= 35 && valimc < 40) {
        descriçao = 'Você está com obesidade severa.';
        container.style.color = '#cc3306';
    } else if (valimc >= 40) {
        descriçao = 'Você está com obesidade morbida.';
        container.style.color = '#ff0000';
    }

    document.getElementById('descriçao-peso').textContent = descriçao;
});
