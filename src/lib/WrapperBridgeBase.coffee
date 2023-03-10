class WrapperBridgeBase
  constructor: ->
    @handlers = {}
    @globalHandlers = {}

  init: ->
    unless @__enabled()
      @log("Похоже это не wrapper. Так что ничего не делаем");
      return

    @log("Начинаем регистрировать обработчки на слоты")
    @__events().forEach (method) =>
      @__wrapperBridgeObject()["#{method}"].connect(@, @__connectHandler(method))
      @log("Зарегистрирован обработчик для #{method}")

    @__globalEvents().forEach (method) =>
      @__wrapperBridgeObject()["#{method}"].connect(@, @__globalConnectHandler(method))
      @log("Зарегистрирован глобальный обработчик для #{method}")

  addGlobalHandler: (eventName, handler) ->
    return unless typeof (handler)
    @globalHandlers[eventName] ||= []
    @globalHandlers[eventName].push(handler)

  removeGlobalHandler: (eventName, handler) ->
    return unless typeof (handler)
    @globalHandlers[eventName] ||= []
    index = @globalHandlers[eventName].indexOf(handler)
    if index >= 0
      @globalHandlers[eventName].splice(index, 1)

  log: (msg) ->
    console.log("[WrapperBridge] #{msg}")

  __globalEvents: ->
    []

  __notRemovedNow: ->
    []

  __events: ->
    []

  __enabled: ->
    false

  __registerHandler: (handler) ->
    id = @__generateHandlerId()
    @handlers["#{id}"] = handler if handler
    @log("Зарегистрирован обработчик с id: #{id}")
    id

  __unregisterHandler: (id) ->
    delete @handlers["#{id}"]
    @log("Обработчик #{id} удален")

  __generateHandlerId: ->
    "#{Date.now()}"

  __wrapperBridgeObject: ->
    window.__wrapperBridge

  __connectHandler: (qtEventMethod)->
    () ->
      _args = if arguments.length == 1 then [arguments[0]] else Array.apply(null, arguments)
      handlerId = _args[0]
      args = _args.slice(1)
      @log("Получен ответ для обработчика #{handlerId}")
      handler = @handlers["#{handlerId}"]
      handlerFunc = handler
      if typeof handler == 'object'
        handlerFunc = handler["#{qtEventMethod}"]
      @__unregisterHandler(handlerId) unless @__notRemovedNow().includes(qtEventMethod)
      @log("Вызываем обработчик #{handlerId}:#{qtEventMethod}")
      @log(handlerFunc)
      handlerFunc.apply(@, args)

  __globalConnectHandler: (qtEventMethod)->
    () ->
      @log("Получено событие для глобального обработчика '#{qtEventMethod}'")
      console.log("#{@globalHandlers}")
      handlers = @globalHandlers["#{qtEventMethod}"] || []
      console.log("handlers.length = #{handlers.length}")
      handlers.forEach (handlerFunc) ->
        handlerFunc.apply(@)

export default WrapperBridgeBase
