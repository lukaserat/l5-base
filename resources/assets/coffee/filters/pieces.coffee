
Vue.filter 'pieces', (value)->

  pieces = parseFloat(value)

  return value if pieces.toString().length isnt value.toString().length

  x = numeral(pieces)

  y = "#{x.format('0,0')} cop"

  return if pieces > 1 then "#{y}ies" else "#{y}y"