
Vue.directive 'collapsible-row', {
  $content: null
  $triggerer: null
  $row: null

  deep: true
  bind: ()->

    @idx = setInterval _.bind(@checkAttachment, @), 0

    @$content = $(this.el).find('[collapsible-row-content]')
    @$triggerer = $(this.el).find('[collapsible-row-triggerer]')

    Vue.util.on @$triggerer[0], 'click', _.bind(@toggleCollapse, @)

  update: (newValue, oldValue)->
  checkAttachment: ()->

    if not _.isNull(@el.parentElement)
      clearInterval @idx

      columnCount = $(@el).find('td').length
      @$row = $('<tr class="collapse">').html( $("<td colspan='#{columnCount}'>").html( @$content ) )
      @$row.insertAfter($(@el))

  toggleCollapse: ()->

    @$row.collapse('toggle')
}