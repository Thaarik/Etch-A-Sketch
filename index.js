const container = document.querySelector(".container");


function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        const grid = document.createElement('div');
        container.appendChild(grid).className = "grid";
    }
    changeColor();
}

function randomColor() {
    let colorCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + colorCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = `${randomColor()}`;
        })
    })
}
makeGrid(16, 16);