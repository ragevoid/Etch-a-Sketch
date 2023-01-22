let color = 'black'

//Function that hides the first div and shows the playDiv
  document.getElementById("startButton").onclick = function() {
  document.getElementById("firstDiv").style.display = "none";
  document.getElementById("playDiv").style.display = "flex";
  createGrid(16);
} 

//Function that creates the squares in the grid
function createGrid(size){
  let grid = document.querySelector('.gridContainer')
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size*size;

    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener('mouseover', changeColors)
      square.style.backgroundColor = 'white';
      grid.insertAdjacentElement('beforeend', square)
}
}

//Function that determinates the amount of saquares in the div
function changeSize(valueInput){
  createGrid(valueInput);
  console.log (valueInput)
  let valuePrint = document.querySelector('.valuePrint')
  valuePrint.textContent = `${valueInput}`
}

//Function that changes the color of the square 
function changeColors(){
    if (color === "random"){
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  }
  else{
        this.style.backgroundColor = color  
    }
}

//Function that takes the colorImput
function ChooseColorButton(colorImput){
  color = colorImput;
}


