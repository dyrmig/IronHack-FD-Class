let myBio = {
    firstName: "Dmitri",
    lastName: "Sidorov Manko",
    citiesIlIvedIn: ["Vologda","Buenos Aires","Barcelona"],
    age: 34,
    dob: "26/10/1988",
    drinkAlcohol: true
}

let hobbies
// hobbie = "hacer senderismo"
// console.log(`Hola mi nombre es ${myBio.firstName} tengo ${myBio.age} y me gusta ${hobbie}`);
// hobbie = "mirar peliculas"
// console.log(`Hola mi nombre es ${myBio.firstName} tengo ${myBio.age} y me gusta ${hobbie}`);
// hobbie = "hacer fotos"
// console.log(`Hola mi nombre es ${myBio.firstName} tengo ${myBio.age} y me gusta ${hobbie}`);
// hobbie = "viajar"
// console.log(`Hola mi nombre es ${myBio.firstName} tengo ${myBio.age} y me gusta ${hobbie}`);
// hobbie = "tomar vino"
// console.log(`Hola mi nombre es ${myBio.firstName} tengo ${myBio.age} y me gusta ${hobbie}`);

//const numb = prompt("Enter a number: ");

// if(numb > 0){
//     console.log("El numero es positivo");
// } else {
//     console.log("EL numero es negativo")
// }




// <= 5 Gratis
// < 15 20% descuento
// >= 15 y <=60 pagan regular
// > 60 tine 40%
const edadCliente = parseInt(prompt("Introduce tu edaad: "));

if(edadCliente <= 5){
    alert("gratis");
} else if(edadCliente < 15){
    alert("20% de descuento");
} else if(edadCliente>= 15 && edadCliente <= 60){
    alert("precio regular");
} else if(edadCliente > 60){
    alert("descuento 40%");
}


let country = prompt("Ingresa el pais").toLowerCase();

switch (country) {
    case 'spain':
    case 'germany':
            alert(`${country} is in Europe`)
        break;
    case 'argentina':
            alert(`${country} is in America`)
        break;
    default:
        alert("Country not found")
        break;
}