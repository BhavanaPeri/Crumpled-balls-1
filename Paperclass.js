class Paperclass {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.6,
            density:1.2,
            restitution:0.2,
        }
        this.x=x;
        this.r=r;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,35,options)
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill (255)
        ellipse(this.body.position.x,this.body.position.y,35,30)
    }
}