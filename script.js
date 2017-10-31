var b = 30;    //Base
var h = 40;  //Height

function areaTriangle(b, h) {
    var areaT = 1/2 * (b * h);
    return areaT;
}

var areaT = ("The area of a triangle with a base of" + this.b + "and height of " + this.h + " is " + areaTriangle(b, h));

document.getElementById("1").innerHTML = areaT;

function calcHypotenuse(b, h) {
    var calcH = (Math.sqrt(b*b + h*h));
    return calcH;  

}

var calcH = ("The hypotenuse of a triangle with a base of " + this.b + " and a height of " + this.h + "is " + calcHypotenuse(b, h));

document.getElementById("2").innerHTML = calcH;
