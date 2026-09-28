function loop(){
    pen.clearRect(0, 0, CS, CS);
    player.gravity();
    player.draw();
     setTimeout(loop,1000/60);
    }
    window.onload = function() {
    loop();
};