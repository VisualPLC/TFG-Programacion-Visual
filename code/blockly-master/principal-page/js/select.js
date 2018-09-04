// FUNCIÓN Q DEFINE LOS BLOQUES QUE SE MOSTRARÁN EN LA APP

/********** MOVIMIENTO **********/
Blockly.defineRobotBlocks = function(workspace) {
  //debugger;

  var xmlList = [];

  if (Blockly.Blocks['avanzar']) {
    var blockText = '<xml>' +
                    '<block type="avanzar">' +
                    '<field name="metros_seg">' + 5 + '</field>' +
                    '<field name="segundos">' + 1 + '</field>' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }

  if (Blockly.Blocks['retroceder']) {
    var blockText = '<xml>' +
                    '<block type="retroceder">' +
                    '<field name="metros_seg">' + 5 + '</field>' +
                    '<field name="segundos">' + 1 + '</field>' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }

  if (Blockly.Blocks['girar']) {
    var blockText = '<xml>' +
                    '<block type="girar">' +
                    '<field name="grados">' + 90 + '</field>' +
                    '<field name="direccion">' + 'izq' + '</field>' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }

  if (Blockly.Blocks['stop']) {
    var blockText = '<xml>' +
                    '<block type="stop">' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }

  return xmlList;

};

/********* SENSORES **********/
Blockly.defineSensorBlocks = function(workspace) {

  //debugger;

  var xmlList = [];

  if (Blockly.Blocks['sensor_laser']) {

    if (Laser1_Activo = true) {

      var sensor_laser = false;

      var blockText = '<xml>' +
                      '<block type="sensor_laser">' +
                      '<field name="num_sensor">' + 1 + '</field>' + 
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);
    }
  }

  if (Blockly.Blocks['sensor_contacto']) {

    if (Contacto1_Activo = true) {

      var blockText = '<xml>' +
                      '<block type="sensor_contacto">' +
                      '<field name="num_sensor">' + 1 + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);
    }
  }

  if (Blockly.Blocks['sensor_ultrasonido']) {

    if (Ultrasonido1_Activo = true) {

      var blockText = '<xml>' +
                      '<block type="sensor_ultrasonido">' +
                      '<field name="num_sensor">' + 1 + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);

    }
  }

  if (Blockly.Blocks['sensor_infrarrojo']) {

    if (Infrarrojo1_Activo = true) {

      var blockText = '<xml>' +
                      '<block type="sensor_infrarrojo">' +
                      '<field name="num_sensor">' + 1 + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);

    }
  }

  if (Blockly.Blocks['sensor_laser2d']) {

    if (Laser2d1_Activo = true) {

      var blockText = '<xml>' +
                      '<block type="sensor_laser2d">' +
                      '<field name="num_sensor">' + 1 + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);

    }
  }

  return xmlList;

};

/********** LOGICA **********/
Blockly.defineLogicSensorBlocks = function(workspace) {

  //debugger;

  var xmlList = [];

  if (Blockly.Blocks['si_hacer']) {
    var blockText = '<xml>' +
                    '<block type="si_hacer">' +
                    '<field name="symbol">' + '=' + '</field>' + 
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }

  if (Blockly.Blocks['sino']) {
    var blockText = '<xml>' +
                    '<block type="sino">' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block); 
  }

  if (Blockly.Blocks['sino_si_hacer']) {
    var blockText = '<xml>' +
                    '<block type="sino_si_hacer">' +
                    '<field name="symbol">' + '=' + '</field>' +
                    '</block>' +
                    '</xml>';

    var block = Blockly.Xml.textToDom(blockText).firstChild;
    xmlList.push(block);
  }
  
  return xmlList;

};

/*function Avanzar (metros_seg) {
  alert('Avanzar ' + metros_seg + ' metros.');
}

function Retroceder (metros_seg) {
  alert('Retroceder ' + metros_seg + ' metros.');
}

function Girar (grados, dir) {
  alert('Girar ' + grados + ' grados a la ' + dir);
}*/