function openNewWindow(tab) {
        chrome.windows.create({"url":tab.url, "incognito": !tab.incognito, "focused": true, "state": "maximized"});
}
chrome.action.onClicked.addListener(openNewWindow);

chrome.runtime.onInstalled.addListener(function(details) {

    if (details.reason == "install") {
          chrome.tabs.create({ "url": "https://onlinetoolstack.com"});
    }
  });



