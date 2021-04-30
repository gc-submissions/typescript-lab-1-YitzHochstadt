export interface Mountain {
    name:string;
    height:number;
}
let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19431},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310},
];
export function findNameOfTallestMountain(array: Mountain[]):string{
    let tallestMountain: Mountain = {name: "", height: 0};
    for (let mountain of array){
        if (mountain.height >= tallestMountain.height){
            tallestMountain = mountain;
        }
    }
    return tallestMountain.name;
}

let result:string = findNameOfTallestMountain(mountains);
console.log(result);