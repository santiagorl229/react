
const charactersNames = ['Ironman', 'Spiderman', 'Hulk'];    

const [, , hulk] = charactersNames;
console.log({hulk});

const returnArrayFn = ()=> {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayFn();
console.log({letters, numbers});