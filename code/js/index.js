var demoWorkspace = Blockly.inject('blocklyDiv', {
    media: 'media/',
    toolbox: document.getElementById('toolbox')
});

demoWorkspace.registerToolboxCategoryCallback('RobotBlocks', Blockly.defineRobotBlocks); //con una funcion de JS registramos una categoria RobotBlocks la cual dependera de la funcion defineRobotBlocks

demoWorkspace.registerToolboxCategoryCallback('SensorBlocks', Blockly.defineSensorBlocks);
demoWorkspace.registerToolboxCategoryCallback('LogicSensorBlocks', Blockly.defineLogicSensorBlocks);

function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  alert(code);
}

function runCode() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';

  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

  /****************** Generador de fichero con el código  de los bloques *******************/
  var textToWrite = code;
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var fileNameToSaveAs = "codigo.js";
  var downloadLink = document.createElement("a");

  downloadLink.download = fileNameToSaveAs;
  window.URL = window.URL || window.webkitURL;

  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.style.display = "none";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  /*****************************************************************************************/

}