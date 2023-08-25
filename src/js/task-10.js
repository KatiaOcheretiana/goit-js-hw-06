function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')



createBtn.addEventListener('click', createBoxes)

function createBoxes() {
  const amount = inputNumber.value;
  let boxSize = 30;

  for (let i = 0; i <= amount; i++) {
    boxSize += 10;
    const box = document.createElement('div')
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
  
    boxes.append(box);
  }
}


destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = '';
}