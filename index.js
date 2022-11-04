// El área de un triángulo

let baseTriangle = prompt("Cuál es la base del triángulo?");
let heightTriangle = prompt("Cuál es la altura del triángulo?");
let areaTriangle = baseTriangle * heightTriangle / 2;
alert("El área del triángulo es: " + areaTriangle);

//El área de un círculo 

let radiusCircle = prompt("Cuál es el radio del cículo?");
let areaCircle = Math.pow(Number.parseFloat(radiusCircle), 2) * Math.PI;
alert("El área del círculo es: " + areaCircle);