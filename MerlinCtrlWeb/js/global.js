/* Merlin Control Panel 2017 */
/* 

Changelog:

30/06/2017 - Created


*/

// url for ajax calls
var url = "";
var isDebug = false;

// if local switch to debug mode.
if (window.location.href.startsWith("http://localhost")) {
    isDebug = true;
}


if (isDebug) {
    url = "http://localhost:57406/"; 
   // url = "http://member.numberjuice.co.uk/merlinctrl/";
} else {
    url = "http://member.numberjuice.co.uk/merlinctrl/";
}

// Searches the url params for a key and returns value
function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v; });
    return k ? p[k] : p;
}

function doValidateLogin() {

}


// Shows alert box
// params
// id, message, type (success, info, warning, danger)
function showAlert(id, html, type) {
    $("#" + id).removeClass();
    $("#" + id).addClass("alert alert-" + type);
    $("#" + id).html(html);
    $("#" + id).show();
}

