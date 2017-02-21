(function() {
  var selectedWords, word, words;

  words = ['bake', 'cheese', 'cake'];

  selectedWords = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = words.length; i < len; i++) {
      word = words[i];
      if (word.indexOf('a') !== -1) {
        results.push(word);
      }
    }
    return results;
  })();

  console.log(selectedWords);

}).call(this);
