// Capturar o evento de sumit do formulario

// Constante formulario recebe a ligaçao com o Js
//document.querySelector('') é usado para retornar o primeiro elemento
const form = document.querySelector('#formulario')

// Criado esse evento para quando o usuario clicar no botao,
// não ir pra outro lugar e nem recarregar a pagina
// ou seja, ele não perde as informações
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // target é usado para informar e pegar informação
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); // O que estiver no Input Peso, vai ser a variavel "Peso"
    const altura = Number(inputAltura.value); // O que estiver no Input Altura, vai ser a variavel "Altura"
    

    if (!peso) { // Se o peso nao for falso entao vai retornar o SetResultado
        setResultado('Peso inválido', false);
        return;
    }
    
    if (!altura) { // Se a altura nao for falso entao vai retornar o SetResultado
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // Criando a Const imc que pega a function getImc que tem o Peso e Altura
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

// Function getNivelImc, ele pega o imc e retorna algum dos arrays
function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1',
      'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9)  return nivel[5];
    if (imc >= 34.9)  return nivel[4]
    if (imc >= 29.9)  return nivel[3];
    if (imc >= 24.9)  return nivel[2];
    if (imc >= 18.5)  return nivel[1];
    if (imc < 18.5)   return nivel[0];
}

// Function getImc, ele calcula o peso e altura e retorna o valor
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// function que so cria um paragrafo
function criaP (className) {
    const p = document.createElement('p'); // Criar o paragrafo
    return p; // retornar P
}

// Criando a função para aparecer o Resultado
// Função para colocar o HTML na Div
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // zerar o resultado

    const p = criaP();

    // o isValid checa se deu tudo certo, se nao vai retornar o p em vermelho, se deu certo Verde
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    
    p.innerHTML = msg;
    resultado.appendChild(p);
}