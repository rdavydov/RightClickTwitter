/* TODO:
    - extension option to autoclick the Tweet button on the opened page
*/

function tweet(info, tab) {
    chrome.tabs.create({
        // url: "https://twitter.com/intent/tweet?text=" + info.selectionText.replace(/\s/g, '')
        url: "https://twitter.com/intent/tweet?text=" + info.selectionText
    }, function (tab) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            world: chrome.scripting.ExecutionWorld.MAIN,
            files: ['js/automate.js']
        });
    });
};

chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: "tweet",
        title: "Tweet: %s",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "tweet") {
        tweet(info, tab);
    }
});

// End of file;