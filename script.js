console.log("Hello Boki")

const form = document.getElementById("form");
const name = document.getElementById("name");
const quantity = document.getElementById("quantity");

// functions
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submit")
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