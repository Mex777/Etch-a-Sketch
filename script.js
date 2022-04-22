const maxWidth = 512;
const maxHeight = 512;
const grid = document.getElementById('grid');

const makeGrid = (size) => {
  for (let i = 0; i < size; ++i) {
    const currRow = document.createElement('div');
    currRow.className = 'row';

    for (let j = 0; j < size; ++j) {
      const currDiv = document.createElement('div');
      currDiv.id = i + '-' + j;
      currDiv.className = 'box';
      currDiv.style.width = maxWidth / size;
      currDiv.style.height = maxHeight / size;
      currDiv.addEventListener('mouseover', () => {
        currDiv.style.backgroundColor = 'red';
      });
      currRow.appendChild(currDiv);
    }

    grid.appendChild(currRow);
  }
};

makeGrid(50);

const reset = () => {
  const rows = grid.childNodes;
  Array.from(rows).forEach((node) => grid.removeChild(node));
  let size = prompt('Size', 'A value between 1 and 100');
  while (size < 1 || size > 100) {
    size = prompt('Size', 'A value between 1 and 100');
  }
  makeGrid(size);
};
