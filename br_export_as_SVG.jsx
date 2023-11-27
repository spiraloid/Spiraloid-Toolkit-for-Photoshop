#target photoshop

// Active Document
var doc = app.activeDocument;

// Directory of the active document
var dir = decodeURI(doc.path);

// Define the action that triggers the custom keyboard shortcut
var actionSet = "Custom"; // Replace with your action set name
var actionName = "Copy as SVG"; // Replace with your action name

for (var i = 0; i < doc.layers.length; i++) {
    var layer = doc.layers[i];

    // Check if the layer is a shape layer and if it has transparency
    if (layer.kind == LayerKind.SOLIDFILL && layer.transparentPixelsLocked == false) {
        // Make the layer active
        doc.activeLayer = layer;
        
        // Trigger the action that copies the path as SVG to the clipboard
        app.doAction(actionName, actionSet);
        
        // Generate a unique filename for each path
        var fileName = layer.name.replace(/[\/\\:*?"<>|]/g, '');
        
        // The PowerShell script content
        var psScriptContent = [
          'Start-Sleep -Seconds 3',  // Wait for 0.5 seconds
          'Get-Clipboard | Out-File -FilePath .\\' + fileName + '.txt',
          'Rename-Item -Path .\\' + fileName + '.txt -NewName ' + fileName + '.svg'
        ].join('\n');
        
        // Create the PowerShell script
        var psScriptFile = new File(dir + "/convert_clipboard_content.ps1");
        psScriptFile.open('w');
        psScriptFile.write(psScriptContent);
        psScriptFile.close();
        
        // Run the PowerShell script
        var cmdCommand = "powershell.exe -ExecutionPolicy Bypass -File " + psScriptFile.fullName;
        app.system(cmdCommand); // updated line

        // Delete the PowerShell script
        psScriptFile.remove();
    }
}
