
document.addEventListener('DOMContentLoaded', function () {

    var checkPageButton = document.getElementById('clickIt');
    function parseNested(str) {
        try {
            return JSON.parse(str, (_, val) => {
                if (typeof val === 'string')
                    return parseNested(val)
                return val
            })
        } catch (exc) {
            return str
        }
    }

    checkPageButton.addEventListener('click', function () {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id, allFrames: true },
                files: ['cscript.js'],
            });
            chrome.storage.local.get("images", function (data) {
                if (typeof data.images == "undefined") {

                } else {
                    // var noAltCount = 0;
                    // JSON.parse(data.images).forEach(function(el) {
                    //     if(el[1] == "") {
                    //         noAltCount++;
                    //         document.getElementById("result").innerHTML += "No alt text"
                    //     } else {    
                    //         document.getElementById("result").innerHTML += el;
                    //     }
                    //     document.getElementById('result').innerHTML += '<br>';
                    // });
                    // document.getElementById("result").innerHTML += "No alt text count: " + noAltCount;
                }
            });

            chrome.storage.local.get("contrast", function (data) {
                if (typeof data.contrast == "undefined") {

                    alert('No contrast data');
                } else {

                    for (const [key, value] of Object.entries(JSON.parse(data.contrast))) {
                        // alert(value["contrastData"]);
                        document.getElementById("result").innerHTML += value["contrastData"];
                        document.getElementById('result').innerHTML += '<br>';
                    }

                }
            });
        });
    }, false);

}, false);