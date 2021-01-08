class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("dustbingreen coding.png");
      this.width = width;
      this.height = height;
      this.scale=0.5
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image,pos.x,pos.y);
    }
  };