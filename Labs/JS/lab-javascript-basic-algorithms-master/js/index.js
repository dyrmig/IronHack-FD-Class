console.log("I'm ready!");
// Iteration 1: Names and Input
//
let hacker1 = "Dmitri";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alexander";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

// const arr = [hacker1, hacker2];

// console.log([hacker1, hacker2].sort()[0]);

if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
} else if([hacker1, hacker2].sort()[0]===hacker1){
    console.log("The driver's name goes first.");
} else if ([hacker1, hacker2].sort()[0]===hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}

// Bonus 1:

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis aliquet posuere. Aliquam laoreet, velit eu pharetra ultricies, risus urna mollis orci, sodales eleifend ligula nibh eu sapien. Integer ultricies erat neque, cursus viverra ex ornare eget. Vestibulum pretium tortor mi, at hendrerit dolor viverra et. Praesent vitae velit vel sapien pulvinar finibus et sed magna. Sed sed luctus nunc. Duis luctus mi ac massa suscipit, eu gravida augue iaculis. Sed sed suscipit leo. Curabitur ut magna iaculis, aliquam purus in, eleifend orci. In euismod eros tellus, quis facilisis elit pulvinar vitae. Sed ac euismod diam. Praesent lobortis posuere vestibulum. Aliquam venenatis turpis quis augue malesuada blandit. Integer sit amet auctor risus. Praesent quis purus a ipsum congue mollis ac id eros. Duis sed tellus urna. Integer euismod dolor vel sagittis pulvinar. Maecenas ac euismod justo. Fusce nec magna eu massa laoreet blandit. Maecenas vulputate, urna ut ultrices placerat, nulla ante dapibus sapien, pellentesque consequat lectus lectus consequat massa. Sed vel elit imperdiet massa rutrum mattis non quis sem. Aliquam blandit lacinia varius. Donec gravida blandit felis non dapibus. Quisque vel arcu nec orci luctus pharetra. Fusce quis quam ac nunc pellentesque varius ut sit amet turpis. Mauris vestibulum tellus dui. Integer efficitur, urna vel feugiat euismod, elit enim volutpat enim, vitae dictum massa risus a tellus. Sed vehicula ante sed libero ultricies euismod. Nunc interdum tempor erat, vel congue dolor ullamcorper quis. Proin eu mattis neque. Integer eu elementum mi. Suspendisse aliquet imperdiet efficitur."

//limpiamos el lorem de puntuaciones
let cleanLorem = lorem.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let arrLorem = cleanLorem.split(' ');
console.log(arrLorem.length);
let etCounter = 0;
for(let i=0; i<arrLorem.length; i++){
    if(arrLorem[i]==='et'){
        etCounter++
    }
}
console.log(etCounter);

//Bonus 2:

function checkIfPalindrome(string){
    let original = string.split(" ").join("").toLowerCase();
    let reversed = original.split('').reverse().join('');
    if(original===reversed){
        console.log("Es un palindrome");
    } else {
        console.log("No es un palidromo");
    }
}

checkIfPalindrome("dabale arroz a la zorra el abad");