
//apuntar a lo que tenemos en el html
let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');

//escuchar el evento submit del formulario
myForm.addEventListener('submit', onSubmit);

//crear funcion para enviar info con logica condicional
function onSubmit(event) {
    //cancelamos evento por defecto del formulario
    event.preventDefault();
    //filtramos si algun campo esta viacio
    if (nameInput.value === '' || emailInput === '') {
        //activamos el error asignando la clase y modificando el html del elemento msg
        msg.classList.add('error');
        msg.innerHTML = 'Enter all fields of the form...';

        //setTimeout(funcion, tiempo)
        setTimeout(() => { msg.remove() }, 3000)
    } else {
        //creamos el elemento li y lo insertamos con los datos de los inputs
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))

        userList.appendChild(li);

        //limpiamos los valores de los inputs
        nameInput.value = '';
        emailInput.value = '';
    }
}                                                       