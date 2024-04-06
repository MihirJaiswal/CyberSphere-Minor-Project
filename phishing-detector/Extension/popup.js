// background.js

// Function to send a request to the Flask API
function sendRequest(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:5000/predict", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              var response = JSON.parse(xhr.responseText);
              console.log("Prediction:", response.prediction);
              // Perform actions based on the prediction response
          } else {
              console.error("Request failed:", xhr.status);
          }
      }
  };
  xhr.send(JSON.stringify({ url: url }));
}

// Example usage: send a request to the Flask API when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
  sendRequest("https://www.cricbuzz.com/");
});
