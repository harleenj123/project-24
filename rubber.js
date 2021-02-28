class Rubber {


    constructor(width, height, options) {

        var options = {
       'restitution': 0.3,
       'friction': 5.0,
       'density': 1.0
            
        }
        this.body = ellipse(56,46, width, height, options);
        this.width =width;
        this.height = height;
        
        World.add(world, this.body);
    
    }

    display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("green");
    strokeWeight(3);
    fill("purple");
    pop ();

    }
}