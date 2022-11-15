const cities = ['Barcelona','Madrid','Valencia','Sevilla'];




const data = [
    {name: "Diego", age: 33, group: "A"},
    {name: "Pepe", age: 22, group: "C"},
    {name: "Alex", age: 43, group: "A"},
    {name: "Lola", age: 23, group: "B"},
];

// for (let i = 0; i < data.length; i++) {
//     console.log(data[i].name);
// }

// let longitud = cities.length;
// let count = 0;
// while (longitud--) {
//     console.log(cities[count])
//     count++;
// }

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
const mixedArray = [6,12,'blabla',true,'88',[1,2,3]];
for (let i = 0; i < mixedArray.length; i++) {
    console.log(typeof mixedArray[i]);
}
// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

const listCharacters = ["David Lynch", "Brad Pit", "Jack Nicholson", "Stanley Kubrick"];

listCharacters.forEach(element => {
    console.log(`${element} is a cinema icon`);
});