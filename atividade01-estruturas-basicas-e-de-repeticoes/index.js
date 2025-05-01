const prompt = require('prompt-sync')();

const question01 = () => {
  console.log(
    'Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.'
  );
  const number = parseInt(prompt('Digite um número inteiro: '));
  if (number % 2 === 0) {
    console.log(`${number} é par.`);
  } else {
    console.log(`${number} é ímpar.`);
  }
};

const question02 = () => {
  console.log(
    'Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.'
  );
  const age = parseInt(prompt('Digite a idade da pessoa: '));
  if (age < 12) {
    console.log('Criança');
  } else if (age < 18) {
    console.log('Adolescente');
  } else if (age < 60) {
    console.log('Adulto');
  } else {
    console.log('Idoso');
  }
};

const question03 = () => {
  console.log(
    'Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.'
  );
  const grade = parseFloat(prompt('Digite a nota (0 a 10): '));
  if (grade >= 7) {
    console.log('Aprovado');
  } else if (grade >= 5) {
    console.log('Recuperação');
  } else {
    console.log('Reprovado');
  }
};

const question04 = () => {
  console.log(
    'Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.'
  );
  const choice = parseInt(prompt('Escolha uma opção (1, 2 ou 3): '));
  switch (choice) {
    case 1:
      console.log('Você escolheu a opção 1.');
      break;
    case 2:
      console.log('Você escolheu a opção 2.');
      break;
    case 3:
      console.log('Você escolheu a opção 3.');
      break;
    default:
      console.log('Opção inválida.');
  }
};

const question05 = () => {
  console.log(
    'Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.'
  );
  const weight = parseFloat(prompt('Digite o peso em kg: '));
  const height = parseFloat(prompt('Digite a altura em metros: '));
  const imc = weight / (height * height);
  if (imc < 18.5) {
    console.log('Baixo peso');
  } else if (imc < 24.9) {
    console.log('Peso normal');
  } else if (imc < 29.9) {
    console.log('Sobrepeso');
  } else {
    console.log('Obesidade');
  }
};

const question06 = () => {
  console.log(
    'Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.'
  );
  const a = parseFloat(prompt('Digite o lado A: '));
  const b = parseFloat(prompt('Digite o lado B: '));
  const c = parseFloat(prompt('Digite o lado C: '));
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
      console.log('Triângulo equilátero');
    } else if (a === b || a === c || b === c) {
      console.log('Triângulo isósceles');
    } else {
      console.log('Triângulo escaleno');
    }
  } else {
    console.log('Os lados fornecidos não formam um triângulo.');
  }
};

const question07 = () => {
  console.log(
    'As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.'
  );
  const numberOfApples = parseInt(prompt('Digite o número de maçãs compradas: '));
  if (numberOfApples < 12) {
    const totalCost = numberOfApples * 0.3;
    console.log(
      `O valor total da compra é ${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(totalCost)}`
    );
  } else {
    const totalCost = numberOfApples * 0.25;
    console.log(
      `O valor total da compra é ${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(totalCost)}`
    );
  }
};

const question08 = () => {
  console.log(
    'Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.'
  );
  const firstValue = parseInt(prompt('Digite o primeiro valor: '));
  const secondValue = parseInt(prompt('Digite o segundo valor: '));
  if (firstValue === secondValue) {
    console.log('Os valores não podem ser iguais.');
    return;
  }
  if (firstValue < secondValue) {
    console.log(`Ordem crescente: ${firstValue}, ${secondValue}`);
  } else {
    console.log(`Ordem crescente: ${secondValue}, ${firstValue}`);
  }
};

const question09 = () => {
  console.log(
    'Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.'
  );
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
};

const question10 = () => {
  console.log('Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.');
  const number = parseInt(prompt('Digite um número inteiro: '));
  for (let i = 0; i < 10; i++) {
    console.log(`O número ${number} foi digitado ${i + 1} vezes.`);
  }
};

const question11 = () => {
  console.log(
    'Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.'
  );
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const number = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    total += number;
  }
  console.log(`A soma total dos números é ${total}.`);
};

const question12 = () => {
  console.log(
    'Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.'
  );
  const number = parseInt(prompt('Digite um número para ver sua respectiva tabuada: '));
  console.log(`Tabuada do ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

const question13 = () => {
  console.log(
    'Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.'
  );
  let total = 0;
  let count = 0;
  while (true) {
    const number = parseFloat(prompt('Digite um número decimal ou 0 para sair: '));
    if (number === 0) {
      break;
    }
    total += number;
    count++;
  }
  if (count > 0) {
    const average = total / count;
    console.log(`A média aritmética dos números é ${average}.`);
  } else {
    console.log('Nenhum número foi digitado.');
  }
};

const question14 = () => {
  console.log(
    'Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.'
  );
  const number = parseInt(prompt('Digite um número para calcular o fatorial: '));
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  console.log(`O fatorial de ${number} é ${factorial}.`);
};

const question15 = () => {
  console.log(
    'Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.'
  );
  let a = 0;
  let b = 1;
  console.log('Sequência de Fibonacci:');
  for (let i = 0; i < 10; i++) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }
};

const menu = () => {
  console.log('Bem-vindo ao menu de questões!');
  while (true) {
    console.log('');
    console.log('Escolha uma questão de 1 a 15 ou digite 0 para sair:');
    const choice = parseInt(prompt('Digite sua escolha: '));
    switch (choice) {
      case 1:
        question01();
        break;
      case 2:
        question02();
        break;
      case 3:
        question03();
        break;
      case 4:
        question04();
        break;
      case 5:
        question05();
        break;
      case 6:
        question06();
        break;
      case 7:
        question07();
        break;
      case 8:
        question08();
        break;
      case 9:
        question09();
        break;
      case 10:
        question10();
        break;
      case 11:
        question11();
        break;
      case 12:
        question12();
        break;
      case 13:
        question13();
        break;
      case 14:
        question14();
        break;
      case 15:
        question15();
        break;
      case 0:
        console.log('Saindo...');
        return;
      default:
        console.log('Opção inválida.');
    }
  }
};

menu();
