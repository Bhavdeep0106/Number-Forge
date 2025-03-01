import Grid from "./grid.js"
import Tile from "./tile.js"

const gameboard = document.getElementById("game-board")

const grid = new Grid(gameboard)
grid.randomEmptyCell().tile = new Tile(gameboard)
grid.randomEmptyCell().tile = new Tile(gameboard)
setupInput()

function setupInput(){
    window.addEventListener("keydown", handleInput, {once:true})
}

function handleInput(e){
    switch(e.key){
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
        default:
            setupInput()
            return
    }
    setupInput()
}

function moveUp(){
    slideTiles(grid.cellsByColumn)
}