// ==UserScript==
// @name         Promofree
// @namespace    https://github.com/TOSPIO/promofree
// @version      0.1
// @description  一起抵制商业推广！
// @author       Usuzumi Yukio
// @match        *://www.baidu.com/*
// @match        *://www.sogou.com/*
// @match        *://www.soso.com/*
// @grant        none
// ==/UserScript==

var urlMatchers = {
  baidu: /.*:\/\/www.baidu.com\/*/,
  sogou: /.*:\/\/www.sogou.com\/*/
};

var filters = {
  baidu: function () {
    var contentLeftDivs = $('#content_left').find('div');
    contentLeftDivs.each(function(idx, elem) {
        if($(elem).find('[data-tuiguang]').length > 0) {
            $(elem).text("抵制商业推广");
        }
    });
  },
  sogou: function () {
    $('#promotion_adv_container').text("抵制商业推广");
  }
};



(function() {
  'use strict';
  var filter = null;
  for (var engine in urlMatchers) {
    var matcher = urlMatchers[engine];
    if (window.location.href.match(matcher)) {
      filter = filters[engine];
    }
  }
  if (filter !== null) {
  var observer = new MutationObserver(filter);
  observer.observe(document.body, {childList: true, attributes: true, characterData: true });
  }
})();
