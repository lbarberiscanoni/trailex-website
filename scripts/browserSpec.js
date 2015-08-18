//this script figures out which browser the user is using in order to pull up the right download link for them
$(document).ready(function() {
    //let's find the name of the browser
    browserName = navigator.userAgent.toLowerCase();

    //send the user to the appropriate extension app store
    var chromeStore = "https://chrome.google.com/webstore/detail/trailex/ankedadffmmdhjnheefkkamknflnmime";
    var operaStore = "https://auth.opera.com/account/login?return_url=https%3A//addons.opera.com/package/download/revision/netflix-trailer-loader/1.1/1/%3Fzip%3D1";
    var firefoxStore = "https://addons.mozilla.org/en-US/firefox/addon/netflix-trailers/";
    
    //generate a button specific to the browser kinda like in the Sublime Text Editor website
    var goToStore = function(a, b) {
        $("#specificDownload").append("<a>" + "Download for " + a + "</a>");
        $("#specificDownload a").attr("href", b).attr("target", "blank").addClass("btn btn-primary");
    };

    if (browserName.indexOf("chrome") > -1) {
        if (browserName.indexOf("opr") > -1) {
            goToStore("Opera", operaStore);
        } else {
            goToStore("Chrome", chromeStore);
        };
    } else if (browserName.indexOf("firefox") > -1) {
        goToStore("Firefox", firefoxStore);
    } else {
        goToStore("Browser Not Supported", "#");
        $("#specificDownload a").addClass("disabled");
    };
});
