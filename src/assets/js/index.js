$(document).ready(function() {
  var romanize = require('romanize-names');
  var valToSystem = {
    'wg (default)': 'WG',
    'mps-ii': 'MPS-II',
    'hanyu': 'HANYU'
  };
  var system = 'WG';
  var $inputEle = $('#input');
  var $outputEle = $('#output');

  $inputEle.bind('input propertychange', function(e) {
    e.preventDefault();
    var word = this.value;
    var systemToclass = {'WG': '.wg-output', 'MPS-II': '.mps-output', 'HANYU': '.hanyu-output'};

    if (!word || word.length === 1) {
      for (var system in systemToclass) {
        $(systemToclass[system]).html('無結果');
      }
    }

    for (var sys in systemToclass) {
      $(systemToclass[sys]).html(romanize(this.value, sys));
    }
  });
});
