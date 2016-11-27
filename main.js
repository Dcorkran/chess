function makeBoard() {
  for (var i = 0; i < 8; i++) {
    var $addDiv = $('<div>').addClass('row');
    $('main').append($addDiv);
    for (var j = 0; j < 8; j++) {
      var $addBox = $('<div>');
      if (j % 2 === 0) {
        $addBox.addClass('white-box');
      } else {
        $addBox.addClass('black-box');
      }
      $('main .row:eq('+i+')').append($addBox);
    }
  }
};

makeBoard();

// $('<div>').addClass('white-box').append($('main div:nth-child(i)'));
