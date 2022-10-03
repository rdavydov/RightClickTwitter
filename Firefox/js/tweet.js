function tweet(info, tab) {
    chrome.tabs.create({
        // url: "https://twitter.com/intent/tweet?text=" + info.selectionText.replace(/\s/g, '')
        url: "https://twitter.com/intent/tweet?text=" + info.selectionText
    }, function (tab) {
        chrome.tabs.executeScript(tab.id, {
            file: 'js/automate.js'
        });
    });
};

chrome.contextMenus.create({
    title: "Tweet: %s",
    contexts: ["selection"],
    onclick: tweet,
});

// End of file;