if (app.documents.length !== 0) {
  var doc = app.activeDocument;
  var quicksavePath = "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/";
  var neverSaved = false;
  var docPath = "";

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
  
    // Generate uniqueFilename at the beginning as you currently do
    var moniker = monikerList[Math.floor(Math.random() * monikerList.length)];
    var adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
    var noun = nounList[Math.floor(Math.random() * nounList.length)];
    var uniqueFilename = moniker + "." + adjective + "." + noun;

    // ... Your adjectiveList, nounList, and monikerList ...
  
    // If the file has been saved
    if (doc.saved) {
      docPath = doc.path + "/";
      // Use regex to match assetName and version
      var match = doc.name.match(/(.*)(_v\.)(\d+)/);
      var assetName = match[1];
      var versionNumber = match[3];
      var currentVersion = parseInt(versionNumber);
    } else {
      // Generate uniqueFilename for never saved files
      var moniker = monikerList[Math.floor(Math.random() * monikerList.length)];
      var adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
      var noun = nounList[Math.floor(Math.random() * nounList.length)];
      var assetName = moniker + "." + adjective + "." + noun;
      var currentVersion = -1;
      docPath = quicksavePath;
    }
  
    // Get all files in the folder
    var files = Folder(docPath).getFiles();
    var highestVersion = currentVersion;
  
    // Loop through the files to find the highest version
    for (var i = 0; i < files.length; i++) {
      if (files[i] instanceof File) {
        var fileMatch = files[i].name.match(/(.*)(_v\.)(\d+)/);
        // Check if the file begins with the assetName and contains a version
        if (fileMatch && fileMatch[1] === assetName) {
          var version = parseInt(fileMatch[3]);
          if (version > highestVersion) {
            highestVersion = version;
          }
        }
      }
    }
  
    // Increment the highest version for the next save
    highestVersion++;
  
    // Zero padding function
    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }
  
    // Prepare the new filename
    var newFilename = docPath + assetName + "_v." + zeroPad(highestVersion, 3) + ".psd";
    var pngExportPath = docPath + assetName  + ".png";
  
    // Export as PNG
    var pngFile = new File(pngExportPath);
    doc.exportDocument(pngFile, ExportType.SAVEFORWEB, undefined);
  
    // Save the file
    var saveFile = new File(newFilename);
    doc.saveAs(saveFile);
  }
  