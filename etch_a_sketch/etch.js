const container = document.querySelector("#container");
const logos_container = document.querySelectorAll('.logos');
container.style.border = "1px bold solid red";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.width = "500px";
container.style.height = "600px";
container.style.padding = "0px 30px 220px 30px";
container.style.backgroundColor = "Red";

// Create the logo and append to the logos_container once
const logo = document.createElement('img');
logo.src = "./images/logo.webp";
logo.height = 120;
logo.width = 180;
logo.style.padding = "10px 0px 25px 0px";
logos_container[0].style.width = "500px";
logos_container[0].style.height = "100px";
logos_container[0].style.display = "flex";
logos_container[0].style.justifyContent = "center";
logos_container[0].appendChild(logo);

// Create the tools box and buttons once
const tools_box = document.createElement("div");
tools_box.style.display = "flex";
tools_box.style.width = "500px";
tools_box.style.padding = "10px 10px";
tools_box.style.justifyContent = "space-evenly";

const eraser_btn = document.createElement("button");
const pencil_btn = document.createElement("button");
const colorPicker = document.createElement('input');
const reset_btn = document.createElement("button");
const slider = document.createElement("div");
const size_slide = document.createElement('input');
const size_value = document.createElement('span');

eraser_btn.classList.add("tools");
pencil_btn.classList.add("tools");
reset_btn.classList.add("tools");
colorPicker.classList.add("picker");

eraser_btn.innerHTML = '<img src="./images/eraser_black.png" height="20px" width="20px"/>';
pencil_btn.innerHTML = '<img src="./images/pencil_black.png" height="20px" width="20px"/>';
reset_btn.innerHTML = '<img src="./images/reset.png" height="20px" width="20px"/>';
colorPicker.type = 'color';
colorPicker.value = '#3a3a3a';
tools_box.appendChild(colorPicker);
tools_box.appendChild(eraser_btn);
tools_box.appendChild(pencil_btn);
tools_box.appendChild(reset_btn);

// Create the slider once
slider.style.display = "flex";
slider.style.flexDirection = "column";
slider.style.alignItems = "center";
size_slide.type = "range";
size_slide.value = 16;
size_slide.min = 1;
size_slide.max = 32;
size_value.textContent = "16 x 16";
slider.appendChild(size_slide);
slider.appendChild(size_value);



let debounceTimeout;

// Debounce function to create grid only after the user stops sliding
size_slide.addEventListener('input', () => {
  size_value.textContent = `${size_slide.value} x ${size_slide.value}`;

  // Clear the previous timeout if the user is still sliding
  clearTimeout(debounceTimeout);

  // Set a new timeout to wait until the user stops sliding
  debounceTimeout = setTimeout(() => {
    clearGrid();  // Clear only the grid, not the tools or logo
    hw();
  }, 200);
});

function clearGrid() {
  const grids = document.querySelectorAll('.grids');
  grids.forEach(grid => grid.remove());  // Remove only grid cells, not logo/tools
}

function hw() {
  for (let i = 0; i < size_slide.value * size_slide.value; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grids");

    grid.style.border = "1px solid Red";
    grid.style.width = `calc(100% / ${size_slide.value})`;
    grid.style.height = `calc(100% / ${size_slide.value})`;
    grid.style.backgroundColor = "white";
    container.appendChild(grid);

    pencil_btn.addEventListener('click', () => grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = colorPicker.value;
    }));

    eraser_btn.addEventListener('click', () => grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "white";
    }));

    reset_btn.addEventListener('click', () => {
      const grids = document.querySelectorAll('.grids');
      grids.forEach(grid => {
        grid.style.backgroundColor = "white"; 
      });
    });
  }
  container.appendChild(tools_box);
container.appendChild(slider);
}

container.appendChild(tools_box);
container.appendChild(slider);

hw();
