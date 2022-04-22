for (let i = 0; i < 16; ++i) {
  const currRow = document.createElement('div');
  currRow.className = 'row';

  for (let j = 0; j < 16; ++j) {
    const currDiv = document.createElement('div');
    currDiv.id = i + '-' + j;
    currDiv.className = 'box';
    currDiv.addEventListener('mouseover', () => {
      currDiv.style.backgroundColor = 'red';
    });
    currRow.appendChild(currDiv);
  }

  document.getElementById('grid').appendChild(currRow);
}
