$(document).ready(function() {
  var romanize = require('romanize-names');
  var valToSystem = {
    'wg (default)': 'WG',
    'mps-ii': 'MPS-II',
    'hanyu': 'HANYU'
  };
  var system = 'WG';

  $('.dropdown').dropdown({
    onChange: function(val) {
      console.log((valToSystem[val]));
      system = valToSystem[val];
      $('#output').html(romanize($('#input').val(), system));
    },
  });

  $('#input').on('input propertychange', function() {
    $('#output').html(romanize(this.value, system));
  });
});
