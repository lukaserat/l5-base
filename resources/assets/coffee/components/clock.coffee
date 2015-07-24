Vue.Components = Vue.extend
  data: ()->
    {
      timeFormat: 'HH:mm'
      dateFormat: 'MMM.dd.yyyy'
    }

  methods:
    updateDisplay: ()->
      @$.date.text()
    init: ()->
      setInterval _.bind(@updateDisplay, @), 1500


  template: """
<span class='component-clock a-wrapper'>
  <span v-el="date" class='a-date-wrapper'></span> <span v-el="time" class='a-time-wrapper'></span>
</span>
"""