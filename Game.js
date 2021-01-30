class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.player = new Player(this.ctx, canvas.width/2, canvas.height-100)
    }

    draw() {
        // draw background
        this.ctx.beginPath()
        this.ctx.fillStyle = "#555"
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();

        // draw player
        this.player.draw()

    }

    update() {

    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw();
        requestAnimationFrame(() => this.render());
    }
}