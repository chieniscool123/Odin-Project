

let size =  16// parseInt(prompt("Enter the size of your sketch book (Max = 100x100): "));


const container = document.querySelector("#container")


container.style.border = "1px bold solid red"
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.justifyContent = "center"

container.style.width = "500px"
container.style.height = "600px"
container.style.padding = "120px 30px"
container.style.backgroundColor = "Red"

const tools_box = document.createElement("div")
tools_box.style.display = "flex"
tools_box.style.width = "500px"
tools_box.style.padding = "10px 10px"
tools_box.style.justifyContent = "space-evenly"



const eraser_btn = document.createElement("button")
const pencil_btn = document.createElement("button")
const colorPicker = document.createElement('input')
const slider = document.createElement("div")
const size_slide = document.createElement('input')
const size_value = document.createElement('span')
eraser_btn.classList.add("tools");
pencil_btn.classList.add("tools");
colorPicker.classList.add("picker");



slider.style.display = "flex"
slider.style.flexDirection = "column"
slider.style.alignItems = "center"

slider.appendChild(size_slide)
slider.appendChild(size_value)

eraser_btn.innerHTML = '<img src="./images/eraser_black.png" height="20px" width="20px"/>';
pencil_btn.innerHTML = '<img src="./images/pencil_black.png" height="20px" width="20px"/>';
colorPicker.type = 'color';
colorPicker.value = '#3a3a3a';
size_slide.type = "range"
size_slide.value = 16;  
size_slide.min = 1;     
size_slide.max = 100;    
size_value.textContent = "16 x 16"
size_slide.addEventListener('input', () => {
  size_value.textContent = `${size_slide.value} x ${size_slide.value}`;
  container.innerHTML = ""
  hw()
});

tools_box.appendChild(colorPicker)
tools_box.appendChild(eraser_btn)
tools_box.appendChild(pencil_btn)

function hw (){
for(let i = 0 ; i < size_slide.value*size_slide.value ; i++ ) {
  
  let grid=  document.createElement("div")
  grid.style.border = "1px solid Red"
   grid.style.width = `calc(100% / ${size})`
    grid.style.height = `calc(100% / ${size})`
    grid.style.backgroundColor = "white"
    
    container.appendChild(grid)

    pencil_btn.addEventListener('click', () =>  grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = colorPicker.value ;
    }))

    eraser_btn.addEventListener('click', () =>  grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "yellow" ;
    }))
    
    container.appendChild(tools_box)
    container.appendChild(slider)
    
}

}

hw()
container.appendChild(tools_box)
container.appendChild(slider)



