export interface Product {
    description: string;
    price: number;
}
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}
const shoppingCart = [phone, tablet];
const tax = 0.15


interface TaxtCalculation {
    tax: number;
    products: Product[];
}
export function taxtCalculation(options: TaxtCalculation): number[] {

    let total = 0;
    options.products.forEach(({price}) => {
        total += price;
    });

    return [total, total * options.tax]
}

const [total, Totaltax] = taxtCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', Totaltax);
