export default interface Product{
    name: string;
    price: number;
}
let products: Product[] = [
    {name: "jollyRanchers", price: 6},
    {name: "twizzlers", price: 4},
    {name: "mike&ikes", price: 5},
    {name: "chewingGum", price: 2},
    {name: "sourLovers", price: 8}
];
export function calcAverageProductPrice(array: Product[]):number{
    let totalPrice:number = 0;
    let avgPrice:number = 0;
    for (let product of array){
        totalPrice += product.price;
        avgPrice = totalPrice/array.length;
    }
    return avgPrice;
}
let result:number = calcAverageProductPrice(products);
console.log(result);