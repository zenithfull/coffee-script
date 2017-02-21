class Secret
  _key = "AllYourBase"

  _encrypt = (str) ->
    str.split('').reverse('').join('')

  getKey: ->
    _key

  encrypt: (str) ->
    _encrypt str

secret = new Secret
console.log secret.getKey()

console.log secret.encrypt "tiger"

console.log typeof secret._key

console.log typeof secret._encrypt
