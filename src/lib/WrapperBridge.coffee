import WrapperBridgeBase from './WrapperBridgeBase'

import OfficeWrapperBridge from './OfficeWrapperBridge'

class WrapperBridge extends WrapperBridgeBase
  GLOBAL_EVENT = ['appCloseEvent']

  NOT_REMOVED_NOW = ['execExternalStarted', 'copyDataFileStarted']

  EVENTS = ['echoSender',
    'writeToStoreFinished',
    'readFromStoreFinished', 'readFromStoreError',
    'readFromContentDataFinished', 'readFromContentDataError',
    'execExternalStarted', 'execExternalFinished', 'execExternalError',
    'copyDataFileFinished', 'copyDataFileCancelled', 'copyDataFileError']

  constructor: ->
    super()

  getOfficeBridge: ->
    @__officeBridge

  beep: ->
    @__wrapperBridge()?.beep()

  isInternalLink: ->
    @__wrapperBridge()?.isInternalLink() || false

  isExecExternal: (execPath, args, workingDir) ->
    return false unless @hasWrapperBridge()
    @__wrapperBridge().isExecExternal(execPath, args, workingDir)

  echo: (str, handler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler(handler)
    @log("Посылаем сигнал на echo с id обработчика #{id}")
    @__wrapperBridge().echo(id, str)
    true

  isContentDataFileExists: (fileName) ->
    return false unless @hasWrapperBridge()
    @__wrapperBridge()?.isContentDataFileExists(fileName)

  readFromContentData: (fileName, handler, errorHandler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler({
      readFromContentDataFinished: handler
      readFromContentDataError: errorHandler
    })
    @log("Посылаем сигнал на readFromContentData с id обработчика #{id}. Файл: #{fileName}")
    @__wrapperBridge().readFromContentData(id, fileName);

  readFromStore: (fileName, handler, errorHandler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler({
      readFromStoreFinished: handler
      readFromStoreError: errorHandler
    })
    @log("Посылаем сигнал на readFromStore с id обработчика #{id}. Файл: #{fileName}")
    @__wrapperBridge().readFromStore(id, fileName);

  writeToStore: (fileName, content, handler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler(handler)
    @log("Посылаем сигнал на echo с id обработчика #{id}")
    @__wrapperBridge().writeToStore(id, fileName, content)
    true

  close: (accept, handler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler(handler)
    @log("Посылаем сигнал на close с id обработчика #{id}")
    @__wrapperBridge().close(id, accept)
    true

  logger: (message) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler(() -> {})
    @__wrapperBridge().logger(id, message)

  copyDataFile: (fileName, correctFileName, handler, startedHandler, canceledHandler, errorHandler) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler({
      copyDataFileStarted: startedHandler,
      copyDataFileFinished: handler,
      copyDataFileCancelled: canceledHandler,
      copyDataFileError: errorHandler
    })
    @log("Посылаем сигнал на copyDateFile обработчика #{id}")
    @__wrapperBridge().copyDateFile(id, fileName, correctFileName || '')
    true

  execExternal: (execPath, args, workingDir, handlerStarted, handlerFinished, handlerError) ->
    return unless @hasWrapperBridge()
    id = @__registerHandler({
      execExternalStarted: handlerStarted,
      execExternalFinished: handlerFinished,
      execExternalError: handlerError
    })
    @log("Посылаем сигнал на echo с execExternal обработчика #{id}")
    @__wrapperBridge().execExternal(id, execPath, args, workingDir)
    true

  hasWrapperBridge: ->
    @__wrapperBridge()?

  init: ->
    super()

    @__officeBridge = new OfficeWrapperBridge(@)
    @__officeBridge.init()

  __globalEvents: ->
    GLOBAL_EVENT

  __notRemovedNow: ->
    NOT_REMOVED_NOW

  __events: ->
    EVENTS

  __enabled: ->
    @hasWrapperBridge()

  __wrapperBridge: ->
    @__wrapperBridgeObject();

  __wrapperBridgeObject: ->
    window.__wrapperBridge

instance = new WrapperBridge()
instance.init()

window.wrapperBridge = instance

export default instance
