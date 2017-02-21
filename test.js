(function() {
  var func, i, j;

  for (i = j = 1; j <= 3; i = ++j) {
    func = (function(i) {
      return function() {
        return console.log(i);
      };
    })(i);
    setTimeout(func, 1000);
  }

}).call(this);
