// chrome.runtime.onMessage.addListener(function(request) {
//   console.log(request)
  /*
  chrome.tabs.create({
      url: chrome.extension.getURL('popup.html'),
      active: false
  }, function(tab) {
      // After the tab has been created, open a window to inject the tab
      console.log(tab, request)
      /*
      chrome.windows.create({
          tabId: tab.id,
          type: 'popup',
          focused: true
          // incognito, top, left, ...
      });
    });
    */
 

  /*if (request.type === 'request_password') {
      chrome.tabs.create({
          url: chrome.extension.getURL('dialog.html'),
          active: false
      }, function(tab) {
          // After the tab has been created, open a window to inject the tab
          chrome.windows.create({
              tabId: tab.id,
              type: 'popup',
              focused: true
              // incognito, top, left, ...
          });
      });
  }*/
// });
// function setPassword(password) {
//   // Do something, eg..:
//   console.log(password);
// };