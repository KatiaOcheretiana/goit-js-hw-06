const formControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

formControl.addEventListener('input', onTextChangeHandle)

function onTextChangeHandle(event) {
    text.style.fontSize = event.currentTarget.value + 'px';
}