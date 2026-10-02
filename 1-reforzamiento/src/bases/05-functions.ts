
//funcion tradicional
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// funcion de flecha
const greet2 = (name: string): string => {
    return `Hello, ${name}!`;
}


const message = greet("Alice");
const message2 = greet2("Bob");
console.log(message); // Output: Hello, Alice!
console.log(message2); // Output: Hello, Bob!

interface User {
    uid: string;
    username: string;
}


function getUser(): User {
    return{
        uid: 'ABC123',
        username: 'john_doe'
    };

}


const user = getUser();
console.log(user); // Output: { uid: 'ABC123', username: 'john_doe' }

//ejercicio
const user2 = () => {
    return {
        uid: 'ABC123',
        username: 'john_doe'
    };
}
console.log(user2()); // Output: { uid: 'ABC123', username: 'john_doe' }));


const myNumbers:number[] = [1, 2, 3, 4, 5];
// myNumbers.forEach(function(value) => {
//     console.log(value);
// });

myNumbers.forEach((value) => {
   console.log(value);
 })


 const nombreFuncion = (value: string)=>{
    return value;
 }
 console.log(nombreFuncion("Hola Mundo"));


