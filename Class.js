class Player {
        constructor(x, y, width, height ,color){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            pen.fillStyle = this.color;
            pen.fillRect(this.x, this.y, this.width, this.height);
        }
        gravity(){
            this.y  = (this.y + 2) % CS;
            }
    }
    const player = new Player(50, 50, 30, 40,'blue')
    
