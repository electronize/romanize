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

  $('.dropdown').dropdown({
    onChange: function(val) {
      console.log((valToSystem[val]));
      system = valToSystem[val];
      $outputEle.html(romanize($inputEle.val(), system));
    },
  });

  $inputEle.bind('input propertychange', function(e) {
    e.preventDefault();
    var word = this.value;
    console.log(word);

    if (word === '' || word.length === 1) {
      $outputEle.html('');
    }

    $outputEle.html(romanize(this.value, system));
  });
});
