class Superman{
    constructor(x,y,width,height){
        var options={
            'density':1,
            //'frictionAir':1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Superman.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rectMode(CENTER);
        //rotate(angle);
        imageMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        image(this.image,pos.x,pos.y+10,this.width,this.height+140);
        pop();
    }
}