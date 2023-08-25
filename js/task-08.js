const loginForm = document.querySelector('.login-form')


loginForm.addEventListener('submit', onSendFormHandle)


function onSendFormHandle(event) {

    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
       return alert ('Not all fields are filled!')
    }

    const dataUser = {
        email,
        password
    }
    
    console.log(dataUser);

    form.reset()
}


