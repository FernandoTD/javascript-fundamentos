function soma (num1, num2) {
    return num1 + num2; 
}

console.log(soma(5,10))
console.log(soma(-5,10))
console.log(soma(-50,-10))

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Fernando", 34))

function multiplica (num1 = 1, num2 = 1) {
    return num1 * num2;
}

//console.log(multiplica(soma(10,20), soma(5,5)))
console.log(multiplica(soma(10,20)))