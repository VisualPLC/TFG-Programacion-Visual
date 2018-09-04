function documentLoaded (e) {
  var sXML = new XMLSerializer().serializeToString(e.target); // Gives querydata.xml contents as string
}

var xmlDoc = document.implementation.createDocument("", "", null);
xmlDoc.addEventListener("load", documentLoaded, false);
xmlDoc.load('config_robot.xml');