// Jenny escreveu uma função que retorna uma saudação para um usuário.
// No entanto, ela está apaixonada por Johnny e gostaria de cumprimentá-lo um pouco diferente. 
// Ela acrescentou um caso especial à sua função, mas cometeu um erro. Você pode ajudá-la?

function greet(name) {
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}