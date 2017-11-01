var b = 30;    //Base
var h = 40;  //Height
var areaT = .5 * b * h;

var areaPrompt = "The area of a triangle with a base of " + this.b +
 " and a height of " + this.h + " is " + areaT(b, h) + ".";

document.getElementById("1").innerHTML = areaT;

function calcHypotenuse(b, h) {
    var calcH = (Math.sqrt(b * b + h * h));
    return calcH;  
}

var calcH = ("The hypotenuse of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + calcHypotenuse(b, h) + ".");

document.getElementById("2").innerHTML = calcH;

var triangle = {
    base: 30,
    height: 40,
    canvasId: "canvas",
    calcArea: function areaTriangle(b, h) {
        var areaT = 1/2 * (this.b * this.h);
        return areaT;
    },
    calcHypotenuse: function calcHypotenuse(b, h) {
        var calcH = (Math.sqrt(this.b*this.b + this.h*this.h));
        return calcHypotenuse;  
    },
    drawIt: drawTriangle(this.b, this.h, this.canvasId),
};

var drawTriangle = (drawTriangle(this.b, this.h, this.canvasId))

var calcH = ("The hypotenuse of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + calcHypotenuse(b, h) + ".");
var areaT = ("The area of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + areaTriangle(b, h) + ".");


