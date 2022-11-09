
document.addEventListener('DOMContentLoaded', function () {
   
    var checkPageButton = document.getElementById('clickIt');
   
    checkPageButton.addEventListener('click', function () {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id, allFrames: true },
                files: ['cscript.js'],
            });
            chrome.storage.local.get("images", function(data) {
                if(typeof data.images == "undefined") {
    
                } else {
                    var noAltCount = 0;
                    JSON.parse(data.images).forEach(function(el) {
                        if(el[1] == "") {
                            noAltCount++;
                            document.getElementById("result").innerHTML += "No alt text"
                        } else {    
                            document.getElementById("result").innerHTML += el;
                        }
                        document.getElementById('result').innerHTML += '<br>';
                    });
                    document.getElementById("result").innerHTML += "No alt text count: " + noAltCount;
                }
            });
        });
    }, false);

}, false);