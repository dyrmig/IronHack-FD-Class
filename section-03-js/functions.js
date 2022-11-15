let noArguments = () => console.log("hola");

//noArguments();

let oneArgument = (nombre) => console.log(`hola ${nombre}`);

//oneArgument("Dmitri");


let age = 18;
let welcome =
    age < 18
        ? () => console.log("No puedes beber alcohol")
        : () => console.log("Puedes beber alcohol");

//welcome();

let suma = (a, b) => {
    let result = a + b;
    return result;
}
let resultOfSum = suma(5, 88);
//console.log(resultOfSum);

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.

let typeOfcity = {
    livesInCity: true,
    livesInTown: false
}

// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

let dondeVive = (nombre, edad, typeCity) => {
    let tCity;
    if(typeCity.livesInCity===true){
        tCity = 'ciudad';
    } else {
        tCity = 'pueblo';
    }
    return `${nombre} tiene ${edad} y vive en ${tCity}`;
}

//console.log(dondeVive('Dmitri',34, typeOfcity));

let dondeViveCase = (nombre, edad, typeCity) => {
    let tCity;

    switch (true) {
        case typeCity.livesInCity:
            tCity = 'ciudad';
            break;
        case typeCity.livesInTown:
            tCity = 'pueblo';
            break;   
        default:
            break;
    }

    return `${nombre} tiene ${edad} y vive en ${tCity}`;
}

console.log(dondeViveCase('Dmitri',34, typeOfcity));