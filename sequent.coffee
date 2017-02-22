Sequent = require "sequent"

# 待ち合わせように新しいSequentオブジェクトを作る
seq1 = new Sequent
seq2 = new Sequent

seq2.wait 2, ->
  console.log "seq2が全て完了"

seq1.wait 2, ->
  console.log "seq1が全て完了"
  seq2.done()

setTimeout ->
  console.log "完了１"
  seq1.done()
, 2000

setTimeout ->
  console.log "完了２"
  seq1.done()
, 3000

setTimeout ->
  console.log "完了３"
  seq2.done()
, 1000