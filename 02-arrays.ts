//Cara 1: tipe[]
let numbers: number[] = [1,2,3,4,5];
let names: string[] = ["Lupitasari", "Marito", "Oktolina", "Silitonga"]

//Cra 2: Array[]
let scores: Array<number> = [1, 2, 3, 4];
let fruits: Array<string> = ["Apple", "Orange", "Banana"];

//Array dengan multiple types (union type)
let mixed: (string | number) [] = [1, "two", 3, "four"];

//Array methods
numbers.push(6); // Menambah element
names.pop(); // Menghapus elemet terakhir

//Iterasi array
numbers.forEach((num) =>{
    console.log("Number: ", num);
});

// Array napping
const doubledNumbers = numbers.map((num) => num *2);
console.log("Doubled numbers: ", doubledNumbers);

export {};