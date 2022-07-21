// EX 1

let frase = 'Meu nome é Gustavo e eu sou estudante de analise e desenvolvimento de sistemas'

console.log(frase)

console.log('------------------------------------')

// EX 2

const string1 = 'Otter'
const string2 = 'wise'

console.log(string1 + string2)

console.log('------------------------------------')

// EX 3

let nome = 'Gustavo'
let sobrenome = 'Rosa'

console.log(`${nome} ${sobrenome}`)

console.log('------------------------------------')

// EX 4

console.log(42 * -3.14)

console.log('------------------------------------')

// EX 5

let valor1 = 15
let valor2 = 09
let resultado = valor1 + valor2

console.log(resultado)

console.log('------------------------------------')

// EX 6

let salarioFixo = 5000
let valorTotal = 100000
let porcentagem = 10
let valorFinal = (valorTotal * porcentagem) / 100

console.log(salarioFixo + valorFinal)

console.log('------------------------------------')

// EX 7

let value1 = 3
let value2 = 12

console.log(`valor 1: ${value1}`)
console.log(`valor 2: ${value2}`)

let aux = value1
value1 = value2
value2 = aux

console.log(`valor 1: ${value1}`)
console.log(`valor 2: ${value2}`)

console.log('------------------------------------')

// EX 8

let distancia = 240
let velocidade = 80
let combustivel = 20

console.log(`média de consumo: ${distancia / combustivel} km/l`)
console.log(`tempo da viagem: ${distancia / velocidade} horas`)

console.log('------------------------------------')

// EX 9

let name = 'Gustavo'
let idade = 21

if (idade >= 18) console.log(`${name} é maior de idade`); else console.log(`${name} é menor de idade`)

console.log('------------------------------------')

// EX 10

let num1 = 15
let num2 = 88

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}`)
} else {
    console.log(`${num1} é igual a ${num2}`)
}

console.log('------------------------------------')

// EX 11

let lado1 = 2
let lado2 = 6
let lado3 = 4

if (lado1 == lado2 && lado1 == lado3) {
    console.log('triangulo equilatero')
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('triangulo isosceles')
} else console.log('triangulo escaleno')

console.log('------------------------------------')

// EX 12

let nomeCompleto = 'Gustavo Rosa'
let servidor = true
let professor = false

if (servidor == true) {
    if (professor == true) {
        console.log(`${nomeCompleto} você tem acesso a linha de credito especial`)    
    } else {
        console.log(`${nomeCompleto} você tem acesso a nossa linha de crédito para servidores.`)
    }
}
else {
    console.log(`${nomeCompleto} infelizmente você não tem uma linha de crédito disponível`)
}

console.log('------------------------------------')

// EX 13

let num = 15

if (num % 2 == 0) console.log('Par'); else console.log('Ímpar')

console.log('------------------------------------')

// EX 14

let n1 = 2
let n2 = 500
let n3 = 10000000

// n1 maior
if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(n1 + n2)
    } else {
        console.log(n1 + n3)
    }
// n2 maior

} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(n2 + n1)
    } else {
        console.log(n2 + n3)
    }

// n3 maior
} else if (n2 > n1) {
    console.log(n3 + n2)
} else {
    console.log(n3 + n1)
}


console.log('------------------------------------')

// EX 15

let v1 = 1
let v2 = 0
let v3 = 3
let arr = [v1, v2, v3]

arr.sort().forEach(e => {
    console.log(e)
})

console.log('------------------------------------')

// EX 16

let k1 = 12
let k2 = 6

if (k1 % k2 == 0) console.log(k1 + ' é multiplo de ' + k2); else console.log(k1 + ' não é multiplo de ' + k2)

console.log('------------------------------------')

// EX 17

let inicio = 22
let termino = 06

if (inicio > termino) {
    console.log(`tempo de duração: ${24- (inicio - termino)} horas`)
} else if (termino > inicio) {
    console.log(`tempo de duração: ${termino - inicio} horas`)
} else {
    console.log('tempo de duração: 24 horas')
}

console.log('------------------------------------')

// EX 18

let valueOne = 1
let valueTwo = 2
let valueThree = 3

console.log('valueOne: '+valueOne,'valueTwo: '+ valueTwo,'valueThree: '+ valueThree)

let a = valueTwo
valueTwo = valueThree
valueThree = valueOne
valueOne = a

console.log('valueOne: '+valueOne,'valueTwo: '+ valueTwo,'valueThree: '+ valueThree)

console.log('------------------------------------')

// EX 19

function checkSignal(x) {
    if (x >=0) console.log(`${x} é positivo`)
    else console.log(`${x} é negativo`)
}

checkSignal(22)

console.log('------------------------------------')

// EX 20

function double(x) {
    return x*2
}

console.log(double(-40))

console.log('------------------------------------')

// EX 21

function calculate(x,y,z) {
    if (x == "soma") return y + z
    else if (x == "subtrai") return y - z
    else if (x == "multiplica") return y * z
    else if (x == "divide") return y / z
}

console.log(calculate('soma', 2,5))
console.log(calculate('subtrai', 2,5))
console.log(calculate('multiplica', 2,5))
console.log(calculate('divide', 2,5))


console.log('------------------------------------')

// EX 22

function dinheiro(x) {
    let cedulas = [100, 50, 20, 10, 5, 2, 1]
    let result = 0
    
    for (let i=0; i<cedulas.length; i++) {
        result = parseInt(x / cedulas[i])
        x %= cedulas[i]
        console.log(`${result} notas de R$ ${cedulas[i]},00`)
        // console.log(x)
    }
}

dinheiro(576)

console.log('------------------------------------')

// EX 23

function horario(x) {
    let hora = parseInt(x / 3600)
    let resto = x % 3600
    let minuto = parseInt(resto / 60)
    let sec = resto % 60
    console.log(`${hora}:${minuto}:${sec}`)
}

horario(2592)

console.log('------------------------------------')

// EX 24

function proposta(x, y) {
    let clt = (x -(x * 0.08) + 700).toFixed()
    console.log(clt)
    if (clt > y) {
        return 'CLT'
    } else {
        return 'PJ'
    }
}

console.log(proposta(1000, 1500))

console.log('------------------------------------')

// EX 25

function imposto(x) {
    if (x > 21453.24) {
        return x * 0.075
    } else if ( x > 32151.48) {
        return x * 0.15
    } else if (x > 42869.16) {
        return x * 0.225
    } else if (x > 53565.72) {
        return x * 0.275
    } else {
        return x
    }
}

console.log(imposto(25000))

console.log('------------------------------------')

// EX 26
