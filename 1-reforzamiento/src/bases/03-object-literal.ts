interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tonny',
    lastName: 'Stark',
    age: 45,

};


console.log(ironman);

// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Tony';
// spiderman.lastName = 'Stark';
// spiderman.age = 22;

// console.log(ironman, spiderman);