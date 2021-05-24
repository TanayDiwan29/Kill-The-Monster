class Monster{
    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height);
        
        World.add(world,this.body);
        this.width=width;
        this.height=height;

        this.image=loadImage("Monster.png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width+20,this.height+20);
        pop();
    }
}