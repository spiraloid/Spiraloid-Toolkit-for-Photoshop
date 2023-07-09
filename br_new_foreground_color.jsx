#target photoshop

if (app.documents.length !== 0) {
    var doc = app.activeDocument;

    // Generate random bright and saturated color
    // var colorMax = [255, Math.floor(Math.random() * 106) + 150, Math.floor(Math.random() * 106) + 150];
    // colorMax = shuffleArray(colorMax); // Randomize the order
    // var red = colorMax[0];
    // var green = colorMax[1];
    // var blue = colorMax[2];

    // Begin recording a new action
    var idMk = charIDToTypeID("Mk  ");
    var desc47 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref27 = new ActionReference();
    var idcontentLayer = stringIDToTypeID("contentLayer");
    ref27.putClass(idcontentLayer);
    desc47.putReference(idnull, ref27);
    var idUsng = charIDToTypeID("Usng");
    var desc48 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc49 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc50 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    // desc50.putDouble(idRd, red);
    // var idGrn = charIDToTypeID("Grn ");
    // desc50.putDouble(idGrn, green);
    // var idBl = charIDToTypeID("Bl  ");
    // desc50.putDouble(idBl, blue);
    // var idRGBC = charIDToTypeID("RGBC");
    // desc49.putObject(idClr, idRGBC, desc50);
    var idsolidColorLayer = stringIDToTypeID("solidColorLayer");
    desc48.putObject(idType, idsolidColorLayer, desc49);
    var idcontentLayer = stringIDToTypeID("contentLayer");
    desc47.putObject(idUsng, idcontentLayer, desc48);
    executeAction(idMk, desc47, DialogModes.NO);

    // Add layer mask
    var idMk = charIDToTypeID( "Mk  " );
    var desc21 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idMsk = charIDToTypeID( "Msk " );
    desc21.putClass( idNw, idMsk );

} else {
    alert("There are no open documents");
}

// Shuffle function
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
