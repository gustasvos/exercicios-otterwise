// EX 13

const products = [{
    cod: '0',
    name: 'Produto 0',
    stock: 5,
    price: 100,
    category: 'Categoria 0'
},
{
    cod: '1',
    name: 'Produto 1',
    stock: 10,
    price: 200,
    category: 'Categoria 1'
}
]


const purchase = (arr, quant, cod) => {
    let cart = []
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (cod == arr[i].cod) {
            if (quant <= arr[i].stock) {
                cart[cart.length] = arr[i]
                total += arr[i].price * quant
                return total
            }
            else return false
        }
        else return false
    }
}

const payment = (total, payOption) => {
    if (payOption == 'boleto') {
        total = total - (total * 0.10)
        return `R$ ${total.toFixed(2)} a vista no boleto`
    }
    else if (payOption == 'debito') {
        total = total - (total * 0.15)
        return `R$ ${total.toFixed(2)} a vista no débito`
    }
    else if (payOption == 'credito') {
        const credit = (parcelas) => {
            const  p = (total / parcelas)
            const juros = total * 0.03
            const ptotal = p + juros
            return `${parcelas} parcelas de R$ ${ptotal.toFixed(2)}`
        }
        return credit(12)
    }
    else return false
}

const value = purchase(products, 2, 0)
// console.log(purchase(products, 2, 0))


console.log(payment(value, 'credito'))