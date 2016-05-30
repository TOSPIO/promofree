// ==UserScript==
// @name         Promofree
// @namespace    https://github.com/TOSPIO/promofree
// @version      0.1
// @description  一起抵制商业推广！
// @author       Usuzumi Yukio
// @match        *://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function () {
        var contentLeftDivs = $('#content_left').find('div');
        contentLeftDivs.each(function(idx, elem) {
            if($(elem).find('[data-tuiguang]').length > 0) {
                $(elem).text("抵制商业推广");
            }
        });
    });
    observer.observe(document.getElementById('wrapper_wrapper'), {childList: true, attributes: true, characterData: true });
})();
