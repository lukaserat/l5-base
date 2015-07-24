

Vue.filter 'biz-days', (value)->

  days = parseFloat(value)

  return value if days.toString().length isnt value.toString().length

  if days > 0

    return 'SAME DAY' if days is 0

    a = days + ' Biz Day'

    if parseInt(days) > 1 then a + 's' else a

  else '0 Biz Day'