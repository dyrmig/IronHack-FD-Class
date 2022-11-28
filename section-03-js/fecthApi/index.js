
// document.querySelector('#getJson').addEventListener('click', getText);
// document.querySelector('#getHere').addEventListener('click', getText);

//funcion para llamar un recurso interno : sample.txt
const getText = () => {
    //llamamos al metodo fetch y le pasamos la url del recurso
    fetch('sample.txt')
    .then((response)=>{
        //convertimos la respuesta en un valor de tipo string
        console.log(response.text());
        return response;
    })
    .then((cleanText) => {
        console.log(cleanText)
    })
    .catch((error) => console.log(error));
}

document.querySelector('#getText').addEventListener('click', getText);

//funcion para llamar un archivo json
const getJson = () => {
    fetch('users.json')
    .then((response) => response.json())
    .then((users) => {
        let userData = "";
        users.forEach(user => {
            userData += `<ul><li>${user.name}</li><li>${user.email}</li><li>${user.id}</li></ul>`
        });
        document.querySelector('#output').innerHTML += userData;
    })
    .catch((error) => console.log(error));
}

document.querySelector('#getJson').addEventListener('click', getJson);


//funcion para acceder a una API externa

const getExternalApiInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => {
        let externalAPI = "";
        res.forEach(post => {
            externalAPI += `<ul><li>${post.title}</li></ul>`
        });
        document.querySelector('#output').innerHTML += externalAPI;
    })
    .catch((error) => console.log(error))
}

document.querySelector('#getHere').addEventListener('click', getExternalApiInfo);

//enviar un mensaje al endPoint de jsonPlaceholder para poder emitir info dentro del request

const addPost = (preventForm) => {
    preventForm.preventDefault();

    //nos traemos los values de los inputs
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    //usamos el fetch() para poder enviar infor al endpoint
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'text/plain, application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .then((response)=> response.json())
    .then((formData)=> console.log(formData))
    .catch((error) => console.log(error));
}

document.querySelector('#addPost').addEventListener('submit', addPost);