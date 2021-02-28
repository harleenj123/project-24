class Hammer{
    constructor(x,y,options) {

        var options = {
            'restitution': 0.5,
            'density': 2.0,
            'friction': 1.0
        }
        this.body= Bodies.rectangle(x,y,50,50,options);

        this.width = 150;
        this.height = 20;

        World.add(world, this.body);
    }

    display() {

        var pos =this.body.position;
        var angle =this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate (angle);
        rectMode(CENTER); 
        stroke ("purple");
        strokeWeight(3);
        fill ("blue");
        

        rect(0,0, this.width, this.height);
    
        pop ();
        
    }
}

