if (app.documents.length !== 0) {
  var doc = app.activeDocument;
  var quicksavePath = "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/";
  var neverSaved = false;
  var docPath = "";

  var monikerList = [
    "grokable",
    "gnarly",
    "clean",
    "groggy",
    "sleepy",
    "deadly",
    "dedicated",
    "industrious",
    "secret",
    "miss",
    "mister",
    "completely",
    "one",
    "the",
    "stinky",
    "wicked",
    "towering",
    "friendly",
    "quick",
    "fast",
    "rough",
    "thin",
    "fat",
    "scrawny",
    "slow",
    "funny",
    "ecstatic",
    "surprised",
    "dejected",
    "curious",
    "relaxed",
    "anxious",
    "innocent",
    "smart",
    "silly",
    "honest",
    "loyal",
    "brave",
    "ambitious",
    "generous",
    "calm",
    "lucky",
    "reluctant",
    "meticulous",
    "persistent",
    "foolish",
    "confident",
    "wild",
    "courageous",
    "jolly",
    "joyful",
    "determined",
    "dynamic",
    "enchanting",
    "enthusiastic",
    "exotic",
    "gutsy",
    "happy",
    "inquisitive",
    "jovial",
    "kind",
    "lively",
    "nimble",
    "obedient",
    "plucky",
    "quirky",
    "ravishing",
    "sincere",
    "thoughtful",
    "unusual",
    "vivacious",
    "wacky",
    "zealous",
  ];

  var adjectiveList = [
    "scrappy",
    "contemptuous",
    "bequeathed",
    "sparkling",
    "sapient",
    "suave",
    "sexy",
    "villainous",
    "heroic",
    "olympian",
    "pirate",
    "kungfu",
    "badass",
    "mojo",
    "dry",
    "crumbling",
    "wet",
    "slimy",
    "brittle",
    "solid",
    "spooky",
    "funny",
    "adorable",
    "scary",
    "bitchin",
    "ancient",
    "modern",
    "foreign",
    "domestic",
    "urban",
    "rural",
    "sassy",
    "silly",
    "spoiled",
    "rich",
    "poor",
    "smart",
    "dumb",
    "lazy",
    "busy",
    "careful",
    "careless",
    "risk-taking",
    "shy",
    "outgoing",
    "serious",
    "light-hearted",
    "evil",
    "kind",
    "creative",
    "destructive",
    "healthy",
    "sick",
    "dreamy",
    "sensitive",
    "lazy",
    "energetic",
    "short",
    "tall",
    "medium",
    "average",
    "gloomy",
    "bright",
    "dark",
    "light",
    "cool",
    "warm",
    "drab",
    "colorful",
    "fluffy",
    "smooth",
    "rough",
    "odd",
    "typical",
    "rare",
    "common",
    "straight",
    "curved",
    "circular",
    "square",
    "triangular",
    "american",
    "french",
    "italian",
    "british",
    "mexican",
    "spanish",
    "chinese",
    "japanese",
    "canadian",
  ];

  var nounList = [
    "pickle",
    "curmudgeon",
    "monstrosity",
    "froggy",
    "fighter",
    "alien",
    "totem",
    "trophy",
    "peach",
    "spitsculpt",
    "experiment",
    "test",
    "table",
    "charriot",
    "relic",
    "tome",
    "pal",
    "friend",
    "flatmate",
    "contender",
    "mobile",
    "beastie",
    "muffin",
    "squirrel",
    "ninja",
    "plushy",
    "block",
    "blob",
    "gak",
    "thing",
    "bust",
    "sculpt",
    "model",
    "sketch",
    "robot",
    "dragon",
    "goblin",
    "zombie",
    "elf",
    "dwarf",
    "vampire",
    "werewolf",
    "fairy",
    "witch",
    "wizard",
    "mummy",
    "ghoul",
    "centaur",
    "mermaid",
    "unicorn",
    "pegasus",
    "griffin",
    "kraken",
    "orc",
    "troll",
    "golem",
    "pixie",
    "sprite",
    "nymph",
    "gorgon",
    "sphinx",
    "phoenix",
    "chimera",
    "minotaur",
    "sasquatch",
    "yeti",
    "alien",
    "cyborg",
    "android",
    "ninja",
    "samurai",
    "pirate",
    "knight",
    "cowboy",
    "bandit",
    "mage",
    "paladin",
    "monk",
    "assassin",
    "druid",
    "bard",
    "ranger",
    "cleric",
    "warlock",
    "sorcerer",
    "alchemist",
    "jester",
    "templar",
    "berserker",
    "huntsman",
    "blacksmith",
    "barbarian",
    "gladiator",
    "musketeer",
    "necromancer",
    "shaman",
    "witch-doctor",
    "hermit",
    "explorer",
    "viking",
    "nomad",
    "chieftain",
    "captain",
    "duke",
    "emperor",
    "king",
    "prince",
    "sultan",
    "pharaoh",
    "tsar",
    "kaiser",
    "shogun",
    "warlord",
    "chieftain",
    "overlord",
    "lord",
    "master",
    "guru",
    "sage",
    "prophet",
    "wizard",
    "elder",
    "patriarch",
    "matriarch",
    "priest",
    "bishop",
    "cardinal",
    "pope",
  ];

  // --------------------------------------------------------
  // if (app.documents.length !== 0) {
  //   var doc = app.activeDocument;
  //   var quicksavePath = "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/";
  //   var neverSaved = false;
  //   var docPath = "";

  //   // ... List definitions ...

  var moniker = monikerList[Math.floor(Math.random() * monikerList.length)];
  var adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  var noun = nounList[Math.floor(Math.random() * nounList.length)];
  var uniqueFilename = moniker + "." + adjective + "." + noun;

  var assetName;
  var currentVersion = 0;

  try {
    // Improved regular expression to strictly match the versioning pattern
    var match = doc.name.match(/(.*)(_v\.)(\d{3})(\.psd)$/i);
    if (doc.path && match) {
      assetName = match[1];
      currentVersion = parseInt(match[3], 10);
      docPath = doc.path + "/";
    } else if (doc.path) {
      assetName = doc.name.split(".")[0];
      docPath = doc.path + "/";
    }
  } catch (e) {
    assetName = uniqueFilename;
    docPath = quicksavePath;
    neverSaved = true;
  }

  var highestVersion = currentVersion;
  if (neverSaved) {
    highestVersion = -1;
  }

  function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  var newFilename = docPath + assetName + "_v." + zeroPad(highestVersion, 3) + ".psd";
  var pngExportPath = docPath + assetName + ".png";

  var files = Folder(docPath).getFiles();

  for (var i = 0; i < files.length; i++) {
    if (files[i] instanceof File) {
      var fileMatch = files[i].name.match(/(.*)(_v\.)(\d{3})(\.psd)$/i);
      if (fileMatch && fileMatch[1].toLowerCase() === assetName.toLowerCase()) {
        var version = parseInt(fileMatch[3], 10);
        if (version > highestVersion) {
          highestVersion = version;
        }
      }
    }
  }

  highestVersion++;

  newFilename = docPath + doc.name;

  // Export as PNG
  var pngFile = new File(pngExportPath);
  var exportOptions = new ExportOptionsSaveForWeb();

  exportOptions.format = SaveDocumentType.PNG;
  exportOptions.PNG8 = false; // Use PNG-24
  exportOptions.transparency = true;
  exportOptions.quality = 100;

  doc.exportDocument(pngFile, ExportType.SAVEFORWEB, exportOptions);

  // Save as PSD
  saveFile = new File(newFilename);
  doc.saveAs(saveFile);
}
