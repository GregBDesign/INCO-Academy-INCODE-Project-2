const form = document.querySelector('form')
const submit = document.querySelector('.form-btn')

const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

//remove require attribute

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(emailReg.test(form[3].value))
    validateForm(form)
    // displayForm()
})

const validateForm = (values) => {
    emailReg.test(values[3].value) ? null : values[3].setAttribute('placeholder', 'Please enter valid email')  
}

const displayForm = () => {
    let phoneEntry
    form[2].value === "" ? phoneEntry = null : phoneEntry = form[2].value
    console.log(`name: ${form[1].value} ${form[0].value}\nphone: ${phoneEntry}\nemail: ${form[3].value}\nmessage: ${form[4].value}`) 
}