class Box{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1,
            'density':20
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("box.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        /*strokeWeight(4);
        fill("red");
        rect(pos.x,pos.y,40,40);
        imageMode(CENTER);*/
        image(this.image,pos.x-20,pos.y-20,40,40);
        pop();
    }
}