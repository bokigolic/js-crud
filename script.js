console.log("Hello Boki")

const form = document.getElementById("form");
const name = document.getElementById("name");
const quantity = document.getElementById("quantity");


// State

let inventory = [];


// functions
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submit")

  const formData = {};
  formData.name = name.value;
  formData.quantity = quantity.value;
  console.log(formData)
  //add formData in state (inventory)
  inventory.push(formData)
  console.log("State inventory", inventory)

}


//init funcion

const init = () => {
  console.log("Initializations...");

  // add event listener

  form.addEventListener("submit", handleSubmit)


  console.log("Initialized");
};






//start script

init();




