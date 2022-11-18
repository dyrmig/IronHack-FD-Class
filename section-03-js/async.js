function hola(){
    alert('hola');
}

//setTimeout(hola, 4000)

function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();

    console.log(time);

    setTimeout(showTime, 3000);
}

//showTime()


let count = 0;
function increaseCount(){
    count += 1;
    console.log(count);
}
let id = setTimeout(increaseCount, 2000);
//paramos el setTimeout:
clearTimeout(id)


//callbacks

function greetCallback(name){
    console.log(`Hola ${name}`);
}

//greetCallback('Dmitri')

function greetCallbackTwo(name, callback, hora) {
    console.log(`Hola ${name}`);
    callback(hora)
}

function callMe(hora) {
    console.log(`llamame a esta hora: ${hora}`);
}

greetCallbackTwo('Dmitri', callMe, '12:00');



// PROMESAS
let promise = new Promise(function (resolve, reject){

});

//----------------------------------------

let promiseStatus = true;
let countValue = new Promise((resolve, reject) => {
    if(promiseStatus){
        resolve('There are oreos in the kitchen');
    } else {
        reject('there are no oreos in the kitchen')
    }
});
//console.log(countValue);



// PROMISES CHAINING - ENCADENAMIENTO .THEN()

let countValue2 = new Promise((resolve, reject) => {
    resolve('Promise is resolved');
});
//estos .THEN se ejecutan si la promesa esta RESOLVED

countValue2.then(function successValue(result){
    console.log(result);
}).then(function successValue1(){
    console.log('Hemos llamado varias veces a funciones multibles con la expansion de la promesa .then()');
});

// PROMISES CHAINING - ENCADENAMIENTO .CATCH()

let countValue3 = new Promise((resolve, reject) => {
    resolve('Promise is resolved');
});

countValue3.then(function successValue(result){
    console.log(result);
}).catch(function errorValue(result){
    console.log(result);
});

// PROMISES CHAINING - ENCADENAMIENTO .FINALLY()

let countValue4 = new Promise((resolve, reject) => {
    resolve('promesa resuelta');
})
//apuntamos a countValue4 y le encadenamos el .finally()
countValue4.finally(function greet(){console.log('este codigo de ejecuta independientemente del resolve o reject')});


//ASYNC / AWAIT


const myAsyncFunction = async () => {
    console.log('my first async function');
    return Promise.resolve();
};
myAsyncFunction();

//ejemplo async extended

const myAsync2 = async () => {
    console.log('my second async function');
}
myAsync2().then((result) => console.log(result));



//ejemplo async extended con promesa async y await
let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise has been resolved after 4 secons')
    }, 4000)
})

//vamos a crear la funcion asyncrona
const asyncFunc = async () => {
    //esperamos hasta que la promesa se resulva despues de 4 segundos
    let result = await myPromise;
    console.log(result);
    console.log('esperamos 4 segundos para ver esto');
};

asyncFunc();

//ERROR HANDLING

let promiseWithCatch = new Promise((resolve, reject) => {
    setTimeout(()=>reject('promesa trycatch no se ha resuelto'), 4000)
})

const myAsyncFuncTry = async () => {
    try {
        let result = await promiseWithCatch;
        console.log(result);
    } catch (error) {
        console.log(`esto es el error: ${error}`);
    }
}
//calling the function
myAsyncFuncTry();