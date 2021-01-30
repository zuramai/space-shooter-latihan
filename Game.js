class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.player = new Player(this.ctx, canvas.width/2, canvas.height-100)
        this.aliens = new Alien(this.ctx, 11, 50, 40)

        this.score = 0;
        this.listener();
    }

    draw() {
        // draw background
        this.ctx.beginPath()
        this.ctx.fillStyle = "#555"
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();

        // draw player
        this.player.draw()

        // draw aliens
        this.aliens.draw();

        this.drawScore();
    }

    drawScore() {
        this.ctx.fillStyle = "white"
        this.ctx.fillText(this.aliens.score, this.canvas.width/2, this.canvas.height/2)
    }

    update() {
        this.player.update();
        this.aliens.isCollide(this.player.bullets);
        this.aliens.update();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw();
        this.update();
        requestAnimationFrame(() => this.render());
    }

    listener() {
        let that = this;

        window.addEventListener('keydown', function(event) {
            if(event.key == ' ') {
                that.player.shoot();
            }
        });
    }
}