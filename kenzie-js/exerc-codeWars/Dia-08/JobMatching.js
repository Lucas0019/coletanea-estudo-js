// Vamos construir um sistema de matchmaking que ajude a descobrir empregos para desenvolvedores com base em uma série de fatores.
// Um dos fatores mais simples, mas mais importantes, é a compensação. 
// Como desenvolvedores, sabemos de quanto dinheiro precisamos para sustentar nosso estilo de vida, 
// então geralmente temos uma ideia aproximada do salário mínimo com o qual estaríamos satisfeitos.
//  Vamos tentar. Criaremos uma correspondência de função que leva um candidato e uma vaga, 
//  que retornará um booleano indicando se a vaga é uma correspondência válida para o candidato. 

//  Um candidato terá um salário mínimo, então será assim:

// let candidate = {
//     minSalary: 120000
//   }

// Um trabalho terá um salário máximo, então será parecido com este:

// let job = {
//     maxSalary: 140000
//   }


// Se o salário mínimo do candidato ou o salário máximo do cargo não estiver presente, gere um erro. 
// Para uma correspondência válida, o salário mínimo do candidato deve ser menor ou igual ao salário máximo do cargo. 
// No entanto, vamos incluir também 10% de espaço de manobra (deduzido do salário mínimo do candidato) 
// caso o candidato seja um rockstar que goste de programar no Codewars nas horas vagas.
//  A empresa que oferece o emprego pode ser capaz de resolver algo.

const match = (candidate, job) => {
    if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
    return job.maxSalary >= (candidate.minSalary * .9);
};