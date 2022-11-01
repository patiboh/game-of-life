const gridSize = 15;
const container = document.getElementById('container')
const makeGrid = (n) => {
    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    for (c = 0; c < (n * n); c++) {
      let cell = document.createElement("div");
      cell.id = String(c)
      container.appendChild(cell).className = "square";
    }
    squares = document.querySelectorAll('.square');
}

makeGrid(gridSize)


const initGame = () => {
    for(let i = 0; i<50; i++){
        const id = Math.floor(Math.random() * (gridSize * gridSize))
       const element = document.getElementById(id)
       element.classList.add('alive')
    }
}

initGame()


const findNeighbors = (element ) => {
    
} 
const gameOfLife = () => {
    // 1 - If cell has 3 neighbors -> alive
    // 2 - Four or more neighbors -> dead
    // 3 - One or fewer neighbors -> dead
    for(let i = 0; i<gridSize; i++) {
      const el =  document.getElementById(id)
      const neighbors = findNeighbors(el)
      for(let i = 0; i<gridSize; i++) {
        const el =  document.getElementById(id)
        const neighbors = findNeighbors(el)
      }
    }
}