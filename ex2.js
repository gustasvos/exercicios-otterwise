// EX 1

for (let i = 1; i <= 25; i++) {
    console.log(i)
}

console.log('------------------------------------')

// EX 2

for (let i = 10; i <= 200; i += 10) {
    console.log(i)
}

console.log('------------------------------------')

// EX 3

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let result = ''

for (let i = 0; i < names.length; i++) {
    if (names[i] != names[names.length - 1]) {
        result += names[i] + ', '
    } else {
        result += names[i]
    }
}

console.log(result)

console.log('------------------------------------')

// EX 4

function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(4)

console.log('------------------------------------')

// EX 5

const arr = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        console.log(arr[i])
    }
}

console.log('------------------------------------')

// EX 6
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

function mostra(arr) {
    const par = []
    const impar = []
    const pos = []
    const neg = []

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            par[par.length] = arr[i]
        } else {
            impar[impar.length] = arr[i]
        }

        if (arr[i] >= 0) {
            pos[pos.length] = arr[i]

        } else {
            neg[neg.length] = arr[i]
        }
    }
    console.log(`${par.length} valores pares`)
    console.log(`${impar.length} valores impares`)
    console.log(`${pos.length} valores positivos`)
    console.log(`${neg.length} valores negativos`)
}

mostra(arr)

console.log('------------------------------------')

// EX 7

function linhas(num) {
    for (let i = 1; i < num * 4; i += 4) {
        console.log(`${i} ${i + 1} ${i + 2} PUM`)
    }
}

linhas(7)

console.log('------------------------------------')

// EX 8

const numbers = [15, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let auxiliar = []
for (let i = 0; i < numbers.length; i++) {
    auxiliar[auxiliar.length] = numbers[i] * 10
}
console.log(auxiliar)

console.log('------------------------------------')

// EX 9

function sum(num) {
    let soma = 0
    for (let i = 1; i <= num; i++) {
        soma += i
    }
    return soma
}

console.log(sum(10))

console.log('------------------------------------')

// EX 10

const notas = [6, 8, 7]

function media(arr) {
    let sum = 0
    for (let i = 0; i < notas.length; i++) {
        sum += notas[i]
    }
    return sum / arr.length
}

console.log(media(notas))

console.log('------------------------------------')

// EX 11

function search(name) {
    for (let i = 0; i < names.length; i++) {
        if (name == names[i]) {
            return `${name} existe no array`
        }
    }
    return `${name} não existe no array`
}

console.log(search('Ticiana'))

console.log('------------------------------------')

// EX 12

// const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]


function find_small(arr) {
    let atualMenor = 0
    let pos = 0
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            atualMenor = arr[i]
        }
        if (atualMenor > arr[i]) {
            atualMenor = arr[i]
            pos = i
        }
        
    }
    console.log('Menor valor: ' + atualMenor)
    console.log('Posição: ' + pos)
}

find_small(numbers)

console.log('------------------------------------')

// EX 13

const obj1 = {
    name: "Juca",
    projects: [
        { name: "Projeto 1", start: "01/02/2021" }, { name: "Projeto 2", start: "03/03/2021" }
    ]
}

console.log(obj1.name)
console.log(obj1.projects[1])
console.log(obj1.projects[0].name)

console.log('------------------------------------')

// EX 14

const myUser = {
    name: "Gustavo",
    age: "25",
    email: "gustavo@email.com"
}

console.log(myUser)

console.log('------------------------------------')

// EX 15

const notas1 = [{ nome: 'Marcos', notas: [10, 7, 2] },
{ nome: 'Michele', notas: [10, 10, 10] },
{ nome: 'Pedro', notas: [3, 10, 9] },
{ nome: 'Andressa', notas: [6, 6, 8] },
{ nome: 'Cristiana', notas: [7, 9, 2] }
]

function media2(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].notas.length; j++)  {
            sum += arr[i].notas[j]
        }
        if ((sum / 3) > 7) {
            console.log(arr[i].nome)
        }
        sum = 0
    }
}

console.log(media2(notas1))

console.log('------------------------------------')

// EX 16

const user = {
    name: "Marília",
    age: 26,
    job: "Dev"
}

console.log(`O valor da propriedade name é ${user.name}`)
console.log(`O valor da propriedade age é ${user.age}`)
console.log(`O valor da propriedade job é ${user.job}`)

console.log('------------------------------------')

// EX 17

const user2 = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' }
]

let result1 = ''
for (i = 0; i < user2.length; i++) {
    if (user2[i].job == 'Dev') {
        result1 += `${user2[i].name} é dev` + '. '
    }
    else {
        result1 += `${user2[i].name} não é dev` + '. '
    }
}

console.log(result1)

console.log('------------------------------------')

// EX 18

const itens = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

function compra(arr) {
    let sum = 0
    for (let i = 0; i < itens.length; i++) {
        sum += (itens[i].valor * itens[i].quantidade)
    }
    return 'R$ ' + sum
}

console.log(compra(itens))

console.log('------------------------------------')

// EX 19

const strings = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']


function change(arr) {
    let aux = ''
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        for (let j = 0; j < word.length; j++) {
            let letter = word[j]

            if (letter == ' ') {
                aux += ''
            }
            else if (letter == '1') {
                aux += 'i'
            }
            else if (letter == '3') {
                aux += 'e'
            }
            else if (letter == '4') {
                aux += 'a'
            }
            else if (letter == '5') {
                aux += 's'
            }
            else if (letter == '0') {
                aux += 'o'
            }
            else {
                aux += letter
            }
        }
        arr[i] = aux
        aux = ''
    }
    console.log(arr)
}

change(strings)

console.log('------------------------------------')

// EX 20

const data = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}


function formata_cpf(cpf) {
    let aux = ''
    for (let i = 0; i < cpf.length; i++) {
        if (i == 3 || i == 6) {
            aux += '.' + cpf[i]
        }
        else if (i == 9) {
            aux += '-' + cpf[i]
        }
        else {
            aux += cpf[i]
        }
    }
    return aux
}

function formata_cel(cel) {
    let aux = ''
    for (let i = 0; i < cel.length; i++) {
        if (i == 0) {
            aux += '(' + cel[i]
        }
        else if (i == 2) {
            aux += ')' + cel[i]
        }
        else if (i == 6) {
            aux += '-' + cel[i]
        }
        else {
            aux += cel[i]
        }
    }
    return aux
}

console.log(formata_cpf(data.cpf))
console.log(formata_cel(data.telefone))