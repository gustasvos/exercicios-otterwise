// EX 1

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

console.log(...names)

console.log('------------------------------------')

// EX 2

const v = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

const find_num = (num, arr) => {
    const a = arr.find(e => e == num)
    if (a) return a; else return false
}

console.log(find_num(3, v))

console.log('------------------------------------')

// EX 3

const positives = v.filter(e => e > 0)
console.log(positives)

console.log('------------------------------------')

// EX 4

const notas = [6, 8, 7]

const media = notas.reduce((j, k, i) => {
    let sum = j + k
})

console.log(media)