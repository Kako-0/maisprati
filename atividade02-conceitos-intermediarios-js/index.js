const prompt = require('prompt-sync')();

const question01 = () => {
  console.log(
    '1. Validação de Datas: Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.'
  );
  const ehDataValida = (dia, mes, ano) => {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
      return false;
    }
    const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
    if (mesesCom31Dias.includes(mes)) {
      return dia <= 31;
    }
    if (mes === 2) {
      const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
      return dia <= (ehBissexto ? 29 : 28);
    }
    const mesesCom30Dias = [4, 6, 9, 11];
    if (mesesCom30Dias.includes(mes)) {
      return dia <= 30;
    }
    return dia <= 31;
  };
  // Testando a função
  const data = prompt('Digite uma data no formato dia/mês/ano (ex: 29/02/2020): ');
  const [dia, mes, ano] = data.split('/').map(Number);
  if (ehDataValida(dia, mes, ano)) {
    console.log(`A data é válida.`);
  } else {
    console.log(`A data é inválida.`);
  }
};

const question02 = () => {
  console.log(
    '2. Jogo de Adivinhação: Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.'
  );
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let palpite;
  let tentativas = 0;
  do {
    palpite = parseInt(prompt('Digite o número entre 1 e 100, ou -1 para finalizar: '));
    if (isNaN(palpite) || palpite > 100) {
      console.log('Por favor, digite um número válido entre 1 e 100.');
      continue;
    }
    if (palpite === -1) {
      console.log('');
      console.log(
        `Jogo finalizado pelo usuário. O número era: ${numeroAleatorio}. Você fez ${tentativas} tentativas.`
      );
      return;
    }

    tentativas++;
    if (palpite < numeroAleatorio) {
      console.log('Mais alto!');
    } else if (palpite > numeroAleatorio) {
      console.log('Mais baixo!');
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    }
  } while (palpite !== numeroAleatorio);
};

const question03 = () => {
  console.log(
    '3. Palavras Únicas: Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.'
  );
  let frase = prompt(
    'Digite uma frase ou deixe em branco para usar a frase padrão (olá olá mundo mundo): '
  );
  if (!frase) {
    frase = 'olá olá mundo mundo';
  }
  frase = frase.toLowerCase();
  const palavras = frase.split(' ');
  const palavrasUnicas = [];
  for (const palavra of palavras) {
    if (!palavrasUnicas.includes(palavra)) {
      palavrasUnicas.push(palavra);
    }
  }
  console.log(`Palavras únicas: [${palavrasUnicas.join(', ')}]`);
};

const question04 = () => {
  console.log(
    '4. Fatorial Recursivo: Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.'
  );
  const fatorial = (n) => {
    if (n < 0) {
      throw new Error('Número negativo não é permitido para cálculo de fatorial.');
    }
    if (n === 0) {
      return 1;
    }
    return n * fatorial(n - 1);
  };
  const numero = parseInt(prompt('Digite um número para calcular o fatorial: '));

  try {
    console.log(`Fatorial de ${numero} é ${fatorial(numero)}.`);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
};

const question05 = () => {
  console.log(
    '5. Debounce: Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.'
  );
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  function greet(message) {
    console.log(message + ' ' + this.name);
  }

  const user = { name: 'Kako' };
  const debouncedGreet = debounce(greet.bind(user), 3000);

  console.log('Começando o exemplo...');

  debouncedGreet('Hello'); // Will set a timeout
  debouncedGreet('Hi'); // Will clear the previous timeout and set a new one
  debouncedGreet('Hey');
  console.log(
    'A função por estar dentro de um loop do menu, não será executada imediatamente. Ela só será executada depois de 3 segundos após fechar o loop do menu.'
  );
};

const question06 = () => {
  console.log(
    '6. Memoization: Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.'
  );
  const memoize = (fn) => {
    const cache = {};

    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log(`Retornando do cache para a chave: ${key}`);
        return cache[key];
      } else {
        console.log(`Calculando e armazenando para a chave: ${key}`);
        const result = fn(...args);
        cache[key] = result;

        return result;
      }
    };
  };
  const exemploFuncao = (x) => {
    console.log(`Calculando o quadrado de ${x}`);
    return x * x;
  };
  const memoizedFunc = memoize(exemploFuncao);
  console.log('Chamando a função memoizedFunc com o argumento 5...');
  console.log(memoizedFunc(5)); // Calcula e retorna 25
  console.log('Chamando novamente com o mesmo argumento 5...');
  console.log(memoizedFunc(5)); // Retorna 25 do cache
  console.log(
    'Você pode chamar memoizedFunc com diferentes argumentos e ela armazenará os resultados em cache para chamadas futuras.'
  );
};

const question07 = () => {
  console.log(
    '7. Mapeamento e Ordenação: Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.'
  );
  const produtos = [
    { nome: 'Produto A', preco: 3 },
    { nome: 'Produto B', preco: 1 },
    { nome: 'Produto C', preco: 2 },
  ];
  const nomesOrdenadosPorPreco = produtos
    .map((produto) => produto.nome)
    .sort((a, b) => {
      const precoA = produtos.find((p) => p.nome === a).preco;
      const precoB = produtos.find((p) => p.nome === b).preco;
      return precoA - precoB;
    });
  console.log('Array de produtos original: ', produtos);
  console.log('Array de produtos ordenados por preço crescente:');
  console.log(nomesOrdenadosPorPreco.join(', '));
  console.log(
    'Você pode modificar o array produtos para incluir mais produtos e a função continuará funcionando.'
  );
};

const question08 = () => {
  console.log(
    '8. Agrupamento por Propriedade: Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.'
  );
  const vendas = [
    { cliente: 'Cliente A', total: 100 },
    { cliente: 'Cliente B', total: 200 },
    { cliente: 'Cliente A', total: 150 },
    { cliente: 'Cliente C', total: 300 },
  ];
  const vendasPorCliente = vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
  console.log('Array de vendas original: ', vendas);
  console.log('Vendas agrupadas por cliente:');
  console.log(vendasPorCliente);
  console.log('Você pode adicionar mais vendas ao array vendas e a função continuará funcionando.');
};

const question09 = () => {
  console.log('9. Conversão Entre Formatos: Escreva duas funções: ');
  console.log(
    '○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. '
  );
  console.log('○ objetoParaPares(obj) faz o inverso, retornando um array de pares.');

  const paresParaObjeto = (pares) => {
    return pares.reduce((obj, [chave, valor]) => {
      obj[chave] = valor;
      return obj;
    }, {});
  };
  const objetoParaPares = (obj) => {
    return Object.entries(obj).map(([chave, valor]) => [chave, valor]);
  };
  const pares = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  const objeto = paresParaObjeto(pares);
  console.log('Pares para objeto:');
  console.log(objeto);
  const paresConvertidos = objetoParaPares(objeto);
  console.log('Objeto para pares:');
  console.log(paresConvertidos);

  console.log(
    'Você pode modificar o array pares para incluir mais pares e as funções continuarão funcionando.'
  );
};

const menu = () => {
  console.log('Bem-vindo ao menu de questões!');
  while (true) {
    console.log('');
    console.log('Escolha uma questão de 1 a 9 ou digite 0 para sair:');
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
      case 0:
        console.log('Saindo...');
        return;
      default:
        console.log('Opção inválida.');
    }
  }
};

menu();
