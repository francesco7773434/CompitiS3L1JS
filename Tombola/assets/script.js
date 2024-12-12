const boardContainer = document.querySelector("#tombolaBoard");
const drawnNumberDisplay = document.querySelector("#drawnNumber");

const cells = [];
for(let i = 1; i <= 76; i++){
    const cell = document.createElement("div");
    cell.innerText = i;
    cell.className = "cella";
    
    cells.push(cell);
    boardContainer.appendChild(cell)
};


function drawNumber(){
    const drawnNumber = Math.floor(Math.random() *76) +1;
    drawnNumberDisplay.innerText = `Numero estratto: ${drawnNumber}`;

    cells.forEach(cell =>{
        if(parseInt(cell.innerText) === drawnNumber){
            cell.style.backgroundColor = "#FFD700";
        };
    });
}
;
const drawButton = document.querySelector("#drawNumber");
drawButton.addEventListener("click", drawNumber);