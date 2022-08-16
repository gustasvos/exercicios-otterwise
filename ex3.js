// EX 1

const money = (num) => {
    const notas = [100, 50, 20, 10, 5, 2, 1]
    let result = []

    for (let i = 0; i < notas.length; i++) {
        if (i == 0) {
            result[i] = parseInt(num / notas[i])
            resto = num % notas[i]
        }
        else {
            result[i] = parseInt(resto / notas[i])
            resto = resto % notas[i]
        }
        console.log(result[i] + ' notas de R$ ' + notas[i])
    }
    
}

money(386)

console.log('------------------------------------')

// EX 2

const job = (clt, pj) => {
    fgts = ((clt / 13) * 0.08) * 13
    beneficio = 700 * 13
    clt = ((clt - fgts) + beneficio).toFixed()
    
    if (clt > pj) return clt 
    else return pj
}

console.log(job(28000, 30000))

console.log('------------------------------------')

// EX 3

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

const print_arr = (arr) => {
    let text = ''
    for (let i = 0; i < arr.length; i++) {
        (names[i] != names[names.length - 1]) ? text += names[i] + ', ' : text += names[i]   
    }
    return text
}

console.log(print_arr(names))

console.log('------------------------------------')

// EX 4

const tabuada = (num, lim) => {
    for (let i = 1; i <= lim; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(2, 6)

console.log('------------------------------------')

// EX 5

const valores = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const x = (arr, param) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (param == 'positivo') {
            if (arr[i] >= 0) {
                aux[aux.length] = arr[i]
            }
        }
        else if (param == 'negativo') {
            if (arr[i] < 0) {
                aux[aux.length] = arr[i]
            }
        }
        else if (param == 'par') {
            if (arr[i] % 2 == 0) {
                aux[aux.length] = arr[i]
            }
        }
        else if (param == 'impar') {
            if (arr[i] % 2 != 0) {
                aux[aux.length] = arr[i]
            }
        }
    }
    return `quantidade: ${aux.length} / ${aux}`
}

console.log(x(valores, 'par'))

console.log('------------------------------------')


// EX 6

const values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const mult = (arr, num) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        aux[i] = arr[i] * num
    }
    return aux
}

console.log(mult(values, 2))

console.log('------------------------------------')

// EX 7

const media = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(media(values).toFixed(2))

console.log('------------------------------------')

// EX 8

const find_number = (arr) => {
    let menor = 0
    let maior = 0
    let posmenor = 0
    let posmaior = 0
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            menor = arr[i]
        }
        else if (menor > arr[i]) {
            menor = arr[i]
            posmenor = i
        }
        else if (maior < arr[i]) {
            maior = arr[i]
            posmaior = i
        }
    }
    console.log('Menor valor: ' + menor)
    console.log('Posição: ' + posmenor)
    console.log('Maior valor: ' + maior)
    console.log('Posição: ' + posmaior)

}

find_number(values)

console.log('------------------------------------')

// EX 9

const itens = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

const compra = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += (arr[i].valor * arr[i].quantidade)
    }
    return 'R$ ' + sum
}

console.log(compra(itens))

console.log('------------------------------------')

// EX 10

const dados = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" }
]

const age_asc = (arr) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].idade > arr[j].idade) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    return arr
}

const age_desc = (arr) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].idade < arr[j].idade) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    return arr
}

const salary_asc = (arr) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].salario > arr[j].salario) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    return arr
}

const salary_desc = (arr) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].salario < arr[j].salario) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    return arr
}

const role_asc = (arr) => {
    const roles = { 'estagio': 0, 'junior': 1, 'pleno': 2, 'senior': 3 }
    let aux = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (roles[arr[i].senioridade] > roles[arr[j].senioridade]) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    return arr
}

console.log(age_asc(dados))
console.log(age_desc(dados))
console.log(salary_asc(dados))
console.log(salary_desc(dados))
console.log(role_asc(dados))

console.log('------------------------------------')

// EX 11

const books = [
    { cod: "8568014003", nome: "mais esperto que o diabo", autor: "Napoleon Hill", valor: 24.6, quantidadeVendido: 17675, },
    { cod: "8550801488", nome: "pai rico, pai pobre", autor: "Robert T. Kiyosaki", valor: 42.71, quantidadeVendido: 8992, },
    { cod: "8547001085", nome: "antifragil", autor: "Nassim Nicholas Taleb", valor: 70.99, quantidadeVendido: 1700, },
    { cod: "8595080801", nome: "o investidor inteligente", autor: "Benjamin Graham", valor: 36.3, quantidadeVendido: 8445, },
    { cod: "8539004119", nome: "o poder do hábito", autor: "Charles Duhigg", valor: 48.9, quantidadeVendido: 14581, },
    { cod: "8543102146", nome: "essencialismo", autor: "Greg Mckeown", valor: 36.43, quantidadeVendido: 9730, },
    { cod: "9788539003839", nome: "rápido e devagar", autor: "Daniel Kahneman", valor: 50.93, quantidadeVendido: 5703, },
    { cod: "8551003429", nome: "princípios", autor: "Ray Dalio", valor: 89.9, quantidadeVendido: 3707, },
    { cod: "855717358X", nome: "gestão de alta performance", autor: "Andrew S. Grove", valor: 34.94, quantidadeVendido: 442, },
    { cod: "8550805246", nome: "empresas feitas para vencer", autor: "Jim Collins", valor: 44.2, quantidadeVendido: 824, },
    { cod: "855080455X", nome: "avalie o que importa", autor: "John Doerr", valor: 40.9, quantidadeVendido: 797, }
]

const best_seller_author = (arr) => {
    let maior = []
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            maior = arr[i]
        }
        if (arr[i].quantidadeVendido > maior.quantidadeVendido) {
            maior = arr[i]
        }
    }
    return maior.autor
}

const books_under_price = (arr, price) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(price) > parseInt(arr[i].valor)) {
            aux[aux.length] = arr[i]
        }
    }
    return aux
}

const books_over_price = (arr, price) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(price) < parseInt(arr[i].valor)) {
            aux[aux.length] = arr[i]
        }
    }
    return aux
}

const search_by_name = (arr, name) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (name == arr[i].nome) {
            aux[aux.length] = arr[i]
        }
    }
    return aux
}

const search_by_author = (arr, author) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (author === arr[i].autor) {
            aux[aux.length] = arr[i]
        }
    }
    return aux
}

const search_by_code = (arr, code) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        if (code === arr[i].cod) {
            aux[aux.length] = arr[i]
        }
    }
    return aux
}

const book_storage = (arr) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        aux[aux.length] = arr[i]
    }
    return aux
}

const best_sellers = (arr, quant) => {
    let aux = []
    // let aux2 = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].quantidadeVendido < arr[j].quantidadeVendido) {
                aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
    aux = []
    for (let i = 0; i < quant; i++) {
        aux[aux.length] = arr[i]
    }
    return aux
}

const price_increase = (arr, percent) => {
    for (let i = 0; i < arr.length; i++) {
        increase = arr[i].valor * (percent / 100)
        arr[i].valor = arr[i].valor + increase
    }
    return arr
}

console.log(best_seller_author(books))
console.log('ABAIXO DO PREÇO')
console.log(books_under_price(books, 40))
console.log('ACIMA DO PREÇO')
console.log(books_over_price(books, 60))
console.log('PESQUISA POR NOME')
console.log(search_by_name(books, "mais esperto que o diabo"))
console.log('PESQUISA POR AUTOR')
console.log(search_by_author(books, 'Benjamin Graham'))
console.log('PESQUISA POR CÓDIGO')
console.log(search_by_code(books, '8547001085'))
console.log('ESTOQUE')
console.log(book_storage(books))
console.log(best_sellers(books, 3))
console.log(price_increase(books, 25))

console.log('------------------------------------')

// EX 12

const n = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiplicaPorDez = (num) => {
    num *= 10
    return num
}

const dividePorCinco = (num) => {
    num /= 5
    return num
}

const func_array = (arr, func) => {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        aux[aux.length] = func(arr[i])
        arr[i] = aux[i]
    }
    return arr
}

console.log(func_array(n, multiplicaPorDez))
console.log(func_array(n, dividePorCinco))

console.log('------------------------------------')
