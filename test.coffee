for i in [1..3]
  func = do (i) ->
    return ->
      console.log i
  setTimeout func , 1000
