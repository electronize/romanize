$(document).ready(function() {
  var romanize = require('romanize-names');
  var valToSystem = {
    'wg (default)': 'WG',
    'mps-ii': 'MPS-II',
    'hanyu': 'HANYU'
  };
  var $inputEle = $('#input');
  var $outputEle = $('#output');

  $inputEle.bind('input propertychange', function(e) {
    e.preventDefault();
    $outputEle.html('');
    var systemToclass = {'WG': 'wg-output', 'MPS-II': 'mps-output', 'HANYU': 'hanyu-output'};
    var wordArr = this.value.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\n+/);

    for (var i = 0, len = wordArr.length; i < len; ++i) {
      var w = wordArr[i];
      var $span;

      if (!w) {
        continue;
      }

      var $item = $('<div/>', {
        class: 'item',
        html: '<span class="name-tag">' + w + ' <i class="arrow circle outline right icon olive" style="display: inline !important;"></i> </span>',
      });

      for (var s in systemToclass) {
        $span = $('<span/>', {
          class: systemToclass[s] + ' pinyinTag',
          text: romanize(w, s),
        });
        var linksMap = reInitLink();
        linksMap[s].appendTo($item);
        $span.appendTo($item);
      }

      $item.appendTo($outputEle);
    }

  });

  function reInitLink() {
    var $wgHyperLink = $('<a/>', {
      class: 'ui red horizontal label',
      href: 'https://zh.wikipedia.org/zh-tw/%E5%A8%81%E5%A6%A5%E7%91%AA%E6%8B%BC%E9%9F%B3',
      target: '_blank',
      text: '威妥瑪拼音(WG)',
    });
    var $mpsHyperLink = $('<a/>', {
      class: 'ui purple horizontal label',
      href: 'https://zh.wikipedia.org/wiki/%E5%9C%8B%E8%AA%9E%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F%E7%AC%AC%E4%BA%8C%E5%BC%8F',
      target: '_blank',
      text: '國音第二式拼音(MPS-II)',
    });
    var $hanyuHyperLink = $('<a/>', {
      class: 'ui black horizontal label',
      href: 'https://zh.wikipedia.org/wiki/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3',
      target: '_blank',
      text: '漢語拼音(HANYU)',
    });
    return {'WG': $wgHyperLink, 'MPS-II': $mpsHyperLink , 'HANYU': $hanyuHyperLink};
  }
});
