let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value')

decrementBtn.addEventListener('click', onDecrementBtnHendler);

function onDecrementBtnHendler() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementBtnHendler);

function onIncrementBtnHendler() {
    counterValue += 1;
    counter.textContent = counterValue;
}