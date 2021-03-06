(function() {
  var _, callCount, fibonacci, startTime;

  _ = require('underscore');

  callCount = 0;

  fibonacci = function(n) {
    callCount++;
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };

  startTime = Date.now();

  console.log(fibonacci(43));

  console.log("通常版: " + (Date.now() - startTime) + " ミリ秒（呼び出し回数" + callCount + "回");

  fibonacci = _.memoize(fibonacci);

  callCount = 0;

  startTime = Date.now();

  console.log(fibonacci(43));

  console.log("メモ化版: " + (Date.now() - startTime) + " ミリ秒（呼び出し回数" + callCount + "回");

}).call(this);
