const myArrays: number[] = [1, 2, 3, 4, 5];

myArrays.push(6);
console.log(myArrays);

const myArrays2 = [...myArrays];
myArrays2.push(7);

console.log({myArrays, myArrays2});