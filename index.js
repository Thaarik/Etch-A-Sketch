const container = document.querySelector(".container");
const clear = document.querySelector(".clear")

//to create default grid of size 16x16
function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    console.log(rows + " " + columns);
    for (let i = 0; i < (rows * columns); i++) {
        const grid = document.createElement('div');
        grid.style.backgroundColor = 'white';
        container.appendChild(grid).className = "grid";
    }
    changeColor();
}

//to generate random color
function randomColor() {
    let colorCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + colorCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

//to generate random color on mouse hover
function changeColor() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = `${randomColor()}`;
        })
    })
}

//to reset pixels
function resetPixels() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        container.removeChild(grid);
    })
}

//to change pixels after clicking reset button
function changePixels() {
    let pixels = window.prompt('How many squares per side?(Max 100) ');
    if (pixels <= 100 && pixels > 0) {
        resetPixels();
        makeGrid(pixels, pixels);
        console.log(pixels)
    } else {
        window.alert('Please enter correct number');
    }
}

//to change the color of the pixels
function changeColorPixels(color) {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = `${color}`;
        })
    })
}

//to reset the background color of the pixels
function resetColorPixels() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = `white`;
    })
    makeGrid(16, 16);
}

//to change user color
const userColor = document.querySelector("#userColor");
userColor.addEventListener('input', (event) => {
    changeColorPixels(event.target.value)
})


makeGrid(16, 16);