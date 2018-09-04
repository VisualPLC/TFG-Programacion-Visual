// FICHERO DE GENERACIÓN DE LOS BLOQUES

/********** LOGICA **********/
Blockly.JavaScript['si_hacer'] = function(block) {
  var value_si = Blockly.JavaScript.statementToCode(block, 'si');
  var dropdown_symbol = block.getFieldValue('symbol');
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_hacer = Blockly.JavaScript.statementToCode(block, 'hacer');

  var code = 'if (' + value_si + ' ' + dropdown_symbol + ' ' + value_valor + ') {\n' + statements_hacer + '}\n';
  return code;
};

Blockly.JavaScript['sino'] = function(block) {
  var statements_sino = Blockly.JavaScript.statementToCode(block, 'sino');
  var code = ' else {\n' + statements_sino + '}\n';
  return code;
};

Blockly.JavaScript['sino_si_hacer'] = function(block) {
  var value_sino_si = Blockly.JavaScript.statementToCode(block, 'sino_si');
  var dropdown_symbol = block.getFieldValue('symbol');
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_hacer = Blockly.JavaScript.statementToCode(block, 'hacer');

  var code = 'else if (' + value_sino_si + ' ' + dropdown_symbol + ' ' + value_valor + ') {\n' + statements_hacer + '}\n';
  return code;
};

Blockly.JavaScript['num_random'] = function(block) {
  var min = block.getFieldValue('min');
  var max = block.getFieldValue('max');

  return Math.floor(Math.random() * (max - min)) + min;
};

/***************************** MOVIMIENTO **********************************/
/************** Generador bloque Avanzar **********************/
Blockly.JavaScript['avanzar'] = function(block) {
  var metros_seg = block.getFieldValue('metros/seg');
  var segundos = block.getFieldValue('segundos');

  var code = 'Avanzar(' + metros_seg + ',' + segundos + ');\n';
  return code;
};
/**************************************************************/

Blockly.JavaScript['retroceder'] = function(block) {
  var metros_seg = block.getFieldValue('metros/seg');  // Guardamos en una variable el num de vueltas que quiere que se muevan las ruedas hacia delante
  var segundos = block.getFieldValue('segundos');

  var code = 'Retroceder(' + metros_seg + ',' + segundos + ');\n';
  return code;
};

Blockly.JavaScript['girar'] = function(block) {
  // Guardamos los grados que debe girar el robot y la dirección a la que debe hacerlo
  var angle_grados = block.getFieldValue('grados');
  var dropdown_direccion = block.getFieldValue('direccion');

  if (dropdown_direccion == 'izq') {
    dropdown_direccion = 0;
  } else {
    dropdown_direccion = 1;
  }

  var code = 'Girar(' + angle_grados +  ',\'' + dropdown_direccion + '\');\n';
  return code;
};

Blockly.JavaScript['stop'] = function(block) {
  var code = 'stop();\n';
  return code;
};

/********* SENSORES **********/
/******************* Definición bloque Avanzar ********************/
Blockly.JavaScript['sensor_laser'] = function(block) {
  var num_sensor = block.getFieldValue('num_sensor');

  var num_sensores_laser = Laser[0].children.length;

  // Si hay más de un sensor...
  if (Laser[0].children[0].tagName != "Activo") { 

	// Si el usuario introduce un nº mayor al nº de sensores que hay...
    if (num_sensor > num_sensores_laser) {  
    window.alert("ERROR: Hay " + num_sensores_laser + " sensores láser");
    } else {
      debugger;
      var code = "sensor_laser_" + num_sensor;
      if (typeof code == 'string') console.log('ES UN STRING');
      else console.log('ES UN NUMERO');
      return code;
    }

  } else {
    if (num_sensor != 1) {
      window.alert("ERROR: Solo hay 1 sensor láser");
    } else {
      var code = "sensor_laser_1";
      return code;
    }
  }
};
/*********************************************************************/

Blockly.JavaScript['sensor_contacto'] = function(block) {
  var num_sensor = block.getFieldValue('num_sensor');

  var num_sensores_contacto = Contacto[0].children.length;

  if (Contacto[0].children[0].tagName != "Activo") { // Si hay más de un sensor

    if (num_sensor > num_sensores_contacto) {  // Si el usuario introduce un nº mayor al nº de sensores que hay
    window.alert("ERROR: Hay " + num_sensores_contacto + " sensores de contacto");
    } else {
      var code = "sensor_contacto_" + num_sensor;
      return code;
    }

  } else {
    if (num_sensor != 1) {
      window.alert("ERROR: Solo hay 1 sensor de contacto");
    } else {
      var code = "sensor_contacto_1";
      return code;
    }
  }
};

Blockly.JavaScript['sensor_infrarrojo'] = function(block) {
  var num_sensor = block.getFieldValue('num_sensor');

  var num_sensores_infrarrojo = Infrarrojo[0].children.length;

  if (Infrarrojo[0].children[0].tagName != "Activo") { // Si hay más de un sensor

    if (num_sensor > num_sensores_infrarrojo) {  // Si el usuario introduce un nº mayor al nº de sensores que hay
      window.alert("ERROR: Hay " + num_sensores_infrarrojo + " sensores infrarrojos");
    } else {
      var code = 'sensor_infrarrojo_' + num_sensor;
      return code;
    }

  } else {
    if (num_sensor != 1) {
      window.alert("ERROR: Solo hay 1 sensor infrarrojo");
    } else {
      var code = 'sensor_infrarrojo_1';
      return code;
    }
  }

};

Blockly.JavaScript['sensor_ultrasonido'] = function(block) {
  var num_sensor = block.getFieldValue('num_sensor');

  var num_sensores_ultrasonido = Ultrasonido[0].children.length;

  if (Ultrasonido[0].children[0].tagName != "Activo") { // Si hay más de un sensor

    if (num_sensor > num_sensores_ultrasonido) {  // Si el usuario introduce un nº mayor al nº de sensores que hay
      window.alert("ERROR: Hay " + num_sensores_ultrasonido + " sensores de ultrasonido");
    } else {
      var code = 'sensor_ultrasonido_' + num_sensor;
      return code;
    }

  } else {
    if (num_sensor != 1) {
      window.alert("ERROR: Solo hay 1 sensor de ultrasonido");
    } else {
      var code = 'sensor_ultrasonido_1';
      return code;
    }
  }

};

Blockly.JavaScript['sensor_laser2d'] = function(block) {
  var num_sensor = block.getFieldValue('num_sensor');

  var num_sensores_laser2d = Laser2D[0].children.length;

  if (Laser2D[0].children[0].tagName != "Activo") { // Si hay más de un sensor

    if (num_sensor > num_sensores_laser2d) {  // Si el usuario introduce un nº mayor al nº de sensores que hay
      window.alert("ERROR: Hay " + num_sensores_laser2d + " sensores láser 2D");
    } else {
      var code = 'sensor_laser2d_' + num_sensor;
      return code;
    }

  } else {
    if (num_sensor != 1) {
      window.alert("ERROR: Solo hay 1 sensor laser 2d");
    } else {
      var code = 'sensor_laser2d_1';
      return code;
    }
  }

};