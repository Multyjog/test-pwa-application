import ModelDocuments from "../lib/Documents"

import wrapperBridge from "../lib/WrapperBridge"

class InitHelper

  @init: (handler) ->
    _handler = ->
      handler() if handler?

    ModelDocuments.init(_handler)

    if wrapperBridge.hasWrapperBridge()
      wrapperBridge.addGlobalHandler('appCloseEvent', ->
        wrapperBridge.close(true)
      )

export default InitHelper
