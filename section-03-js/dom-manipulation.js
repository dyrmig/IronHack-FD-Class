//console.log(document.querySelector('.container').lastElementChild);

//crear elementos
const createElement = document.createElement("div");
createElement.innerHTML = "Hola"
console.log(createElement);

//insertar elemento creado en js al doc del html con metodo appendChild

let parentElement = document.querySelector(".container").appendChild(createElement);

//agregar clases a elementos html

document.querySelector(".container").className = "border";

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
let newPelement = document.createElement("p");
document.getElementById('insert-p').appendChild(newPelement);
// 2º - Crea un <div id="nested"></div> desde código
let newDivElement = document.createElement("div");
newDivElement.setAttribute('id','nested')
document.querySelector('body').appendChild(newDivElement);


//asignamos un boton a una variable
const newButton = document.querySelector('#master');

const nombreDeLaFunsion = () =>newButton.classList.add("red-btn");

newButton.addEventListener('click', nombreDeLaFunsion);

// 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>
    //creamos boton y lo modificamos:
        let nuevoBoton = document.createElement('button');
        nuevoBoton.innerHTML = 'Insertar p'
        nuevoBoton.setAttribute('id','toggle-btn');
    //insertamos el boton en el div con id insert-p
        document.querySelector('#insert-p').appendChild(nuevoBoton)
    //creamos el p para insertar y lo modificamos
        let p = document.createElement('p');
        p.innerHTML = 'Esto es el nuevo p elemento';
    //creamos funcion que inserta el p en el div
        const insertP = () => document.querySelector('#insert-p').appendChild(p);
    //asignamos el evento al boton vinculado con la funcion
        document.querySelector('#toggle-btn').addEventListener('click', insertP);

// 2 - Crea un elemento de color verde y un botón para togglear el color de verde a rojo.
    //creamos un div lo insertamos y le asignamos una clase
    let divVerdeRojo = document.createElement('div');
    divVerdeRojo.classList.add('verde');
    document.querySelector('body').appendChild(divVerdeRojo);

