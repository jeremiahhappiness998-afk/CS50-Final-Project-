// guided by CS50 DUCK DEBUGGER
//  for background services
// to collect message from popup and act it on the current web
function worker(message, sender, senderResponse) {
    if (message === "activate") {
        // activation

        chrome.tabs.sendMessage

    }

}
chrome.runtime.onMessage.addListener(worker);