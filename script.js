let meuNome = "Rodrigo"
let minhaIdade = 42

const altura = 1.75

console.log('Meu nome é: ' + meuNome)
console.log('Minha idade é: ' + minhaIdade)
console.log('Minha altura é: ' + minhaAltura)

minhaIdade = 43

console.log('Minha idade agora é:' + minhaIdade)

if (minhaIdade == 42) {
    console.log("É verdade que minha idade é 42")
} else{
    console.log("Minha idade não é 42")
} 

while(minhaIdade < 40) { 
    console.log('Ainda não sou velho')
    minhaIdade = minhaIdade + 1
}

for(let i = 0; i < 10; i = 1) {
    console.log(i)
}
function soma(x, y) {
    return x + y
}
let resultadoDaSoma = somar(1, 3)
let resultadoDaSoma2 = somar(1000, 452)


console.log('O resultado' de 1 + 3: ' + resultadoDaSoma')
console.log('O resultado de 1000 + 452: ' + resultadoDaSoma2)
