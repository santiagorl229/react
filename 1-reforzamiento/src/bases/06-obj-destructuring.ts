const person = {
   name: 'Tony',
   age: 45,
   key: 'Ironman'
}


const {name, age, key} = person; //destructuracion

// const name = person.name
// const age = person.age
// const key = person.key

console.log(name, age, key);

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext= ({key, name, age, rank}: Hero) =>{
    
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    }
}

const {rank, keyName} = useContext(person);
console.log(rank, keyName);
