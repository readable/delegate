window.Rd = window.Rd || {}
window.Rd.delegateEvent = function (delegateNode, eventType, selector, listener) {
  delegateNode.addEventListener(eventType, function (event) {
    var match = event.target.closest(selector)
    if (match) { listener.call(match, event) }
  })
}
