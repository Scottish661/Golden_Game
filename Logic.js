let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
const CS = 512;
canvas.width = CS;
canvas.height = CS;
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        pen.fillStyle = 'red'; 
        pen.fillRect(this.x, this.y, this.width, this.height);
    }
}
const player = new Player(50, 50, 30, 40);
pen.clearRect(0, 0, CS, CS);
player.draw();
