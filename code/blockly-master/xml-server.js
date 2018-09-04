function LeerXml (fichXML) {
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

}

