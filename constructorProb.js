//Creating the constructor
function Vector(x,y){
    this.x = x;
    this.y = y;
}
//Adding methods to the prototypes
Vector.prototype.plus = function(vector){
        var sumx = this.x + vector.x
        var sumy = this.y + vector.y
        var result = new Vector(sumx,sumy)
return result
}
Vector.prototype.minus = function(vector){
    var minx = this.x - vector.x
    var miny = this.y - vector.y
    var result1 = new Vector(minx,miny)
return result1
}

 Vector.prototype.getLength = function(){
      return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
}


var v3 = new Vector(3, 4)
console.log(v3.getLength());