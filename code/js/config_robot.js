function config_robot() {
	
  // LEER XML Y COGER DATOS

  var xmlhttp = new window.XMLHttpRequest();

  xmlhttp.open(null, 'config_robot.xml', false);
  xmlhttp.send(null); // ?

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlhttp.responseText, "application/xml");

  xmlDoc = xmlhttp.responseXML.documentElement;

  // INSERTANDO EN VBLES LOS DATOS DEL XML
  tipo = xmlDoc.getElementsByTagName("Tipo")[0].firstChild.nodeValue;
  largo = xmlDoc.getElementsByTagName("Largo")[0].firstChild.nodeValue;
  anchura = xmlDoc.getElementsByTagName("Anchura")[0].firstChild.nodeValue;
  altura = xmlDoc.getElementsByTagName("Altura")[0].firstChild.nodeValue;

  numero_ruedas = xmlDoc.getElementsByTagName("Numero")[0].firstChild.nodeValue;
  radio_ruedas_atras = xmlDoc.getElementsByTagName("RadioRuedasAtras")[0].firstChild.nodeValue;
  radio_rueda_central = xmlDoc.getElementsByTagName("RadioRuedaCentral")[0].firstChild.nodeValue;

  console.log('tipo 1: ', tipo);
  console.log('largo 1: ', largo);
  console.log('anchura 1: ', anchura);
  console.log('altura 1: ', altura);

  console.log('numero_ruedas 1: ', numero_ruedas);
  console.log('radio_ruedas_atras 1: ', radio_ruedas_atras);
  console.log('radio_rueda_central 1: ', radio_rueda_central);


  var sensoresXML = xmlDoc.getElementsByTagName('Sensores');
  console.log('sensoresXML ' + sensoresXML);

  for (var i = 0; i < sensoresXML.length; i++) {

    sensores = sensoresXML[i];

    Laser = sensores.getElementsByTagName("Laser");
    Ultrasonido = sensores.getElementsByTagName("Ultrasonido");
    Infrarrojo = sensores.getElementsByTagName("Infrarrojo");
    Contacto = sensores.getElementsByTagName("Contacto");
    Laser2D = sensores.getElementsByTagName("Laser2D");

    console.log('Laser: ', Laser);
    console.log('Ultrasonido: ', Ultrasonido);
  	console.log('Infrarrojo: ', Infrarrojo);
  	console.log('Contacto: ', Contacto);
  	console.log('Laser2D: ', Laser2D);
  }

  ///////// SENSOR LÁSER ////////////

  if (Laser[0].children[0].tagName != "Activo") {
    console.log('Hay ' + Laser[0].children.length + ' sensores láser');
  } else {
    console.log('Hay 1 sensor láser');
  }

  if ((Laser[0].children.length > 1) && (Laser[0].children[0].tagName != "Activo")) {	//Si hay más de un laser

  	var num = 1;
    
  	for (var i = 0; i < Laser[0].children.length; i++) {	// Recorremos todos los laser

  		// Creamos una variable para cada atributo de cada laser
  		window["Laser" + num + "_Activo"] = Laser[0].children[i].children[0].textContent;
  		window["Laser" + num + "_Rango"] = Laser[0].children[i].children[1].textContent;
  		window["Laser" + num + "_Precision"] = Laser[0].children[i].children[2].textContent;

  		num++;

  	}
  }

  ///////// SENSOR DE ULTRASONIDO ////////////

  if (Ultrasonido[0].children[0].tagName != "Activo") {
    console.log('Hay ' + Ultrasonido[0].children.length + ' sensores de ultrasonido');
  } else {
    console.log('Hay 1 sensor de ultrasonido');
  }

  if ((Ultrasonido[0].children.length > 1) && (Ultrasonido[0].children[0].tagName != "Activo")) { //Si hay más de un laser

    var num = 1;
    
    for (var i = 0; i < Ultrasonido[0].children.length; i++) {  // Recorremos todos los laser

      // Creamos una variable para cada atributo de cada laser
      window["Ultrasonido" + num + "_Activo"] = Ultrasonido[0].children[i].children[0].textContent;
      window["Ultrasonido" + num + "_Rango"] = Ultrasonido[0].children[i].children[1].textContent;
      window["Ultrasonido" + num + "_Precision"] = Ultrasonido[0].children[i].children[2].textContent;

      num++;

    }

  } else {

    var Ultrasonido1_Activo = Ultrasonido[0].children[0].textContent;
    var Ultrasonido1_Rango = Ultrasonido[0].children[1].textContent;
    var Ultrasonido1_Precision = Ultrasonido[0].children[2].textContent;

  }

  ///////// SENSOR INFRARROJO ////////////

  if (Infrarrojo[0].children[0].tagName != "Activo") {
    console.log('Hay ' + Infrarrojo[0].children.length + ' sensores infrarrojos');
  } else {
    console.log('Hay 1 sensor infrarrojo');
  }

  if ((Infrarrojo[0].children.length > 1) && (Infrarrojo[0].children[0].tagName != "Activo")) { //Si hay más de un laser

    var num = 1;
    
    for (var i = 0; i < Infrarrojo[0].children.length; i++) {  // Recorremos todos los laser

      // Creamos una variable para cada atributo de cada laser
      window["Infrarrojo" + num + "_Activo"] = Infrarrojo[0].children[i].children[0].textContent;
      window["Infrarrojo" + num + "_Rango"] = Infrarrojo[0].children[i].children[1].textContent;
      window["Infrarrojo" + num + "_Precision"] = Infrarrojo[0].children[i].children[2].textContent;

      num++;

    }

  } else {

    var Infrarrojo1_Activo = Infrarrojo[0].children[0].textContent;
    var Infrarrojo1_Rango = Infrarrojo[0].children[1].textContent;
    var Infrarrojo1_Precision = Infrarrojo[0].children[2].textContent;

  }

  ///////// SENSOR DE CONTACTO ////////////

  if (Contacto[0].children[0].tagName != "Activo") {
    console.log('Hay ' + Contacto[0].children.length + ' sensores de contacto');
  } else {
    console.log('Hay 1 sensor de contacto');
  }

  if ((Contacto[0].children.length > 1) && (Contacto[0].children[0].tagName != "Activo")) { //Si hay más de un laser

    var num = 1;
    
    for (var i = 0; i < Contacto[0].children.length; i++) {  // Recorremos todos los laser

      // Creamos una variable para cada atributo de cada laser
      window["Contacto" + num + "_Activo"] = Contacto[0].children[i].children[0].textContent;
      window["Contacto" + num + "_Rango"] = Contacto[0].children[i].children[1].textContent;
      window["Contacto" + num + "_Precision"] = Contacto[0].children[i].children[2].textContent;

      num++;

    }

  } else {

    var Contacto1_Activo = Contacto[0].children[0].textContent;
    var Contacto1_Rango = Contacto[0].children[1].textContent;
    var Contacto1_Precision = Contacto[0].children[2].textContent;

  }


  ///////// SENSOR ODÓMETRO ////////////

  if (Laser2D[0].children[0].tagName != "Activo") {
    console.log('Hay ' + Laser2D[0].children.length + ' sensores odómetros');
  } else {
    console.log('Hay 1 sensor odómetro');
  }

  if ((Laser2D[0].children.length > 1) && (Laser2D[0].children[0].tagName != "Activo")) { //Si hay más de un laser

    var num = 1;
    
    for (var i = 0; i < Laser2D[0].children.length; i++) {  // Recorremos todos los laser

      // Creamos una variable para cada atributo de cada laser
      window["Laser2D" + num + "_Activo"] = Laser2D[0].children[i].children[0].textContent;
      window["Laser2D" + num + "_Rango"] = Laser2D[0].children[i].children[1].textContent;
      window["Laser2D" + num + "_Precision"] = Laser2D[0].children[i].children[2].textContent;

      num++;

    }

  } else {

    var Laser2d1_Activo = Laser2D[0].children[0].textContent;
    var Laser2d1_Rango = Laser2D[0].children[1].textContent;
    var Laser2d1_Precision = Laser2D[0].children[2].textContent;

  }

}