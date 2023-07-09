var doc = activeDocument;
var filepath = doc.fullName.fsName; // Getting the path of the document including the document itself

// Get the folder of the current script
var scriptFolder = (new File($.fileName)).parent.fsName;

// Construct the path to the batch file
var batFile = new File(scriptFolder + "\\OpenFolder.bat");

// Write the command to a temporary BAT file and execute it
var tempFile = new File(scriptFolder + "/~temp.bat");
tempFile.open("w");
tempFile.writeln('"' + batFile.fsName + '" "' + filepath + '"');
tempFile.close();
tempFile.execute();
// tempFile.remove();  // Uncomment this line if you want to delete the temporary batch file after execution
