if (app.documents.length !== 0) {
  var doc = app.activeDocument;
  var quicksavePath = "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/";
  
  var monikerList = [
    'grokable', 'gnarly', 'clean', 'groggy', 'sleepy', 'deadly', 'dedicated', 'industrious', 'secret', 'miss', 'mister', 
    'completely', 'one', 'the', 'stinky', 'wicked', 'towering', 'friendly', 'quick', 'fast', 'rough', 'thin', 'fat', 'scrawny', 'slow',
    'funny', 'ecstatic', 'surprised', 'dejected', 'curious', 'relaxed', 'anxious', 'innocent', 'smart', 'silly', 'honest', 'loyal', 
    'brave', 'ambitious', 'generous', 'calm', 'lucky', 'reluctant', 'meticulous', 'persistent', 'foolish', 'confident', 'wild', 
    'courageous', 'jolly', 'joyful', 'determined', 'dynamic', 'enchanting', 'enthusiastic', 'exotic', 'gutsy', 'happy', 'inquisitive', 
    'jovial', 'kind', 'lively', 'nimble', 'obedient', 'plucky', 'quirky', 'ravishing', 'sincere', 'thoughtful', 'unusual', 'vivacious', 'wacky', 'zealous'];
  
  var adjectiveList = [
    'scrappy', 'contemptuous', 'bequeathed', 'sparkling', 'sapient', 'suave', 'sexy', 'villainous', 'heroic', 'olympian', 'pirate', 
    'kungfu', 'badass', 'mojo', 'dry', 'crumbling', 'wet', 'slimy', 'brittle', 'solid', 'spooky', 'funny', 'adorable', 'scary', 'bitchin',
    'ancient', 'modern', 'foreign', 'domestic', 'urban', 'rural', 'sassy', 'silly', 'spoiled', 'rich', 'poor', 'smart', 'dumb', 'lazy', 
    'busy', 'careful', 'careless', 'risk-taking', 'shy', 'outgoing', 'serious', 'light-hearted', 'evil', 'kind', 'creative', 'destructive', 
    'healthy', 'sick', 'dreamy', 'sensitive', 'lazy', 'energetic', 'short', 'tall', 'medium', 'average', 'gloomy', 'bright', 'dark', 
    'light', 'cool', 'warm', 'drab', 'colorful', 'fluffy', 'smooth', 'rough', 'odd', 'typical', 'rare', 'common', 'straight', 'curved', 
    'circular', 'square', 'triangular', 'American', 'French', 'Italian', 'British', 'Mexican', 'Spanish', 'Chinese', 'Japanese', 'Canadian'];
  
  var nounList = [
    'pickle', 'curmudgeon', 'monstrosity', 'froggy', 'fighter', 'alien', 'totem', 'trophy', 'peach', 'spitsculpt', 'experiment', 'test', 
    'table', 'charriot', 'relic', 'tome', 'pal', 'friend', 'flatmate', 'contender', 'mobile', 'beastie', 'muffin', 'squirrel', 'ninja', 
    'plushy', 'block', 'blob', 'gak', 'thing', 'bust', 'sculpt', 'model', 'sketch', 'robot', 'dragon', 'goblin', 'zombie', 'elf', 'dwarf',
    'vampire', 'werewolf', 'fairy', 'witch', 'wizard', 'mummy', 'ghoul', 'centaur', 'mermaid', 'unicorn', 'pegasus', 'griffin', 'kraken',
    'orc', 'troll', 'golem', 'pixie', 'sprite', 'nymph', 'gorgon', 'sphinx', 'phoenix', 'chimera', 'minotaur', 'sasquatch', 'yeti', 
    'alien', 'cyborg', 'android', 'ninja', 'samurai', 'pirate', 'knight', 'cowboy', 'bandit', 'mage', 'paladin', 'monk', 'assassin', 
    'druid', 'bard', 'ranger', 'cleric', 'warlock', 'sorcerer', 'alchemist', 'jester', 'templar', 'berserker', 'huntsman', 'blacksmith',
    'barbarian', 'gladiator', 'musketeer', 'necromancer', 'shaman', 'witch-doctor', 'hermit', 'explorer', 'viking', 'nomad', 'chieftain',
    'captain', 'duke', 'emperor', 'king', 'prince', 'sultan', 'pharaoh', 'tsar', 'kaiser', 'shogun', 'warlord', 'chieftain', 'overlord', 
    'lord', 'master', 'guru', 'sage', 'prophet', 'wizard', 'elder', 'patriarch', 'matriarch', 'priest', 'bishop', 'cardinal', 'pope'];
  
  
  var moniker = monikerList[Math.floor(Math.random() * monikerList.length)];
  var adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  var noun = nounList[Math.floor(Math.random() * nounList.length)];
  var uniqueFilename = moniker + "." + adjective + "." + noun;

  var file = app.activeDocument;
  var fileFolder = quicksavePath;
  var extension = "." + file.name.split(".").pop();
  var basename = file.name.substr(0, file.name.lastIndexOf('.'));
  var currentVersion = "";
  var assetName = "";
  var newFilename = "";
  var highestVersion = 0;

  var scriptFile = new File($.fileName); // Get the current script file
  var scriptFolder = scriptFile.parent; // Get the folder of the script file

  // // Create log file
  // var logFile = new File(scriptFolder + "/log.txt");
  // logFile.open("w"); // "w" mode overwrites existing file or creates a new one

  // // Log message function
  // function logMessage(message) {
  //   logFile.writeln(message);
  // }

  var folder = Folder(quicksavePath);
  var fileNames = [];
  if (folder.exists) {

  if (!doc.saved) {
    neverSaved = true;
    var isUnique = false;
    while (!isUnique) {
      isUnique = true;
      for (var i = 0; i < fileNames.length; i++) {
        if (fileNames[i].indexOf(uniqueFilename) !== -1) {
          isUnique = false;
          moniker = monikerList[Math.floor(Math.random() * monikerList.length)];
          adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
          noun = nounList[Math.floor(Math.random() * nounList.length)];
          uniqueFilename = moniker + "." + adjective + "." + noun;
          break;
        }
      }
    }
    assetName = uniqueFilename;
    newFilename = quicksavePath + assetName + "_v." + zeroPad(0, 3) + ".psd";
  }
  else {
    var files = folder.getFiles();
    for (var i = 0; i < files.length; i++) {
      if (files[i] instanceof File) {
        var fileName = files[i].name;
        fileNames.push(fileName);
        // logMessage("  - " + fileName);
        if (fileName.indexOf(assetName + "_v.") > -1) {
          var versionString = fileName.split('_v.')[1].split('.')[0];
          var blendStringFragments = basename.split('_v.');
          assetName = blendStringFragments[0];
          // logMessage("Before parsing: " + versionString);
          var versionNumber = parseInt(versionString, 10); // Parsing in base 10
          // logMessage("After parsing: " + versionNumber);
          highestVersion = versionNumber + 1;
          currentVersion = versionString;
          newFilename = quicksavePath + assetName + "_v." + zeroPad(highestVersion, 3) + extension;
        }
      }
    }
  }
}

  // Zero padding function
  function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  // // Log variables
  // logMessage("Variables:");
  // logMessage("  - assetName: " + assetName);
  // logMessage("  - currentVersion: " + currentVersion);
  // logMessage("  - highestVersion: " + highestVersion);
  // // var incrementedVersion = zeroPad((parseInt(currentVersion, 10) + 1), 3);
  // // logMessage("  - incrementedVersion: " + incrementedVersion);
  // logMessage("  - newFilename: " + newFilename);

  // logFile.close(); // Don't forget to close the log file after writing


  // Export as PNG
  var pngExportPath = fileFolder + assetName + ".png";
  var pngFile = new File(pngExportPath);
  doc.exportDocument(pngFile, ExportType.SAVEFORWEB, undefined);


  // Save the file
  var saveFile = new File(newFilename);
  doc.saveAs(saveFile);
  

}
