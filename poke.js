//Values
let name = document.querySelector("#name");
let type = document.querySelector("#poketype");
let button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(name.value, poketype.value);
});
