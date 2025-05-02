// Utility Scripts for Inventory System

// Replace negative quantities with 0
function replaceNegativeQuantities() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var databaseSheet = ss.getSheetByName("Database");
  var locationInventorySheet = ss.getSheetByName("Location-Based Inventory");

  var databaseData = databaseSheet.getDataRange().getValues();
  var locationData = locationInventorySheet.getDataRange().getValues();

  var dbQuantityIndex = databaseData[0].indexOf("Qty");
  var locQuantityIndex = locationData[0].indexOf("Quantity");

  for (var i = 1; i < databaseData.length; i++) {
    if (databaseData[i][dbQuantityIndex] < 0) databaseData[i][dbQuantityIndex] = 0;
  }

  for (var i = 1; i < locationData.length; i++) {
    if (locationData[i][locQuantityIndex] < 0) locationData[i][locQuantityIndex] = 0;
  }

  databaseSheet.getRange(1, 1, databaseData.length, databaseData[0].length).setValues(databaseData);
  locationInventorySheet.getRange(1, 1, locationData.length, locationData[0].length).setValues(locationData);
}

function removeFiredTechs() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var firedTechs = ["TEMPRID FX"];

  sheets.forEach(sheet => {
    var data = sheet.getDataRange().getValues();
    var newData = data.filter(row => !firedTechs.some(tech => row.includes(tech)));

    if (newData.length < data.length) {
      sheet.clearContents();
      sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
    }
  });

  SpreadsheetApp.getUi().alert("Fired technicians have been removed from all sheets.");
}

function logNegativeQuantities() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var databaseSheet = ss.getSheetByName("Database");
  var logSheet = ss.getSheetByName("Negative Quantities");

  if (!logSheet) {
    logSheet = ss.insertSheet("Negative Quantities");
    logSheet.appendRow(["Timestamp", "Material Code", "Material Name", "Negative Quantity", "Location"]);
  }

  var data = databaseSheet.getDataRange().getValues();
  var timestamp = new Date();
  var logData = [];

  for (var i = 1; i < data.length; i++) {
    var materialCode = data[i][2];
    var materialName = data[i][3];
    var quantity = data[i][4];
    var location = data[i][1];

    if (typeof quantity === 'number' && quantity < 0) {
      logData.push([timestamp, materialCode, materialName, quantity, location]);
    }
  }

  if (logData.length > 0) {
    logSheet.getRange(logSheet.getLastRow() + 1, 1, logData.length, logData[0].length).setValues(logData);
    SpreadsheetApp.getUi().alert("Negative quantities logged successfully!");
  } else {
    SpreadsheetApp.getUi().alert("No negative quantities found.");
  }
}
