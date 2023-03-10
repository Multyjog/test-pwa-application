import WrapperBridgeBase from './WrapperBridgeBase'

class OfficeWrapperBridge extends WrapperBridgeBase
  GLOBAL_EVENT = []

  NOT_REMOVED_NOW = ['generateFromTemplateStarted', 'generateFromTemplateInProcess']

  EVENTS = ['generateFromTemplateStarted', 'generateFromTemplateInProcess',
            'generateFromTemplateFinished', 'generateFromTemplateError',
            'saveFileSaved', 'saveFileError',
            'checkAvailableResult']

  constructor: (wrapperBridge) ->
    super()

    @wrapperBridge = wrapperBridge

  enabled: ->
    @__enabled()

  __bridge: ->
    return null unless @enabled()

    @wrapperBridge.__wrapperBridge().officeBridge

  version: ->
    @__bridge()?.version()

  # handler(state : bool, code : string, message : string)
  checkAvailable: (handler)->
    if @enabled()
      baseHandler = (state, code) ->
        message = ""
        if code == 'office_not_installed'
          message = "Microsoft Office не установлен"
        else if code == 'unsupported_platform'
          message = "Неподдерживаемая платформа запуска"

        handler(state, code, message) if handler

      id = @__registerHandler(baseHandler)
      @log("Посылаем сигнал на checkAvailable с id обработчика #{id}.")
      @__bridge().checkAvailable(id);

    else
      handler(false, "not_wrapper", "Запуск приложения не через обертку") if handler

  # handlers: {
  #   started: function(templatePath, options, outputPath)
  #   inProcess: function(templatePath, options, outputPath, progress, state)
  #   finished: function(templatePath, options, outputPath)
  #   error: function(templatePath, options, outputPath, errorMessage)
  # }
  generateFromTemplate: (templatePath, options, outputPath, handlers = {}) ->
    return null unless @enabled();

    id = @__registerHandler({
      generateFromTemplateStarted: handlers['started']
      generateFromTemplateInProcess: handlers['inProcess']
      generateFromTemplateFinished: handlers['finished']
      generateFromTemplateError: handlers['error']
    })
    @log("Посылаем сигнал на generateFromTemplate с id обработчика #{id}. Шаблон: #{templatePath}. Параметры: #{options}. Итоговый файл: #{outputPath}")
    @__bridge().generateFromTemplate(id, templatePath, options, outputPath);

  # handler: {
  #   fileSaved: function(filePath, saveTo)
  #   fileError: function(filePath, saveTo)
  # }
  saveFile: (filePath, saveTo, handlers = {}) ->
    return null unless @enabled()

    id = @__registerHandler({
      saveFileSaved: handlers['fileSaved']
      saveFileError: handlers['fileError']
    })
    @log("Посылаем сигнал на saveFile с id обработчика #{id}. Файл: #{filePath}. Сохранить: #{saveTo}")
    @__bridge().saveFile(id, filePath, saveTo);

  __globalEvents: ->
    GLOBAL_EVENT

  __notRemovedNow: ->
    NOT_REMOVED_NOW

  __events: ->
    EVENTS

  __enabled: ->
    @wrapperBridge.hasWrapperBridge()

  __wrapperBridgeObject: ->
    @__bridge()

export default OfficeWrapperBridge
