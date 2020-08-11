// test chrome storage
chrome.storage.sync.set({TestData:"hello world"}, function() {console.log("set danny")} )


chrome.storage.sync.get({TestData:"~DefaultValue"}, function(data) {
    console.log("got danny")
    spotty = document.getElementById("spotify")
    newH1 = document.createElement("H2")
    newH1.innerHTML = data.TestData
    spotty.appendChild(newH1)
} )


