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

var hypotenusPrompt = ("The hypotenuse of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + calcHypotenuse(b, h) + ".");

document.getElementById("2").innerHTML = calcH;

//Defines what a triangle is.
var triangle = {
    base: 30,
    height: 40,
    canvasId: "canvas",
    calcArea: function () {
        return .5 * this.b * this.h;
    },
    calcHypotenuse: function () {
        return (Math.sqrt(this.b*this.b + this.h*this.h))
    },

    drawIt: function() {
        drawTriangle(this.b, this.h, this.canvasId);
    }
};
var hypotenusePrompt = ("The hypotenuse of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + calcHypotenuse() + ".");
var areaPrompt = ("The area of a triangle with a base of " + this.b + " and a height of " + this.h + " is " + areaT() + ".");

document.getElementById("3").innerHTML = areaPrompt = "<br>" = hypotenusePrompt;

triangle.drawIt();

