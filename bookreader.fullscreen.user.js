// ==UserScript==
// @name          Fullscreen bookreader
// @namespace     http://github.com/anandology/userscripts/
// @description   Displays archive.org bookreader in fullscreen
// @include       http://www.archive.org/stream/*
// ==/UserScript==

function makeFullScreen() {
    document.getElementById("BRfooter").setAttribute("style", "display: none;");
    document.getElementById("BRtoolbar").setAttribute("style", "display: none;");
    document.getElementById("BookReaderSearch").setAttribute("style", "display: none;");
    document.getElementById("BookReader").setAttribute("style", "left: 0px; right: 0px; top: 0px; bottom: 0px;");
}

window.addEventListener("load", function(e) {
    makeFullScreen();
}, false);
