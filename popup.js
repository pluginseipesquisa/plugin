// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
// function doStuffWithDom(domContent) {
//     console.log('I received the following DOM content:\n' + domContent);
// }

// When the browser-action button is clicked...
// chrome.browserAction.onClicked.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });



function listenClick() {
//   const button = document.getElementById('get-data');
//   button.addEventListener('click', () => {
//     chrome.runtime.getBackgroundPage(function(bgWindow) {
      
//       chrome.runtime.sendMessage({rt:chrome.runtime});
//       //bgWindow.setPassword('password');
//       //window.close();     // Close dialog
//     })
//   })
  
  
  const button = document.getElementById('get-data');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/get-data.js'
    }, function (results) {
      console.log(results);
      const popup = document.querySelector("#janela-popup");
      popup.insertAdjacentHTML("beforeend", `<div> ${results[0]} </div>`)
      // popup.insertAdjacentElement("beforeend", result)
      // I use the user selection for another purpose but for simplicity lets just log the selection
    });

    const  updateTextTo = document.getElementById("janela-popup").value;
    chrome.storage.local.set({
        updateTextTo: updateTextTo
    }, function () {
        chrome.tabs.executeScript({
            file: 'scripts/get-data.js'
        });
    });
    // , function (return) {
    //   console.log(return);
    //   // I use the user selection for another purpose but for simplicity lets just log the selection
    // });
  });
  
};






listenClick();

