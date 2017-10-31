var base = 30;    //Base
var height = 40;  //Height

function areaTriangle(base, height) {
    var areaT = 1/2 * (base * height);
    return areaT;
}

var areaT = ("The area of a triangle of this base and height is " + areaTriangle(base, height));

document.getElementById("1").innerHTML = areaT;

var calcHypotenuse = function(b, h) {
    (Math.sqrt(b) + Math.sqrt(h))
    calcHypotenuse (b, h)
}

var hypotenuse = calcHypotenuse (b, h);
    
