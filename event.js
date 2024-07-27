var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        if (enabled && info.type == "main_frame" && info.url.split("?")[0].split("#")[0].endsWith("m3u8")) {
            var playerUrl = chrome.runtime.getURL('player.html') + "#" + info.url;
            chrome.tabs.create({url: playerUrl}, ()=>{
                chrome.tabs.remove(info.tabId);
            });
            return {redirectUrl: playerUrl}
        }
    },
    {urls: ["<all_urls>"]},
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command == 'CMD_PLAY_M3U8') {
        var playerUrl = chrome.runtime.getURL('player.html') + "#" + request.url
        chrome.tabs.create({url: playerUrl});
    }
});

