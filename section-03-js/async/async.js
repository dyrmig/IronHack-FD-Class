
const sonChecksWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
        const randomNumber = Math.floor(Math.random() * 2);
        const result = possibleOutcome[randomNumber];
        console.log(`The weather is ${result}`);

        //condiciones
        if (result === 'Sunny' || result === 'Rainy') {
            resolve(result);
        } else {
            reject(new Error('I cannot climb the tree'));
        }
    }, 2000)
});


//father will decide async
const fatherWillDecide = async () => {
    const weather = await sonChecksWeather;
    if(weather === 'Sunny'){
        console.log("Let's go fishing!")
    } else {
        console.log("Let's stay home, it's going to rain.")
    }
}

fatherWillDecide();