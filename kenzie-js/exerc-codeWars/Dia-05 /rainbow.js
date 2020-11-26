// É um dia ensolarado e então uma nuvem aparece de lugar nenhum ...
// Agora existem centenas de arco-íris por toda parte. 
// Você deve verificar se eles estão cheios e bonitos. 
// Você receberá um array que representa o arco-íris e 
// você precisa verificar se é um arco-íris completo 
// ou não e retornar verdadeiro ou falso. 

// Por exemplo. cores ['1', '2'] retornará falso

sortRainbow = (colour) => {
    // lucky charms!!!
    return ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].every((v, i) => colour[i] === v);


}