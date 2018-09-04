// Definción de los bloques
Blockly.Blocks['mover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover")
        .appendField(new Blockly.FieldNumber(5, 1), "rotaciones")
        .appendField("rotaciones");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['girar'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Girar")
        .appendField(new Blockly.FieldAngle(90), "grados")
        .appendField(new Blockly.FieldDropdown([["izquierda","izq"], ["derecha","dcha"]]), "direccion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*function LeerXml (fichXML) {
  debugger;
  var xmlDoc;

  try {
    if (document.all) {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    } else {  // firefox
      xmlDoc = document.implementation.createDocument("", "", null);
    }

    xmlDoc.async = false;
    xmlDoc.load(fichXML);
  } catch (e) {

    try { // safari, chrome...
      var xmlhttp = new window.XMLHttpRequest();

      xmlhttp.open("GET", fichXML, false);
      xmlhttp.send(null);
      xmlDoc = xmlhttp.responseXML.documentElement;
      
      return xmlDoc;
    } catch (e) {
      return undefined;
    }

  }

  return xmlDoc;

}

function CargarXMLEventos() {
  debugger;

  try {
    xmlDoc = LeerXml("custom/config_robot.xml");

    baseXML = xmlDoc.getElementsByTagName('Base');
    ruedasXML = xmlDoc.getElementsByTagName('Ruedas');

    for (var i = 0; i < baseXML.length; i++) {
      xmlBase = baseXML[i];

      tipo = xmlBase.getElementsByTagName("Tipo")[0].firstChild.nodeValue;
      largo = xmlBase.getElementsByTagName("Largo")[0].firstChild.nodeValue;
      anchura = xmlBase.getElementsByTagName("Anchura")[0].firstChild.nodeValue;
      altura = xmlBase.getElementsByTagName("Altura")[0].firstChild.nodeValue;

    }

    for (var i = 0; i < ruedasXML.length; i++) {
      xmlRuedas = ruedasXML[i];

      numero_ruedas = xmlRuedas.getElementsByTagName("Numero")[0].firstChild.nodeValue;
      radio_ruedas_atras = xmlRuedas.getElementsByTagName("RadioRuedasAtras")[0].firstChild.nodeValue;
      radio_rueda_central = xmlRuedas.getElementsByTagName("RadioRuedaCentral")[0].firstChild.nodeValue;
    }

  } catch (e) {
    alert("Se produjo un error en la carga de los datos");
  }

}*/


// Código que generan los bloques
Blockly.JavaScript['mover'] = function(block) {
  debugger;

  /*var text = "<bookstore><book>" +
  "<title>Everyday Italian</title>" +
  "<author>Giada De Laurentiis</author>" +
  "<year>2005</year>" +
  "</book></bookstore>";

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(text,"text/xml");

  var Tipo = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;*/

  var xmlDoc = document.implementation.createDocument("", "test", null);

  

  xmlDoc.addEventListener("load", new XMLSerializer().serializeToString(e.target), false);
  xmlDoc.load('config_robot.xml');

  /*var parser = new DOMParser();
  var xmlDoc = parser.parseFromString('/config_robot.xml', "text/xml");

  var Tipo = xmlDoc.getElementsByTagName("Tipo")[0].childNodes[0].nodeValue;*/

  //document.getElementById("tipo").innerHTML = oDOM.getElementsByTagName("Tipo")[0].childNodes[0].nodeValue;


  var oSerializer = new XMLSerializer();
  var sXML = oSerializer.serializeToString(config_robot);




  /*CargarXMLEventos();

  tipo;
  largo;
  anchura;
  altura;
  numero_ruedas;
  radio_ruedas_atras;
  radio_rueda_central;*/


  var number_rotaciones = block.getFieldValue('rotaciones');  // Guardamos en una variable el num de vueltas que quiere que se muevan las ruedas hacia delante

  var distancia_reccorrer_X = number_rotaciones * circunf_rueda;  // Cálculo de lo que tienen que girar las ruedas según lo que indice el usuario

  // Indicamos la distancia que debe recorrer cada rueda
  rueda_izq = distancia_reccorrer_X;
  rueda_drcha = rueda_izq;

  var code = 'rueda_izq = ' + rueda_izq + ';\n' + 'rueda_drcha = ' + rueda_drcha + ';\n';
  return code;
};

Blockly.JavaScript['girar'] = function(block) {
  //debugger;

  // Guardamos los grados que debe girar el robot y la dirección a la que debe hacerlo
  var angle_grados = block.getFieldValue('grados');
  var dropdown_direccion = block.getFieldValue('direccion');

  var distancia_recorrer_360 = circunf_robot * (2 * 3.14);  // Distancia que recorrería el robot al dar una vuelta completa sobre sí mismo
  var distancia_reccorrer_X = (distancia_recorrer_360 * angle_grados) / 360;  // Distancia a recorrer según los grados dados por el usuario
  var num_vueltas_rueda = distancia_reccorrer_X / circunf_rueda;  // Num de vueltas que debe dar la rueda, para tener más info
  var num_vueltas_rueda_simple = num_vueltas_rueda.toFixed(2);  // Cogemos solo dos decimales

  // Indicamos la distancia que debe recorrer cada rueda. Según la dirección que indique el usuario pararemos una rueda o la otra
  if (dropdown_direccion == 'izq') {
    rueda_izq = 0;
    rueda_drcha = distancia_reccorrer_X;
  } else {
    rueda_drcha = 0;
    rueda_izq = distancia_reccorrer_X;
  }

  var code = 'rueda_drcha = ' + rueda_drcha +  ';\n' + 'rueda_izq = ' + rueda_izq + ';\n' + 'num_vueltas_rueda_simple = ' + num_vueltas_rueda_simple + ';\n';
  return code;
};


// Funcion que define los bloques que se mostrarán
Blockly.defineCustomBlocks = function(workspace) {
  //debugger;
  var xmlList = [];
  var izq = 'izq';

  if (this.laserSensor == true) {

    if (Blockly.Blocks['mover']) {

      var blockText = '<xml>' +
                      '<block type="mover">' +
                      '<field name="rotaciones">' + 5 + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);
    }
  }

  if (this.usSensor == true) {

    if (Blockly.Blocks['girar']) {

      var blockText = '<xml>' +
                      '<block type="girar">' +
                      '<field name="grados">' + 90 + '</field>' +
                      '<field name="direccion">' + izq + '</field>' +
                      '</block>' +
                      '</xml>';

      var block = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(block);
    }
  }

 return xmlList;

};