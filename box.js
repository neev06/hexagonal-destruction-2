class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
   

      World.add(world, this.body);
    }
    display(){

        if(this.body.speed<3){
            var pos =this.body.position;
            rectMode(CENTER);
            fill(149,170,244);
            rect(pos.x, pos.y, this.width, this.height);
             
        }
          

    }
    
   
      
    };
  
  