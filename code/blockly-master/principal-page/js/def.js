// FICHERO DE DEFINICIÓN DE LOS BLOQUES

/********** LOGICA **********/
Blockly.Blocks['si_hacer'] = {
  init: function() {
    this.appendValueInput("si")
        .setCheck(['Boolean', 'Number', 'String'])
        .appendField("si sensor");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","=="], ["<","<"], [">",">"], ["<=","<="], [">=",">="], ["!=","!="]]), "symbol");
    this.appendValueInput("valor")
        .setCheck(['Boolean', 'Number', 'String']);
    this.appendStatementInput("hacer")
        .setCheck(null)
        .appendField("hacer");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#db6f2a");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sino'] = {
  init: function() {
    this.appendStatementInput("sino")
        .setCheck(null)
        .appendField("sino");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#db6f2a");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sino_si_hacer'] = {
  init: function() {
    this.appendValueInput("sino_si")
        .setCheck(['Boolean', 'Number', 'String'])
        .appendField("sino si sensor");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","=="], ["<","<"], [">",">"], ["<=","<="], [">=",">="], ["!=","!="]]), "symbol");
    this.appendValueInput("valor")
        .setCheck(['Boolean', 'Number', 'String']);
    this.appendStatementInput("hacer")
        .setCheck(null)
        .appendField("hacer");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#db6f2a");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['num_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("número aleatorio entre")
        .appendField(new Blockly.FieldTextInput("1"), "min")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("10"), "max");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/********** MOVIMIENTO **********/
Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avanzar")
        .appendField(new Blockly.FieldNumber(5, 1), "metros/seg")
        .appendField("metros por")
        .appendField(new Blockly.FieldNumber(5, 1), "segundos")
        .appendField("seg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#29A2C5");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['retroceder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Retroceder")
        .appendField(new Blockly.FieldNumber(5, 1), "metros/seg")
        .appendField("metros por")
        .appendField(new Blockly.FieldNumber(5, 1), "segundos")
        .appendField("seg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#29A2C5");
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
    this.setColour("#29A2C5");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detener movimiento");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#29A2C5");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/********* SENSORES **********/
Blockly.Blocks['sensor_laser'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sensor Láser nº")
        .appendField(new Blockly.FieldTextInput("1"), "num_sensor");
  this.setOutput(true, null);
  this.setColour("#DF9A13");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_contacto'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sensor de Contacto nº")
        .appendField(new Blockly.FieldTextInput("1"), "num_sensor");
    this.setOutput(true, null);
  this.setColour("#DF9A13");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_ultrasonido'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sensor de Ultrasonido nº")
        .appendField(new Blockly.FieldTextInput("1"), "num_sensor");
    this.setOutput(true, null);
  this.setColour("#DF9A13");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_infrarrojo'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sensor Infrarrojo nº")
        .appendField(new Blockly.FieldTextInput("1"), "num_sensor");
    this.setOutput(true, null);
  this.setColour("#DF9A13");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_laser2d'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Sensor Láser 2D nº")
        .appendField(new Blockly.FieldTextInput("1"), "num_sensor");
    this.setOutput(true, null);
  this.setColour("#DF9A13");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*Blockly.Blocks['sensor_contacto_laser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Sensor de Contacto","sensor_contacto"], ["Sensor Láser","sensor_laser"]]), "sensor");
    this.setOutput(true);
    this.setColour("#DF9A13");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/