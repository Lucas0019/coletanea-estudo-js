//Situação do Código Abaixo
//Failed tests: 2, Passed tests: 17, Total: 19 tests

/************************************************************************************
 *                                    PASSO 1                                       *
 ************************************************************************************/
const EXPLORADOR = 'Lucas';
let bolsaDeItens = [];
let moedas = 0;
let energia = 5;
let recompensas = ['Chave', 'Duck', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']

/************************************************************************************
 *                                    PASSO 2                                       *
 ************************************************************************************/
function taverna() {
    console.log('Explorador entrou na Taverna');
    if (energia < 5) {
        for (let energia = 0; energia < 5; energia++) {
            console.log('Explorador está descansando');
        }
        console.log('Explorador está revitalizado');
    }

}

/************************************************************************************
 *                                    PASSO 3                                       *
 ************************************************************************************/
function pegarItem(item) {
    if (item === 'moeda') {
        console.log('Explorador ganhou uma moeda');
        moedas++
    } else {
        console.log('Explorador ganhou um item');
        bolsaDeItens.push(item)
    }
}

/************************************************************************************
 *                                    PASSO 4                                       *
 ************************************************************************************/
function batalha() {
    console.log('Explorador encontrou um monstro');
    if (energia < 1) {
        console.log('Explorador fugiu para a Taverna')
        return false;
    } else if (energia > 1) {
        console.log('Explorador derrotou o monstro');
        energia -= 1
        return true;
    } else if (energia === 0) {
        console.log('Explorador fugiu para a Taverna');
        return false;
    }
}
function explorar() {
    console.log('Explorador saiu para explorar');
    if (energia < 1) {
        console.log('Explorador não pode explorar')
        taverna()
        return false;
    } else {
        batalha()
    } if (batalha() === true) {
        roletarRecompensas()
        return true;
    } else {
        taverna()
        return false;
    }
}


/************************************************************************************
 *                                    PASSO 5                                       *
 ************************************************************************************/

function abrirBau(bolsaDeItens) {
    if (bolsaDeItens.search() = 'Chave') {
        console.log("Parabéns, você finalmente abriu o bau é perigoso lá fora, leve seu certificado!")
        return true
    } else {
        return false
    }
}


















/************************************************************************************
 *                        NÃO APAGUE OU MEXA NO CÓDIGO ABAIXO                       *
 ************************************************************************************/
let properties = {}
let actions = {}

const roletarRecompensas = function () {
    let random = Math.floor(Math.floor(Math.random() * recompensas.length));
    let loot = recompensas[random];

    pegarItem(loot);
    recompensas.slice(random, 1);
}

if (typeof EXPLORADOR !== 'undefined') { properties.EXPLORADOR = EXPLORADOR }
if (typeof bolsaDeItens !== 'undefined') { properties.bolsaDeItens = bolsaDeItens }
if (typeof moedas !== 'undefined') { properties.moedas = moedas }
if (typeof energia !== 'undefined') { properties.energia = energia }
if (typeof recompensas !== 'undefined') { properties.recompensas = recompensas }
if (typeof taverna !== 'undefined') { actions.taverna = taverna }
if (typeof roletarRecompensas !== 'undefined') { actions.roletarRecompensas = roletarRecompensas }
if (typeof pegarItem !== 'undefined') { actions.pegarItem = pegarItem }
if (typeof batalha !== 'undefined') { actions.batalha = batalha }
if (typeof explorar !== 'undefined') { actions.explorar = explorar }
if (typeof abrirBau !== 'undefined') { actions.abrirBau = abrirBau }

module.exports.properties = properties;
module.exports.actions = actions











// /************************************************************************************
//  *                                    PASSO 1                                       *
//  ************************************************************************************/
//  const EXPLORADOR = "Lucas"
//  let bolsaDeItens = []
//  let moedas = 0
//  let energia = 5
//  let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']
//  /************************************************************************************
//   *                                    PASSO 2                                       *
//   ************************************************************************************/
//  function taverna() {
//      console.log(`O ${EXPLORADOR} entrou na Taverna.`)
//      if (energia < 5) {
//          console.log(`O ${EXPLORADOR} está descansando.`)
//          for (let i = 0; i < 5; i++) {
//              energia++
//          }
//          console.log(`O ${EXPLORADOR}  o Explorador está revitalizado.`)
//      }
//  }
//  /************************************************************************************
//   *                                    PASSO 3                                       *
//   ************************************************************************************/
//  function pegarItem(recompensas) {
//      if (recompensas === "Moeda") {
//          moedas++
//          console.log(`O ${EXPLORADOR} ganhou uma moeda.`)
//      }
//      else {
//          bolsaDeItens.push(recompensas)
//          console.log(`O ${EXPLORADOR} ganhou um item.`)
//      }
//  }
//  /************************************************************************************
//   *                                    PASSO 4                                       *
//   ************************************************************************************/
//  function batalha() {
//      console.log(`O ${EXPLORADOR} encontrou um monstro.`)
//      if (energia < 1) {
//          console.log(`O ${EXPLORADOR} fugiu para a Taverna.`)
//          return false
//      }
//      else {
//          let validacao = true;
//          console.log(`O ${EXPLORADOR} derrotou o monstro.`)
//          energia--
//          if (energia < 1) {
//              console.log(`O ${EXPLORADOR} fugiu para a Taverna.`)
//              validacao = false;
//          }
//          return validacao
//      }
//  }
//  function explorar() {
//      console.log(`O ${EXPLORADOR} saiu para explorar.`)
//      if (energia < 1) {
//          console.log(`O ${EXPLORADOR} nao pode explorar.`)
//          taverna()
//          return false
//      }
//      else {
//          if (batalha()) {
//              roletarRecompensas()
//              return true
//          }
//          else {
//              taverna()
//              return false
//          }
//      }
//  }
//  /************************************************************************************
//   *                                    PASSO 5                                       *
//   ************************************************************************************/
//  function abrirBau() {
//      let val = false;
//      bolsaDeItens.forEach(item => {
//          if (item == "Chave") {
//              console.log("Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!")
//              val = true;
//          }
//      });
//      return val;
//  }



//  /************************************************************************************
//   *                        NÃO APAGUE OU MEXA NO CÓDIGO ABAIXO                       *
//   ************************************************************************************/
//  let properties = {}
//  let actions = {}

//  const roletarRecompensas = function () {
//      let random = Math.floor(Math.floor(Math.random() * recompensas.length));
//      let loot = recompensas[random];

//      pegarItem(loot);
//      recompensas.slice(random, 1);
//  }

//  if (typeof EXPLORADOR !== 'undefined') { properties.EXPLORADOR = EXPLORADOR }
//  if (typeof bolsaDeItens !== 'undefined') { properties.bolsaDeItens = bolsaDeItens }
//  if (typeof moedas !== 'undefined') { properties.moedas = moedas }
//  if (typeof energia !== 'undefined') { properties.energia = energia }
//  if (typeof recompensas !== 'undefined') { properties.recompensas = recompensas }
//  if (typeof taverna !== 'undefined') { actions.taverna = taverna }
//  if (typeof roletarRecompensas !== 'undefined') { actions.roletarRecompensas = roletarRecompensas }
//  if (typeof pegarItem !== 'undefined') { actions.pegarItem = pegarItem }
//  if (typeof batalha !== 'undefined') { actions.batalha = batalha }
//  if (typeof explorar !== 'undefined') { actions.explorar = explorar }
//  if (typeof abrirBau !== 'undefined') { actions.abrirBau = abrirBau }

//  module.exports.properties = properties;
//  module.exports.actions = actions