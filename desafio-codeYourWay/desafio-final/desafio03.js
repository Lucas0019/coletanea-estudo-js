// Validador de Senha

// O EBANX precisa da sua ajuda para construir um validador de senhas, ou seja, 
// determinar se uma senha é válida ou não para os novos cadastros no aplicativo EBANX GO. 
// Uma senha é considerada válida caso respeite as 3 regras seguintes :

// Conter ao menos uma letra minúscula, um número e uma letra maiúscula. 
// Não possuir caracteres diferentes de letras e números. 
// Possuir de 8 a 36 caracteres



function isValidPassword(p) {

    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;

    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if (p.length > 8) {
        return retorno;
    }

    if (p.length < 8) {
        return retorno;
    }

    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;


    for (var i = 0; i < p.length; i++) {
        if (letrasMaiusculas.test(p[i]))
            auxMaiuscula++;
        else if (letrasMinusculas.test(p[i]))
            auxMinuscula++;
        else if (numeros.test(p[i]))
            auxNumero++;
        else if (caracteresEspeciais.test(p[i]))
            auxEspecial++;
    }

    if (auxMaiuscula > 0) {
        if (auxMinuscula > 0) {
            if (auxNumero > 0) {
                if (auxEspecial) {
                    retorno = true;
                }
            }
        }
    }

    return retorno;
}


//Testando
console.log(isValidPassword("test1234"));
console.log(isValidPassword("Test123@"));
console.log(isValidPassword("Teste123@"));