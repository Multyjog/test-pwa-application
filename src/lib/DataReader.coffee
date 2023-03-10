import wrapperBridge from './WrapperBridge'

class DataReader
  read: (path, readHandler, errorHandler) ->
    if @__useWrapper()
      @__readWrapper(path, readHandler, errorHandler)
    else
      @__readDefault(path, readHandler, errorHandler)

  readJson: (path, readHandler) ->
    rh = (text) ->
      json = null
      if text == ''
        json = {}
      else
        try
          json = JSON.parse(text)
        catch
          console.log("[DataReader] Cannot detect json in text. Return blank. Path: #{path}")
          json = {}

      readHandler(json) if readHandler
    eh = (status) ->
      readHandler({}) if readHandler
    @read(path, rh, eh)

  readDocuments: (readHandler) ->
    @readJson("data/documents.json", readHandler)

  __useWrapper: ->
    wrapperBridge.hasWrapperBridge() && !location.href.startsWith('http')
#    wrapperBridge.hasWrapperBridge()

  __readDefault: (path, readHandler, errorHandler) ->
    rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, true);
    rawFile.onreadystatechange = ->
      if rawFile.readyState == 4
        if(rawFile.status == 200 || rawFile.status == 0)
          allText = rawFile.responseText
          readHandler(allText) if readHandler
        else
          console.error("[DataReader] Неудалось открыть файл #{path}. Статус #{rawFile.status}")
          errorHandler(rawFile.status) if errorHandler
    rawFile.send(null)

  __readWrapper: (path, readHandler, errorHandler) ->
    wrapperBridge.readFromContentData(path,
      @__readWrapperHandlerFinished(readHandler),
      @__readWrapperHandlerError(readHandler, errorHandler))

  __readWrapperHandlerFinished: (readHandler) ->
    (fileName, content) ->
      readHandler(content) if readHandler

  __readWrapperHandlerError: (readHandler, errorHandler) ->
    (fileName, errorCode, errorMessage) ->
      console.log("[DataReader#readWrapper] Ошибка чтения из файла #{fileName}. Код #{errorCode}. Ошибка: #{errorMessage}")
      if errorCode == 'fileNotExists'
        console.log("[DataReader#readWrapper] Так как ошибка в том что файла нет, то просто вызываем обработчик с пустым контентом")
        readHandler('') if readHandler
      else
        errorHandler(errorMessage)


instance = new DataReader();
window.dataReader = instance

export default instance
