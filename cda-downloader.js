// ==UserScript==
// @name         CDA Downloader
// @namespace    http://github.com/Mati365
// @version      0.1
// @description  try to take over the world!
// @author       Mateusz Bagiński <cziken58@gmail.com>
// @match        http://www.cda.pl/video/*
// @grant        none
// ==/UserScript==
'use strict';
(function() {
    window.onload = function() {
        document.querySelector(".well-lite a").parentNode.innerHTML += 
              "<a class='primaryButton' target='_blank' href='" 
            + document.querySelector(".brdPlayerWrapper > .brdPlayer > div > video").src 
            + "' download>Pobierz film</a>";
    };
}());
