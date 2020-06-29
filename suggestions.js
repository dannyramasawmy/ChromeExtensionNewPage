// ================================================================
//  VARIABLES
// ================================================================
// Data is stored in arrays and objects in data.js.
// Define variables here when testing.
// Temporary/Test object for suggestions.
suggestionsObject = {
    "title":"Suggestions:",
    "containerType":"suggestions",
    "suggestionArray": [
        { "label":"A |",        "suggestions":["A0", "A1", "A2", "A3", "A4"]  },
        { "label":"B |",        "suggestions":["B0", "B1", "B2", "B3", "B4"]  },
        { "label":"C |",        "suggestions":["C0", "C1", "C2", "C3", "C4"]  },
        { "label":"D |",        "suggestions":["D0", "D1", "D2", "D3", "D4"]  },
        { "label":"E |",        "suggestions":["E0", "E1", "E2", "E3", "E4"]  },
    ]
}

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
    setElementID("welcomeMessage", randomArrayElement(myMsg))
    // Update background.
    changePic()
}

function updateSuggestions(index, suggestionsLabel) {
    // This function updates the suggestions of the specified index.
    // Create suggestion name.
    suggestionName = "suggestions" + index.toString()
    // Set the suggestion.
    setElementID(suggestionName, suggestionsLabel + " | " + randomArrayElement(window[suggestionName]) )
    // Return the suggestion name.
}

function searchText() {
    // This function searches whatever the user typed.
    // Replace inner html
    document.getElementById("helloNameElement").innerHTML = '                   \
        <form method="get" action="https://www.google.com/search">              \
            <input id="searchBox" type="text" name="q" size="31" value="" placeholder="Search ">      \
        </form> ' 
    // Apply focus to search box straight away.
    document.getElementById("searchBox").focus();
}

// ================================================================
//  RUN FUNCTIONS / MAIN SCRIPT
// ================================================================

// Set your name.
setElementID("myName", "Hello " + myName)
// When someone starts typing enter search box.
window.addEventListener(["keypress"], searchText, {once : true})
// If someone clicks the name then start searching.
document.getElementById("myName").addEventListener("click", searchText, {once : true})

// Set tab name.
setElementID("titleMessage", myName)
// Set date and time.
setElementID("dateTime", formatADT())
// Update picture.
changePic()

// Set welcome message.
setElementID("welcomeMessage"  , randomArrayElement(myMsg) )
// Update message with an event listener.
document.getElementById("welcomeMessage").addEventListener("click", function () {setElementID("welcomeMessage"  , randomArrayElement(myMsg) )} )


// Set suggestions.
for (i = 0; i < 5; i++) {
    // Set suggestions title.
    setElementID("suggestionsTitle", suggestionsTitle)
    // Update suggestions.
    updateSuggestions(i, suggestionsLabels[i])
    // Loop add event listeners for click to change the suggestion.
    suggestID = document.getElementById("suggestions"+String(i));
    // Use the .bind(this, arguments) to allow this to work in for-loop.
    suggestID.addEventListener("click", updateSuggestions.bind(this, i, suggestionsLabels[i]) );
}

// Set web links.
linksContainer = document.getElementById("linksContainer");
linksContainer.innerHTML = '<h1 class="hvrClr2">' + webLinksObject.title + '</h1>'
// Set web links.
for (i = 0; i < webLinksObject.linkArray.length; i++) {
    // Get the label and the link for that label from the object file.
    label = webLinksObject.linkArray[i].label;
    link = webLinksObject.linkArray[i].link;
    // Create HTML code.
    linksContainer.innerHTML = linksContainer.innerHTML + 
    '<h2> <a class="hvrClr1"' + 
    ' href="' +
    link + '">' +
    label +'</a> </h2>' ;    
}


// Every x seconds update welcome message and background.
var timeInterval = 30 // [seconds]
setInterval(timeKeep, timeInterval * 1000);
