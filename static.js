(function() {
  var Secret, secret;

  Secret = (function() {
    var _encrypt, _key;

    function Secret() {}

    _key = "AllYourBase";

    _encrypt = function(str) {
      return str.split('').reverse('').join('');
    };

    Secret.prototype.getKey = function() {
      return _key;
    };

    Secret.prototype.encrypt = function(str) {
      return _encrypt(str);
    };

    return Secret;

  })();

  secret = new Secret;

  console.log(secret.getKey());

  console.log(secret.encrypt("tiger"));

  console.log(typeof secret._key);

  console.log(typeof secret._encrypt);

}).call(this);
