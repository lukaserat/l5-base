
# Returns the default based on the falseness of the given value

Vue.filter 'default', (value, defaultValue)->
  return if _.isString(value) and value.length > 0 then value else defaultValue