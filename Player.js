class Player {
    constructor(ctx,x, y) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        // image
        let image = new Image;
        image.src = "images/player.png"
        this.image = image;

        // init peluru
        this.bullets = []

        // run listener
        this.listener();
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y)

        // draw peluru
        this.bullets.forEach((bullet, index) => {
            this.ctx.beginPath()
            this.ctx.fillStyle = "#fff";
            this.ctx.rect(bullet.x, bullet.y, 5, 20);
            this.ctx.fill();
        });
    }

    update() {
        this.bullets.forEach((bullet, index) => {
            bullet.y -= 2
        });
    }

    shoot() {
        // peluru baru
        this.bullets.push({
            x: this.x + this.image.width/2,
            y: this.y
        });
        console.log(this.bullets)
    }

    listener() {
        let that = this;

        window.addEventListener('keydown', function(event) {
            if(event.key == 'a' || event.key == "ArrowLeft") {
                that.x -= 5;
            }else if(event.key == 'd' || event.key == 'ArrowRight') {
                that.x += 5;
            }
        });
    }
}