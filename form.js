const form = document.querySelector('form')
const surname = document.querySelector('#surname')
const firstname = document.querySelector('#firstname')
const telephone = document.querySelector('#telephone')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const span = document.querySelectorAll('.form-required')
const inputs = document.querySelectorAll('input')

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalbg = document.querySelector('#modal-bg')
const closeModal = document.querySelector('#modal-btn')

//If JS has loaded the HTML validations are removed
form.setAttribute('novalidate', true)

//Validation regexs
const nameReg = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/
const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneReg = /^[^a-z]([\d]{1,})[^a-z]$/
const messageReg = /^[^<][\s\S]+$/

//Variable to test if validation tests are passed and an array of error messages
let tests = false
const errorMsg = ["Ce champ est requis", "Cette information est invalide - veuillez mettre à jour"]

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
    validateForm(messageReg, message) ? confirmForm() : null
})

//If an input has no value an error is displayed and if the information doesn't pass validation an error is issued above the input
function validateForm(regex, input) {
    if (input.value === "" && input.id !== "telephone") {
        input.setAttribute('placeholder', errorMsg[0])
        return tests = false
    } else if (!regex.test(input.value) && input.value !== "") {
        input.parentNode.childNodes[1].childNodes[1].innerText = errorMsg[1]
        return tests = false
    } else {
        return tests = true
    }
}

//If all inputs are valid the 'tests' variable is set to true and the next function is called
const confirmForm = () => {
        console.log(`Name: ${firstname.value} ${surname.value}\nTelephone: ${telephone.value}\nEmail: ${email.value}\nMessage:${message.value}`)
        modal.classList.remove('hidden')
        modalbg.classList.remove('hidden')
        body.classList.add('modal-active')
}

//Close the modal and clear the inputs
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
    modalbg.classList.add('hidden')
    body.classList.remove('modal-active')
    for(let input of inputs){
        input.type != 'submit' ? input.value = "" : null
    }
    message.value = ""
})