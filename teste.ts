// ==> Exemplo 1: Uso de Couchetes
let frutas: string[] = ['maçã', 'banana', 'laranja'];

// ==> Exemplo 2: Array Objetect (objetc Array)
let frutas1:Array<string> = ['maçã', 'banana', 'laranja'];


let usersName: string[] = ["João", "Maria", "Pedro"];
let usersName1: Array<string> = ["Ana", "Carlos", "Beatriz"];

console.trace(usersName)
console.trace(usersName1)

const dataUsers: {
    name: string;
    age: number;
    email: string;
    address: string;
} = {
    name: "João",
    age: 30,
    email: "joao@example.com",
    address: "Rua das Flores, 123"
}

console.trace(dataUsers)