// ================================================================
//  VARIABLES
// ================================================================
// Data is stored in arrays and objects in data.js.
// Define variables here when testing.

// ================================================================
//  FUNCTIONS
// ================================================================

function setElementID(elementID, inputString) {
    // This function updates different element IDs
    document.getElementById(elementID).innerText = inputString;        
    
    // DEBUG
    console.log("setElementID() is working.")
    }

function randomArrayElement(inputArray) {
    // This function takes an array and returns a random element from that array.
    var elementOut = inputArray[Math.floor( inputArray.length*Math.random() ) ]

    // DEBUG
    console.log("randomArrayElement() is working.")
    return elementOut;
    }

function formatADT() {
    // This function sets the date and time.
    var dt = new Date();
    // Format date/time string.
    var dateString =  "" 
        + (("0"+dt.getDate()).slice(-2)) 
        +"-"+ (("0"+(dt.getMonth()+1)).slice(-2)) 
        +"-"+ (dt.getFullYear()) +"       |   "
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
     
    // DEBUG    
    console.log("changePic is working.")
}

function timeKeep() {
    // This function updates background and message. 
    // Update the date and time.
    setElementID("dateTime", formatADT())

    // Set the welcome message.
    setElementID("welcomeMessage", randomArrayElement(myMsg))
   
    // Only change background if landscape, mobile is slower or less powerful.
    if (window.innerWidth > window.innerHeight) {
        // Update background.
        changePic()
    } 

    // Portrait photo id not
    if (window.innerWidth < window.innerHeight) {
        document.getElementById("myBackgroundImage").style = 
        "background-image: url(backgroundPhotos/port.jpg)"
    }

    // DEBUG
    console.log("timeKeep() is working.")
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

    // DEBUG
    console.log("searchText() is working.")
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

// Get SuggestionsContainer. IT WORKS!
newele = document.getElementById("suggestionsContainer")
// Create a title node.
node = document.createElement("H1")
node.className = "hvrClr2"
// Set the inner child.
node.innerHTML = suggestionsObject.title;
// Add the child
newele.appendChild(node)
// loop and add elements
for (let i = 0; i < suggestionsObject.suggestionArray.length; i++) {
    node = document.createElement("H2")
    setInnerHTML(node, i)

    node.className = "hvrclr1"
    node.addEventListener("click", setInnerHTML.bind(this, node, i) ) 
    newele.appendChild(node)
}

function setInnerHTML(node, i) {
    node.innerHTML = suggestionsObject.suggestionArray[i].label + " | "
    + randomArrayElement(suggestionsObject.suggestionArray[i].suggestions)
}

// Set spotify
spotifyElement = document.getElementById("spotify")
// create an iframe
spotFrame = document.createElement("iframe")
spotFrame.className = "spotify"
spotFrame.src = spotifyPlaylist
spotFrame.allow = "encrypted-media" 
spotFrame.frameborder="0" 
spotFrame.allowtransparency="true"
spotifyElement.appendChild(spotFrame)

// Every x seconds update welcome message and background.
var timeInterval = 30 // [seconds]
setInterval(timeKeep, timeInterval * 1000);


