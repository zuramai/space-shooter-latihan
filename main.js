let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

window.onload = () => {
    let game = new Game(canvas)
    game.render();
}