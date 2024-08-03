const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
const resetBtn = document.querySelector('#reset-btn');
const boxes = document.querySelectorAll('.box');
createGrid(16);

function createGrid(gridSize){
    /*boxes.forEach(e => {
        e.classList.remove('hover');
        e.remove();
    });*/
    container.innerHTML = '';
    for(let i = 0 ; i<gridSize*gridSize;i++){
        const box = document.createElement('div');
        box.classList.add('box');
        //Divide size into equal grid size pieces ex. 100%/16 = 6.25%
        box.style.width=`${100/gridSize}%`;
        box.style.height=`${100/gridSize}%`;
        container.appendChild(box);
    }
}

container.addEventListener('mouseover',(e)=>{
    const target = e.target;
    target.classList.add('hover');
});

gridBtn.addEventListener('click',()=>{
    const newSize = parseInt(prompt("Enter grid size (Example: 16 for 16x16 grid):"));

    if(isNaN(newSize) || newSize<0){
        alert('Invalid number');
        return;
    }
    createGrid(newSize);
});

resetBtn.addEventListener('click', () => {
    createGrid(16);
});