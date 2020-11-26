/************************************************************************************
//  *                                    PASSO 1                                       *
//  ************************************************************************************/
const EXPLORADOR = "Lucas"
let bolsaDeItens = []
let moedas = 0
let energia = 5
let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']

//  /************************************************************************************
//   *                                    PASSO 2                                       *
//   ************************************************************************************/
function taverna() {
    console.log(`O ${EXPLORADOR} entrou na Taverna.`)
    if (energia < 5) {
        console.log(`O ${EXPLORADOR} está descansando.`)
        for (let i = 0; i < 5; i++) {
            energia++
        }
        console.log(`O ${EXPLORADOR}  o Explorador está revitalizado.`)
    }
}

//  /************************************************************************************
//   *                                    PASSO 3                                       *
//   ************************************************************************************/
function pegarItem(recompensas) {
    if (recompensas === "Moeda") {
        moedas++
        console.log(`O ${EXPLORADOR} ganhou uma moeda.`)
    }
    else {
        bolsaDeItens.push(recompensas)
        console.log(`O ${EXPLORADOR} ganhou um item.`)
    }
}

//  /************************************************************************************
//   *                                    PASSO 4                                       *
//   ************************************************************************************/
function batalha() {
    console.log(`O ${EXPLORADOR} encontrou um monstro.`)
    if (energia < 1) {
        console.log(`O ${EXPLORADOR} fugiu para a Taverna.`)
        return false
    }
    else {
        let validacao = true;
        console.log(`O ${EXPLORADOR} derrotou o monstro.`)
        energia--
        if (energia < 1) {
            console.log(`O ${EXPLORADOR} fugiu para a Taverna.`)
            validacao = false;
        }
        return validacao
    }
}
function explorar() {
    console.log(`O ${EXPLORADOR} saiu para explorar.`)
    if (energia < 1) {
        console.log(`O ${EXPLORADOR} nao pode explorar.`)
        taverna()
        return false
    }
    else {
        if (batalha()) {
            roletarRecompensas()
            return true
        }
        else {
            taverna()
            return false
        }
    }
}

//  /************************************************************************************
//   *                                    PASSO 5                                       *
//   ************************************************************************************/
function abrirBau() {
    let val = false;
    bolsaDeItens.forEach(item => {
        if (item == "Chave") {
            console.log("Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!")
            val = true;
        }
    });
    return val;
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