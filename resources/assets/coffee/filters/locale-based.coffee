
# Return the value based on the current locale

Vue.filter 'currentLocale', (value, currentLocale)->

  value = JSON.parse(value) if _.isString(value)

  return '' if _.isUndefined(value) or _.isNull(value)

  value[ currentLocale || 'en' ]