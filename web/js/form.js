window.addEventListener('load', ()=> {
    const form = document.getElementById('myForm')
    const name = document.getElementById('name')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const cellphone = document.getElementById('cellphone')
    const city = document.getElementById('city')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validateInputs()
    })

    const validateInputs = ()=> {
        const nameValue = name.value.trim()
        const lastNameValue = lastName.value.trim()
        const emailValue = email.value.trim()
        const cellphoneValue = cellphone.value.trim()
        const cityValue = city.value.trim()
        const subjectValue = subject.value.trim()
        const messageValue = message.value.trim()

        if(!nameValue){
            validateFail(name, 'Ingresa tu nombre')
        }else{
            validateOk(name)
        }

        if(!lastNameValue){
            validateFail(lastName, 'Ingresa tu apellido')
        }else{
            validateOk(lastName)
        }

        if(!emailValue) {
            validateFail(email, 'Ingresa tu email')            
        }else if(!validateEmail(emailValue)){
            validateFail(email, 'Ingresa un email válido')
        }else{
            validateOk(email)
        }

        if(!cellphoneValue) {
            validateFail(cellphone, 'Ingresa tu celular')            
        }else{
            validateOk(cellphone)
        }

        if(!cityValue){
            validateFail(city, 'Ingresa tu ciudad')
        }else{
            validateOk(city)
        }

        if(!subjectValue){
            validateFail(subject, 'Ingresa un asunto')
        }else{
            validateOk(subject)
        }

        if(!messageValue){
            validateFail(message, 'Ingresa tu consulta')
        }else{
            validateOk(message)
        }
    }

    const validateFail = (input, msje) => {
        const formControl = input.parentElement
        const advise = formControl.querySelector('small')
        advise.innerHTML = msje

        formControl.className = 'contact__form fail'
    }

    const validateOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'contact__form ok'
    }

    const validateEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})