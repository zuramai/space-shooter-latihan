class Player {
    constructor(ctx,x, y) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        let image = new Image;
        image.src = "images/player.png"

        this.image = image;
        this.listener()
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y)
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