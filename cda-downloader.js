// ==UserScript==
// @name         CDA Downloader
// @namespace    http://github.com/Mati365
// @version      0.1
// @author       Mateusz Bagiński <cziken58@gmail.com>
// @match        http://www.cda.pl/video/*
// @grant        none
// ==/UserScript==
'use strict';
(function() {
    Element.prototype.setAttrs = function(attrs, html) {
        for(var key in attrs)
            this.setAttribute(key, attrs[key]);
        if(void 0 !== html)
            this.innerHTML = html;
        return this;
    };
    Element.prototype.setListener = function(event, callback) {
        return this.addEventListener(event, callback) || this;
    };
    document
        .querySelector(".well-lite div a[class*='primaryButton']")
        .parentNode.appendChild(
			document
				.createElement("a")
				.setListener("click", downloadMovie)
				.setAttrs({
						  class: "primaryButton"
						, target: "_blank"
				}, "Pobierz film")
        );
    function downloadMovie(e) {
        var getStreamURL = function() {
            var re = /type: 'html5'[\s\S]*file: '([^']*)'/gm
              , match = null;
            for(var script of [].slice.call(document.getElementsByTagName("script"))) {
                if(match = re.exec(script.innerHTML))
                    return match[1];
            }
        };
        if(this.href === "")
            this.setAttrs({
                  href: getStreamURL()
                , download: document.title.replace(/[\. ]/g, "_") + ".mp4"
            });
	};
}());
