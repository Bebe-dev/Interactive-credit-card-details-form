const form = document.getElementById('form');
const Name = document.getElementById('name');
const number = document.getElementById('number');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');
const cvc = document.getElementById('cvc');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
  const nameValue = Name.value.trim();
  const numberValue = number.value.trim();
  const expMonthValue = expMonth.value.trim();
  const expYearValue = expYear.value.trim();
  const cvcValue = cvc.value.trim();

  if (nameValue === ""){
    setErrorFor(Name, "Can't be blank")
  } else{
    setSuccessFor(Name);
  }

  if (numberValue === ""){
    setErrorFor(number, "Can't be blank")
  } else if(typeof numberValue !== 'number') {
    setErrorFor(number, "Wrong format, numbers only")
  } else{
    setSuccessFor(number);
  } 

  if (expMonthValue === ""){
    setErrorFor(expMonth, "Can't be blank")
  } else{
    setSuccessFor(expMonth);
  }

  if (expYearValue === ""){
    setErrorFor(expYear, "Can't be blank")
  } else{
    setSuccessFor(expYear);
  }

  if (cvcValue === ""){
    setErrorFor(cvc, "Can't be blank")
  } else{
    setSuccessFor(cvc);
  }
  
  //for(let i = 0; i < numberValue.length; i++) {
  //  if(typeof numberValue !== number){
  //      alert('Wrong format, numbers only')
  // }
  //}
}
    
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'form-val error';

  span.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    formControl.className = 'form-val success';
    span.innerText = "";
}

