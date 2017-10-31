var b = 30;    //Base
var h = 40;  //Height

function areaTriangle(b, h) {
    var calcArea = 1/2 * (b * h);
    return calcArea;
}

var calcArea = ("The area of a triangle with a base of " + this.b +
 " and a height of " + this.h + " is " + areaTriangle(b, h) + ".");

document.getElementById("1").innerHTML = calcArea;

function calcHypotenuse(b, h) {
    var calcH = (Math.sqrt(b*b + h*h));
    return calcH;  
}

var calcH = ("The length of the hypotenuse of a triangle with a base of " + this.b +
 " and a height of " + this.h + " is " + calcHypotenuse(b, h) + ".");

document.getElementById("2").innerHTML = calcH;

var triangle = {
    b: 30,
    h: 40,
    canvasId: "canvas",
    calcArea: function calcArea(b, h) {
        var areaT = 1/2 * (this.b * this.h);
        return areaT;
    },
    calcHypotenuse: function calcHypotenuse(b, h) {
        var calcHypotenuse = (Math.sqrt(this.b*this.b + this.h*this.h));
        return calcHypotenuse;  
    },
    drawIt: drawTriangle(this.b, this.h, this.canvasId),
};

var drawIt = drawTriangle(this.b, this.h, this.canvasId)


