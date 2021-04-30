import Product from "../src/products";

export interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product:{name: "motor", price: 10.00}, quantity: 10},
    {product:{name: "sensor", price: 12.50}, quantity: 4},
    {product:{name: "LED", price: 1.00}, quantity: 20} 
]
export function calcInventoryValue(array: InventoryItem[]):number{
    let totalValue:number = 0;
    for (let item of array){
        totalValue += item.product.price * item.quantity;
    }
    return totalValue;
}
let result:number = calcInventoryValue(inventory);
console.log(result);