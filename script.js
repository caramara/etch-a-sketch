const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
const resetBtn = document.querySelector('#reset-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
let rainbowColorsToggle = false;
//const boxes = document.querySelectorAll('.box');
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
    
    if(rainbowColorsToggle){
        target.style.backgroundColor = getRandomColor();
    }else{
        //target.classList.add('hover');
        target.style.backgroundColor = 'green';
    }
});

gridBtn.addEventListener('click',()=>{
    const newSize = parseInt(prompt("Enter grid size (Example: 16 for 16x16 grid):"));

    if(isNaN(newSize) || newSize<0 || newSize>100){
        alert('Invalid number');
        return;
    }
    createGrid(newSize);
});

resetBtn.addEventListener('click', () => {
    rainbowColorsToggle = false;
    createGrid(16);
});
rainbowBtn.addEventListener('click',() => {
    rainbowColorsToggle = true;
})

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i<6;i++){
        /*
        Math.random() generates a random floating point number between 0...1
        By multiplying the random number by 16 we scale the range from 0...1 to a range of 0...16
        Math.floor rounds down the value to 0...15 so a total of 16 random choices
        By using the random integer as an index for letters(length=16) we select a random character
        The color string contains 6 characters and we assign a random one each time from 16 choices
         */
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
}