function transfer(tablink) {
    // Set the text of the element with id "p1" to tablink
    document.querySelector("#p1").textContent = tablink;

    // Create JSON object with URL data
    var requestData = {
        "url": tablink
    };

    // Send JSON data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/predict", true);
    xhr.setRequestHeader("Content-Type", "application/json"); // Set Content-Type header to JSON
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Request successful, update popup content
                var responseText = xhr.responseText;
                document.querySelector("#div1").textContent = responseText; // Directly use responseText

                console.log(responseText); // Log the string directly
                var responseObject = JSON.parse(responseText);
                changeBackgroundColor(responseObject.prediction); // Assuming response contains 'prediction' field
            } else {
                // Request failed, handle error
                console.error("Error: " + xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify(requestData)); // Send JSON data
}

// Example changeBackgroundColor function for testing
function changeBackgroundColor(type) {
    var body = document.querySelector("body");
    switch(type.toLowerCase()) {
        case 'phishing':
            body.style.backgroundColor = "red"; // Light red
            break;
        case 'benign':
            body.style.backgroundColor = "#aaffaa"; // Light green
            break;
        case 'defacement':
            body.style.backgroundColor = "#ffffaa"; // Light yellow
            break;
        case 'malware':
            body.style.backgroundColor = "#ffccaa"; // Light orange
            break;
        default:
            body.style.backgroundColor = "#000000"; // Default to white
    }
}


$(document).ready(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tablink = tabs[0].url;
        transfer(tablink);
    });
});
