// EX 1

const string = 'Meu nome é Gustavo e eu sou estudante de analise e desenvolvimento de sistemas'

console.log(string)

console.log('------------------------------------')

// EX 2

const string1 = 'Otter'
const string2 = 'wise'

console.log(string1 + string2)

console.log('------------------------------------')

// EX 3

const firstName = 'Gustavo'
const lastName = 'Rosa'

console.log(`${firstName} ${lastName}`)

console.log('------------------------------------')

// EX 4

console.log(42 * -3.14)

console.log('------------------------------------')

// EX 5

const valor1 = 15
const valor2 = 09
const resultado = valor1 + valor2

console.log(resultado)

console.log('------------------------------------')

// EX 6

const fixedSalary = 5000
const totalValue = 100000
const percent = 10
const finalValue = (totalValue * percent) / 100

console.log(fixedSalary + finalValue)

console.log('------------------------------------')

// EX 7

let value1 = 3
let value2 = 12

console.log(`valor 1: ${value1}`)
console.log(`valor 2: ${value2}`)

const aux = value1
value1 = value2
value2 = aux

console.log(`valor 1: ${value1}`)
console.log(`valor 2: ${value2}`)

console.log('------------------------------------')

// EX 8

const distance = 240
const vel = 80
const fuel = 20

console.log(`média de consumo: ${distance / fuel} km/l`)
console.log(`tempo da viagem: ${distance / vel} horas`)

console.log('------------------------------------')

// EX 9

const name = 'Gustavo'
const age = 21

if (age >= 18) console.log(`${name} é maior de idade`); else console.log(`${name} é menor de idade`)

console.log('------------------------------------')

// EX 10

const num1 = 15
const num2 = 88

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}`)
} else {
    console.log(`${num1} é igual a ${num2}`)
}

console.log('------------------------------------')

// EX 11

const side1 = 2
const side2 = 6
const side3 = 4

if (side1 == side2 && side1 == side3) {
    console.log('triangulo equilatero')
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('triangulo isosceles')
} else console.log('triangulo escaleno')

console.log('------------------------------------')

// EX 12

const fullName = 'Gustavo Rosa'
const worker = true
const teacher = false

if (worker) {
    if (teacher) {
        console.log(`${fullName} você tem acesso a linha de credito especial`)    
    } else {
        console.log(`${fullName} você tem acesso a nossa linha de crédito para servidores.`)
    }
}
else {
    console.log(`${fullName} infelizmente você não tem uma linha de crédito disponível`)
}

console.log('------------------------------------')

// EX 13

const num = 15

if (num % 2 == 0) console.log('Par'); else console.log('Ímpar')

console.log('------------------------------------')

// EX 14

const n1 = 2
const n2 = 500
const n3 = 10000000

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

const v1 = 1
const v2 = 8
const v3 = 5

if (v2 >= v1 && v3 >= v2) {
    console.log(v1, v2, v3)
} else if (v3 >= v1 && v2 >= v3) {
    console.log(v1, v3, v2)
} else if (v1 >= v2 && v3 >= v1) {
    console.log(v2, v1, v3)
} else if (v3 >= v2 && v >= v3) {
    console.log(v2, v3, v1)
} else if (v1 >= v3 && v2 >= v1) {
    console.log(v3, v1, v2)
} else {
    console.log(v3, v2, v1)
}

console.log('------------------------------------')

// EX 16

const k1 = 6
const k2 = 12

if (k1 > k2) {
    if (k1 % k2 == 0) {
        console.log('são multiplos')
    } else console.log('não são multiplos')
} else {
    if (k2 % k1 == 0) {
        console.log('são multiplos')
    } else console.log('não são multiplos')
}

console.log('------------------------------------')

// EX 17

const start = 22
const end = 06

if (start > end) {
    console.log(`tempo de duração: ${24- (start - end)} horas`)
} else if (end > start) {
    console.log(`tempo de duração: ${end - start} horas`)
} else {
    console.log('tempo de duração: 24 horas')
}

console.log('------------------------------------')

// EX 18

let valueOne = 1
let valueTwo = 2
let valueThree = 3

console.log('valueOne: '+valueOne,'valueTwo: '+ valueTwo,'valueThree: '+ valueThree)

const auxiliar = valueTwo
valueTwo = valueThree
valueThree = valueOne
valueOne = auxiliar

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
    const cem = parseInt(x / 100)
    let resto = x % 100
    const cinq = parseInt(resto / 50)
    resto = resto % 50
    const vinte = parseInt(resto / 20)
    resto = resto % 20
    const dez = parseInt(resto / 10)
    resto = resto % 10
    const cinco = parseInt(resto / 5)
    resto = resto % 5
    const dois = parseInt(resto / 2)
    resto = resto % 2
    const um = parseInt(resto)

    console.log(`${cem} notas de R$ 100,00`)
    console.log(`${cinq} notas de R$ 50,00`)
    console.log(`${vinte} notas de R$ 20,00`)
    console.log(`${dez} notas de R$ 10,00`)
    console.log(`${cinco} notas de R$ 5,00`)
    console.log(`${dois} notas de R$ 2,00`)
    console.log(`${um} notas de R$ 1,00`)

}

dinheiro(576)

console.log('------------------------------------')

// EX 23

function horario(x) {
    const hour = parseInt(x / 3600)
    const resto = x % 3600
    const minute = parseInt(resto / 60)
    const sec = resto % 60
    console.log(`${hour}:${minute}:${sec}`)
}

horario(2592)

console.log('------------------------------------')

// EX 24

function proposta(clt, pj) {
    fgts = ((clt / 13) * 0.08) * 13 // total fgts anual
    beneficio = 700 * 13 // total beneficio anual
    clt = ((clt - fgts) + beneficio).toFixed()
    
    if (clt > pj) {
        return clt
    } else {
        return pj
    }
}

console.log(proposta(28000, 30000))

console.log('------------------------------------')

// EX 25

function imposto(x) {
    if (x < 21453.24) {
        return x
    } else if ( x < 32151.48) {
        return x * 0.075
    } else if (x < 42869.16) {
        return x * 0.15
    } else if (x < 53565.72) {
        return x * 0.225
    } else {
        return x * 0.275
    }
}


console.log('imposto = ' + imposto(proposta(28000, 30000)))

console.log('------------------------------------')

// EX 26

function custo(x) {
    const salary = 1000
    const salaryh = (salary / 160) * 2    

    return salaryh * x
}

console.log(custo(160))

console.log('------------------------------------')
