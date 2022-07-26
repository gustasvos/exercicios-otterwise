// EX 1

for (let i = 1; i <= 25; i++) {
    console.log(i)   
}

console.log('------------------------------------')

// EX 2

for (let i = 10; i <= 200; i+=10) {
    console.log(i)
}

console.log('------------------------------------')

// EX 3

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let result = ''

for (let i = 0; i < names.length; i++) {
    result += names[i]
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
    const par =  []
    const impar = []
    const pos = []
    const neg = []

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            par.push(arr[i])
        } else {
            impar.push(arr[i])
        }

        if (arr[i] >= 0) {
            pos.push(arr[i])
        } else {
            neg.push(arr[i])
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
    for (let i=1; i<num*4; i+=4) {
        console.log(`${i} ${i+1} ${i+2} PUM`)
    }
}

linhas(7)

console.log('------------------------------------')

// EX 8

const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let auxiliar = []
for (let i=0; i<numbers.length; i++) {
    auxiliar.push(numbers[i]*10)
}
console.log(auxiliar)