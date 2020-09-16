class Chain{

    constructor(body1,body2){

    var options={
        bodyA: body1,
        bodyB: body2,
        stiffness: 0.01,
        length:  50}

         this.chain = Constraint.create(options);
         World.add(world,this.chain);

    }


display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

strokeWeight(4);
stroke("red");
line(pointA.x,pointA.y,pointB.x, pointB.y);
//console.log(pointA);
//console.log(pointB);
}

}
