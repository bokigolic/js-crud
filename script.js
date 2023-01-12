console.log("Hello Boki")

const form = document.getElementById("form");
const name = document.getElementById("name");
const quantity = document.getElementById("quantity");
const inventoryContainer = document.getElementById("inventory-container");


// State

let inventory = [];


// functions (work with data)
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

  // After state update, we need to rerender screen
  // we just inform app that state is changed
  stateIsChanged();
};

// view (work wiht csreen, display, render, etc) functions

const renderState = () => {
  // drowe all state on screen
  let template = "";
  inventory.forEach((item, index) => {
    template += '<div>' + item.quantity    
      + "x " + item.name + '</div>';


  })

  //render template on screen 
  inventoryContainer.innerHTML = template;

};

// other functions

const stateIsChanged = () => {
  // After state update, we need to rerender screen

  renderState();

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




