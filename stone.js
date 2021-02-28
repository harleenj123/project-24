class Stone {

    constructor(x,y,options) {
var options = {
    'restitution': 0.8,
    'friction': 3.0,
    'density': 2.0
    
   }

this.body = Bodies.rectangle(x,y,10,20, options);
this.width = width;
this.height = height;


World.add(world, this.body);
}

display() {

    var pos = this.body.position;
   var angle = this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("blue");
    strokeWeight(3);
    fill("yellow");

    rect (0,0, this.width, this.height);
    pop ();
}
    }
