var fs  = require("fs");
var array = fs.readFileSync("./config_robot.txt").toString().split('\n');

// Variables de los sensores
var laserSensor=true, usSensor=true, irSensor=true, contactSensor=true, odometro=true;

// Variables de los tamaños de la base
var length = 0.0, width = 0.0, height = 0.0, radius = 0.0;

// Variables de las ruedas
var numWheels = 0, radiusWheel = 0.0;

array.forEach(function(element) {
  var words = element.split(" ");
  console.log(element);

  switch (words[0]) {
    case "Largo": length = words[3]; break;
    case "Anchura": width = words[3]; break;
    case "Altura": height = words[3]; break;
    case "Número": numWheels = words[3]; break;
      break;
  }

  var parts = element.split(":");
  switch(parts[0]) {
    case "Radio del robot": radius = parts[1]; break;
    case "Radio de la rueda": radiusWheel = parts[1]; break;
  }

  /**********************************/
  // FALTA LA PARTE DE LOS SENSORES //
  /**********************************/
})

console.log("Largo del robot ->" + length);
console.log("Anchura del robot ->" + width);
console.log("Altura del robot ->" + height);
console.log("Radio del robot ->" + radius);
console.log("Número de ruedas ->" + numWheels);
console.log("Radio de las ruedas ->" + radiusWheel);
console.log("Sensor laser ->" + laserSensor);
console.log("Sensor de ultrasonido ->" + usSensor);
console.log("Sensor de infrarrojo ->" + irSensor);
console.log("Sensor de contacto ->" + contactSensor);
console.log("Odometro ->" + odometro);
