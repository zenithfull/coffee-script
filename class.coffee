# 動物を表すクラス
class Animal
  sound: ""
  name: "ある動物"

  constructor: (name) ->
    if name?
      @name = name

  say: (text) ->
    console.log "#{@name} 「#{@sound}#{text}」"

# 猫クラス
class Cat extends Animal
  constructor: (name) ->
    super name
    @type = "ペルシャ"

  say: (text) ->
    super text
    console.log "と#{@type}猫の#{@name}は言いました。"

snowbell = new Cat "スノーベル"
snowbell.say "何かちょうだい。"
