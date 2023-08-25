const inputField = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputField.addEventListener('input', (event) => {
    const resultValue = event.currentTarget.value
    outputName.textContent = resultValue.trim() === '' ? 'Anonymous' : resultValue
})