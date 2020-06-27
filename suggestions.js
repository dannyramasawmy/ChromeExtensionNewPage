// ================================================================
//  VARIABLES
// ================================================================

// Your name.
var myName = "Danny"
// The input message.
var myMsg = ["What will you do today?","How many days till holiday?","What will you eat today?","How are you today?"]

// Name of the images.
var myImages = ["1","2","3","4","5","6","7","8"]


// The labels for each suggestion 1-5, each suggestion is an array of items.
var suggestionsLabels = ["Scale", "Key", "Pattern", "Progression", "Song"]
// Scale practice.
var suggestions0 = ["Ionian DI","Dorian Dii","Phrygian Diii",              
                "Lydian DIV","Mixolydian DV","Aeolian Dvi", "Locrian Dviii", 
                "Melodic Minor Mi","Dorian b2 Mii","Lydian Augemented MIII", 
                "Lydian b7 MIV","Aeolian Major (Mix b6) MV","Locrian n2 Mvi","Altered (super) MVII",
                "Harmonic Minor Hi","Dorian #4 Hiv","Phryigan Major HV","Diminished", 
                "Whole Tone","Lydian #2 Hvi","Symmetric Dominant","Major Pentatonic","Minor Pentatonic"]
// Key choice.                
var suggestions1 = ["C","G (1#)","D (2#'s)","A (3#'s)","E (4#'s)","B (5#'s)",
    "F# (6#'s)","Gb (6b's)","Db (5b's)","Ab (4b's)","Eb (3b's)","Bb (2b's)","F (1b)"]
// Practice pattern.
var suggestions2 = ["1-2-3","1-2-3-1","3-2-1-3","1-2-3-5","Arp 7","Triad",
                "1-2-3-4","Enclosed root","Enclosed 5th","Honeysuckle","4ths","5ths","6ths","7ths"]
// Practice progression.
var suggestions3 = ["iim7-V7-IM7","iim7b5-V7-im7","I-vim7-iim7-V7",
              "I-II7-iim7-V7","III7-VI7-II7-V7"]
// Songs to practice.
var suggestions4 = ["Autumn Leaves","Someday my Prince Will Come"
             ,"All of me", "Blue Bossa","Take the A Train",
             "So What","Round Midnight","Rhythm Changes",
              "All the things you are","Major 2-5-1","Minor 2-5-1",
             "Recordame","Stella by Starlight","Blues",
             "Body and Soul","Maiden Voyage","Fly to me the Moon","Footprints","Black Nile","How High the Moon"]


// weblinks 1:4 and their labels
var myLinkLabel = ["BBC News", "Favorite Music", "Email", "Software Toolbox", "Next Holiday!"]
var myLinks = ["https://www.bbc.com/",
    "https://www.youtube.com/watch?v=ECLoE-bw3Kw",
    "https://www.gmail.com",
    "https://dannyramasawmy.github.io/ElasticMatrix/",
    "https://en.wikipedia.org/wiki/Mauritius"]

// ================================================================
//  FUNCTIONS
// ================================================================

function setElementID(elementID, inputString) {
    // This function updates different element IDs
    document.getElementById(elementID).innerText = inputString;        
    }

function randomArrayElement(inputArray) {
    // This function takes an array and returns a random element from that array.
    var elementOut = inputArray[Math.floor( inputArray.length*Math.random() ) ]
    return elementOut;
    }

function formatADT() {
    // This function sets the date and time.
    var dt = new Date();
    // Format date/time string.
    var dateString =  "" 
        + (("0"+dt.getDate()).slice(-2)) 
        +":"+ (("0"+(dt.getMonth()+1)).slice(-2)) 
        +":"+ (dt.getFullYear()) +"       |   "
        + (("0"+dt.getHours()).slice(-2)) +":"
        + (("0"+dt.getMinutes()).slice(-2));
    // Return the date string.
    return dateString;
}

function changePic() {
    // This function updates the background images.
    var backgroundDirectory = "backgroundPhotos/" 

    // Get the background image element, choose a random image and update.
    document.getElementById("myBackgroundImage").style = 
        "background-image: url(" + backgroundDirectory
        + myImages[Math.floor(myImages.length * Math.random())] + ".jpg)"
}

function timeKeep() {
    // This function updates background and message. 
    // Update the date and time.
    setElementID("dateTime", formatADT())

    // Set the welcome message.
    setElementID("questionMessage", randomArrayElement(myMsg))
    changePic()
}

// ================================================================
//  RUN FUNCTIONS
// ================================================================

// Set your name.
setElementID("myName", "Hello " + myName)
setElementID("titleMessage", myName + "'s New Page")
changePic()

// Set date and time.
setElementID("dateTime", formatADT())

// Set welcome message.
setElementID("questionMessage"  , randomArrayElement(myMsg) )

// Set suggestions.
for (i = 0; i < 5; i++) {
    // Create suggestion name.
    suggestionName = "suggestions" + i.toString()
    // Set the suggestion.
    setElementID(suggestionName, suggestionsLabels[i] + " | " + randomArrayElement(window[suggestionName]) )
}

// Set web links.
for (i = 0; i < 5; i++) {
    // Make the weblink ID.
    tmpID = "webLink"+i.toString();
    // Get the element.
    tmpElement = document.getElementById(tmpID);
    // Set the inner html.
    tmpElement.innerHTML = myLinkLabel[i];
    // Set the web link address.
    tmpElement.href = myLinks[i];
}
 
// Every x seconds update welcome message and background.
var timeInterval = 10 // [seconds]
setInterval(timeKeep, timeInterval * 1000);


