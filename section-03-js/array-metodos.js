const arr = [5,2,7,4,8];
const animals = ["dog","cat","lizard","tiger","sheep"];

const mapped = arr.map((param) => param + 20);
//console.log(mapped);

const newAnimals = animals.map((animalsPerArray) => {
    const storage = animalsPerArray;
    //console.log(`each animal of the array is: ${storage}`);
    return storage;
});

//Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :)

let moddArray = (arr) => {
    arr.push(arr[1]);
    arr.unshift(arr[0]);
    return arr;
}

console.log(moddArray([0,1,2,3,4]));