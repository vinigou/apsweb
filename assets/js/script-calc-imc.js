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
    
    let descriçao = '';
    if (valimc < 18.5) {
        descriçao = 'Você está abaixo de seu peso ideal.';
    } else if (valimc >= 18.5 && valimc < 25) {
        descriçao = 'Você está no seu peso ideal! Parabéns!';
    } else if (valimc >= 25 && valimc < 30) {
        descriçao = 'Você está com sobrepeso.';
    } else if (valimc >= 30 && valimc < 35) {
        descriçao = 'Você está com obesidade moderada.';
    } else if (valimc >= 35 && valimc < 40) {
        descriçao = 'Você está com obesidade severa.';
    } else if (valimc >= 40) {
        descriçao = 'Você está com obesidade morbida.';
    }

    document.getElementById('descriçao-peso').textContent = descriçao;
});
