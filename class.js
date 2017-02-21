(function() {
  var Animal, Cat, snowbell,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Animal = (function() {
    Animal.prototype.sound = "";

    Animal.prototype.name = "ある動物";

    function Animal(name) {
      if (name != null) {
        this.name = name;
      }
    }

    Animal.prototype.say = function(text) {
      return console.log(this.name + " 「" + this.sound + text + "」");
    };

    return Animal;

  })();

  Cat = (function(superClass) {
    extend(Cat, superClass);

    function Cat(name) {
      Cat.__super__.constructor.call(this, name);
      this.type = "ペルシャ";
    }

    Cat.prototype.say = function(text) {
      Cat.__super__.say.call(this, text);
      return console.log("と" + this.type + "猫の" + this.name + "は言いました。");
    };

    return Cat;

  })(Animal);

  snowbell = new Cat("スノーベル");

  snowbell.say("何かちょうだい。");

}).call(this);
