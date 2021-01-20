class CrumpledPaper {
    constructor(x,y,radius,radius,) {
      var options = {
          isStatic:false,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2
      }
      this.body = Bodies.circle(x,y,radius,radius, options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display (){
        imageMode(RADIUS);
       // fill("red");
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
