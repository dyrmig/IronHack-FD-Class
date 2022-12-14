// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction('mashedPotatoes', 1, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    })
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 1)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 2)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 3)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 4)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 5)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 6)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  return obtainInstruction('steak', 7)
}).then((paso)=>{
  document.querySelector('#steak').innerHTML  += `<li>${paso}</li>`;
  document.querySelector('#steakImg').removeAttribute('hidden');
  return obtainInstruction('steak', 8)
})

// Iteration 3 using async/await
// ...
const makeBroccoli = async () => {
  let paso = await obtainInstruction('broccoli', 0);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 1);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 2);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 3);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 4);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 5);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  paso = await obtainInstruction('broccoli', 6);
  document.querySelector('#broccoli').innerHTML  += `<li>${paso}</li>`;
  document.querySelector('#broccoliImg').removeAttribute('hidden');
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
Promise.all([
    obtainInstruction('brusselsSprouts', 0),
    obtainInstruction('brusselsSprouts', 1),
    obtainInstruction('brusselsSprouts', 2),
    obtainInstruction('brusselsSprouts', 3),
    obtainInstruction('brusselsSprouts', 4),
    obtainInstruction('brusselsSprouts', 5),
    obtainInstruction('brusselsSprouts', 6),
    obtainInstruction('brusselsSprouts', 7)
  ]).then(values => {
  values.forEach(element => {
    document.querySelector('#brusselsSprouts').innerHTML  += `<li>${element}</li>`;
    console.log(element);
  });
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
});