console.log('Add validation!');

const formBoxes = document.querySelector("#parking-form");

formBoxes.addEventListener('submit', function (e) {
  e.preventDefault() 
  validation()
})


// it was working before now it is not//
function validation(){
  const nameSpace = document.querySelector("#name");
  let nameField = nameSpace.value;
if (nameField === ""){
    nameSpace.parentElement.classList.add("input-invalid");
    nameSpace.parentElement.classList.remove("input-valid");
}else{
    nameSpace.parentElement.classList.add("input-valid");
    nameSpace.parentElement.classList.remove("input-invalid");
  }
}





function validation(){
  const year = document.createElement('p')
  const carYear = document.querySelector("#car-year");
  cosnt carMake = document.querySelector("#car-make");
  cosnt carModel = document.querySelector("#car-model");
  let carYearField = carYear.value;
  let carMakeField = carMake.value;
  let carModelField = carModel.value;
  if 
year.textContent = 'Required'
carYear.parentElement.appendChild(year)
if (carYear.value > 1900 || carYear.value <= curentYear || carYear.value.match(/^[0-9]+$/)) {
carYear.parentElement.classList.remove('input-invalid')
carYear.parentElement.classList.add('input-valid')
carYear.parentElement.removeChild(year)
} else {
carYear.parentElement.classList.remove('input-valid')
carYear.parentElement.classList.add('input-invalid')
year.textContent = 'Only between 1900-' + curentYear
carYear.parentElement.appendChild(year)
}
}




//to revisit//should I add a conso log?//
function validation(){
  const make = document.querySelector("#car-make");
  let carField = make.value;
if (carSpace){
    carSpace.parentElement.classList.add("input-invalid");
    carSpace.parentElement.classList.remove("input-valid");
}else{
    carSpace.parentElement.classList.add("input-valid");
    carSpace.parentElement.classList.remove("input-invalid");
  }
