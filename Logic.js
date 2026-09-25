let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
const CS = 512;
canvas.width = CS;
canvas.height = CS;
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
}
const player = new Player(50, 50, 30, 40,'red')
pen.clearRect(0, 0, CS, CS);
player.draw();
