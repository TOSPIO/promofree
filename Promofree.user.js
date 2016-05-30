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
    $('#content_left').find('[data-tuiguang]').parent().parent().text("抵制商业推广！！！");
    });
    observer.observe(document.getElementById('wrapper_wrapper'), {childList: true, attributes: true, characterData: true });
})();
