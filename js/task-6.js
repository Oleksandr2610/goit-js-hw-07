function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // clear previous boxes

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }