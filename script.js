let order = [];
let clickedOrder = [];
let scores = 0;


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

function randomOrder() {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i)+1)
    }
}

let lightColor = (element, num) => {
    num = num * 500;
    setTimeout(()=>{
        element.classList.add('selected')
    }, num - 250);
    setTimeout(()=>{
        element.classList.remove('selected')
    });
}

let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            loseGame()
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${scores}\n 
        You win, Starting next level!`)
        nextLevel()
    }
}

let click = (color)=>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
    
}

let createColorElement = (color)=>{
    if (color == 0 ){
        return green
    }else if(color == 1){
        return red
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }

}

function nextLevel(){
    scores++;
    randomOrder();
}

let loseGame = ()=>{
    alert(`Pontuação: ${scores} \n You lose`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = ()=>{
    alert(`Welcome, the game will begins...`)
    scores = 0;

    nextLevel()
}

green.onclick = () => click(0)
blue.onclick = () => click(3)
yellow.onclick = () => click(2)
red.onclick = () => click(1)


playGame()