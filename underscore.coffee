_ = require 'underscore'

console.log _.template '<div><%= name %></div>', {name: "<span>パリ</span>"}