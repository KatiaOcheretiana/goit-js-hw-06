const inputField = document.querySelector('#validation-input')


inputField.addEventListener('blur', event => {

    const correctLength = parseInt(inputField.getAttribute("data-length"))
    const inputValue = event.currentTarget.value.length
    
    inputField.classList.toggle('valid', correctLength === inputValue);
     inputField.classList.toggle('invalid', correctLength !== inputValue);
})