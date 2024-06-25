import { Product, taxtCalculation } from './06-funtion-destructuring';
const shoppingCart: Product[] = [

    {
        description: 'nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 100

    }
]

const [total, tax] = taxtCalculation(
    {
        products: shoppingCart,
        tax: 0.15
    }
)
console.log(total);
console.log(tax);
