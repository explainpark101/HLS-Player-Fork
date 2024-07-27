//

function play_url(url) {
    var playerUrl = chrome.runtime.getURL('player.html') + "#" + url;
    chrome.tabs.create({url: playerUrl});
}

$(document).ready(function () {
    $("#btn_play").click(function () {
        var url = $("#url").val();
        if (url == "") {
            return;
        } else {
            play_url(url);
        }
    });
});

// dlog(chrome.runtime.getURL('player.html'));


