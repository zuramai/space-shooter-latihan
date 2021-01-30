class Alien {
    constructor(ctx, numberOfAliens, width, height) {
        this.ctx = ctx;
        this.numberOfAliens = numberOfAliens;
        this.width = width;
        this.height = height;
        this.score = 0;

        let image = new Image;
        image.src = "images/alien.png"

        this.image = image;

        this.aliens = [];

        let padding = 10;

        for(let i = 0; i < numberOfAliens; i++) {
            this.aliens.push({
                x: i * this.width + (padding * i),
                y: 20,
                alive: true
            })
        }
    }

    draw() {
        this.aliens.forEach((alien, index) => {
            if(alien.alive == true) {
                this.ctx.drawImage(this.image, alien.x, alien.y, this.width, this.height)
            }
        })
    }

    update() {
        if(this.aliens.every(alien => !alien.alive)) {
            alert('game success');
        }
    }

    isCollide(bullets) {
        this.aliens.forEach((alien, index) => {
            bullets.forEach((bullet, indexBullet) => {
                if(bullet.x > alien.x && 
                    bullet.x < alien.x + this.width &&
                    bullet.y < alien.y + this.height && 
                    alien.alive) {
                        this.score++;
                        alien.alive = false;
                    }
            })
        });
    }
}