const btn: HTMLElement = document.querySelector('button');
const ul: HTMLElement = document.querySelector('ol');
const input: HTMLInputElement = document.querySelector('input');

function addItem() {
  const li: HTMLElement = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = '';
}

btn.addEventListener('click', () => {
  addItem();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});
