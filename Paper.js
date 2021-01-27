class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2 
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(userWorld,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,10);
    }
}