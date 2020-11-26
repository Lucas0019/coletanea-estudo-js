// 2. Vogal-Substring

//  Dada uma string de letras minúsculas em inglês e um inteiro do comprimento da substring, 
//  determine a substring desse comprimento que contém a maioria das vogais. 
//  As vogais estão no conjunto {a, e, i, o, u}. 
//  Se houver mais de uma substring com o número máximo de vogais, retorne aquela que começa com o índice mais baixo. 
//  Se não houver vogais na string de entrada, retorne a string 'Não encontrado!' sem aspas.



function findSubstring(s, k) {
    // Write your code here
    longestVowelList = (str) => {
        const vowels = ["a", "e", "i", "o", "u"];
        const result = vowels.map(vowel => {
            const regex = new RegExp(`[^${vowel}]+`);
            return str.split(regex)
                .filter(r => r !== "")
                .sort((a, b) => b.length - a.length);
        });
        return result.flat(1).join("");
    }
    console.log('---->', longestVowelList("codewarriors"));
    //Output ----> aeioo

}