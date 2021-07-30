class Ground
{
constructor(x,y,r){
    var options={
        isStatic:true
    }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
World.add(world,this.body);
}
show(){
    var pos=this.body.position;
    push();
    
}

    
}