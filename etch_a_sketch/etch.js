

const container = document.querySelector("#container")
container.style.border = "2px solid Red"
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.width = "346px"
container.style.height = "346px"

for(let i = 0 ; i < 256

     ; i++ ) {
  let grid=  document.createElement("div")
  grid.style.border = "1px solid Red"
 grid.style.width = "20px"
    grid.style.height = "20px"
    container.appendChild(grid)
    
}
