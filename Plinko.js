class Plinko{
    constructor(x, y) {
        var options = {
          isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,5, options);
        this.r = 5
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}