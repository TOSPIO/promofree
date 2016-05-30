// ==UserScript==
// @name         Promofree
// @namespace    https://github.com/TOSPIO/promofree
// @version      0.1
// @description  一起抵制商业推广！
// @author       Usuzumi Yukio
// @match        *://www.baidu.com/*
// @match        *://www.sogou.com/*
// @match        *://www.soso.com/*
// @match        *://www.so.com/*
// @grant        none
// ==/UserScript==

var urlMatchers = {
  baidu: /.*:\/\/www.baidu.com\/*/,
  sogou: /.*:\/\/www.sogou.com\/*/,
  so: /.*:\/\/www.so.com\/*/
};

var filters = {
  baidu: [
    {
      filter: function () {
        var contentLeftDivs = $('#content_left').find('div');
        contentLeftDivs.each(function(idx, elem) {
          if($(elem).find('[data-tuiguang]').length > 0) {
            $(elem).text("抵制商业推广");
          }
        });
      },
      observeOn: document.body,
    }
  ],
  sogou: [
    {
      filter: function () {
        $('#promotion_adv_container').text("抵制商业推广");
      },
      observeOn: document.body
    }
  ],
  so: [
    {
      filter: function () {
        $('#e_idea_pp').empty().append(
          $('<li><h3>抵制商业推广</h3></li>')
        ).parent().prevAll().remove();
      },
      observeOn: document.getElementById('warper'),
      observeOptions: {  }
    }
  ]
};


(function() {
  'use strict';
  $(document).ready(function () {
    for (var engine in urlMatchers) {
      var matcher = urlMatchers[engine];
      if (window.location.href.match(matcher)) {
        filters = filters[engine];
        for(var filterIdx in filters) {
          var filter = filters[filterIdx];
          var filterFunc = filter.filter;
          var observeOn = filter.observeOn || document.body;
          var observeOptions = Object.assign({}, {childList: true, attributes: true, characterData: true}, filter.observeOptions);
          if (filterFunc) {
            var observer = new MutationObserver(filterFunc);
            observer.observe(observeOn, observeOptions);
            filterFunc();
          }
        }
      }
    }
  });
})();
