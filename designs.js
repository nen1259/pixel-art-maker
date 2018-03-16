// Select color input
const pickedColor = document.getElementById("colorPicker").value;

// Select table
const tbl = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Select size input
  const gridHeight = document.getElementById("inputHeight").value;
  const gridWidth = document.getElementById("inputWeight").value;

  if(gridHeight > 100 || gridWidth > 100){
    alert("Maximum Height/Width is 100")
    return;
  }

  //remove existing rows from table
  for(let i = tbl.rows.length; i > 0 ; i--) {
    tbl.deleteRow(i - 1);
  }

  // build rows and columns and append to table
  for(let r=0;r<gridHeight;r++){
    let tr = document.createElement("TR");
    tbl.appendChild(tr);
    for (let c=0; c<gridWidth; c++){
      let td = document.createElement("TD");
      tr.appendChild(td);
    }
  }
}

// prevent form submitting and call the make grid function instead
document.querySelector("#send").addEventListener("click", function(evt){
  evt.preventDefault();
  makeGrid();
})

// add click event listener on table
document.querySelector("#pixelCanvas").addEventListener("click",respondToTheClick);

function respondToTheClick(evt){
  if(evt.target.nodeName == "TD"){
    let tableCell = evt.target;
    tableCell.style.backgroundColor=document.getElementById("colorPicker").value;
    }
  }

function respondToTheInput(evt){
  // TODO

}
