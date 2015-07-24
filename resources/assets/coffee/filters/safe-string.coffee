
# Return the safe string of the given value

Vue.filter 'safeString', (value)->

  $('<span>').html(value).text()