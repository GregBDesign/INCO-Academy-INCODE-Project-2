const form = document.querySelector('form')
const surname = document.querySelector('#surname')
const firstname = document.querySelector('#firstname')
const telephone = document.querySelector('#telephone')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const span = document.querySelectorAll('.form-required')

//If JS has loaded the HTML validations are removed
form.setAttribute('novalidate', true)

//Validation regexs
const nameReg = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/
const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneReg = /^[^a-z]([\d]{1,})[^a-z]$/
const messageReg = /^[^<][\s\S]+$/

//Variable to test if validation tests are passed and an array of error messages
let tests = false
const errorMsg = ["This field is required", "This information is invalid - please update"]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Remove any previous errors from the span during form resubmission
    for(let spans of span) { 
        spans.innerText = "" 
    } 
    //Perform validations on each input
    validateForm(nameReg, surname) &&
    validateForm(nameReg, firstname) &&
    validateForm(phoneReg, telephone) &&
    validateForm(emailReg, email) &&
    validateForm(messageReg, message) ? confirm() : null
})

//If an input has no value an error is issued and if the information doesn't pass validation an error is issued about the input area
function validateForm(regex, input) {
    if(input.value === "" && input.id !== "telephone"){
        input.setAttribute('placeholder', errorMsg[0])
        return tests = false
    } else if(!regex.test(input.value) && input.value !== ""){
        input.parentNode.childNodes[1].childNodes[1].innerText = errorMsg[1]
        return tests = false
    } else {
        return tests = true
    }
}

//If all inputs are valid the 'tests' variable is set to true and the next function is called
const confirm = () => {
    tests ? console.log(`Name: ${firstname.value} ${surname.value}\nTelephone: ${telephone.value}\nE-Mail: ${email.value}\nMessage: ${message.value}`) : null
}