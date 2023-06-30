// expressão de função (geralmente são sem nome)
//diferença principal: HOISTING
// funções e var são "listadas" no topo

//console.log(soma(1, 1)) = não vai funcionar, pois não foi inicializada antes
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma (1, 1))

console.log(apresentar())
function apresentar() {
    return "Olá";
}


