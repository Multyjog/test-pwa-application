MAX_DOCUMENT_NAME_LENGTH = 60

import TemplateGenerator from '../lib/TemplateGenerator'

DocumentDownload = {
  methods:
    clickDownloadAction: ($event)->
      if wrapperBridge.hasWrapperBridge()
        if @getDocument().template
          @__fillTemplate()
        else
          wrapperBridge.copyDataFile(@getRelatedUrl(),
            @__fixDocumentNameLenght(@getDocument().name),
            @__wrapperCopyFileHandler.bind(@),
            @__wrapperCopyFileStartedHandler.bind(@),
            @__wrapperCopyFileCancelledHandler.bind(@),
            @__wrapperCopyFileError.bind(@))
      else
        window.open(@getRelatedUrl(), '_blank')

    __fillTemplate: ->
      console.log("Нажали на сборку документа")
      generator = new TemplateGenerator(@getDocument().id)
      generator.setStartedHandler =>
        console.log('started')

      generator.setInProcessHandler =>
        console.log('working')

      generator.setFinishedHandler =>
        console.log('finished')
        alert("Документ сформирован")

      generator.setErrorHandler =>
        console.log('error')

      generator.generate(@__fixDocumentNameLenght(@getDocument().name))

    __fixDocumentNameLenght: (name) ->
      name.substring(0, MAX_DOCUMENT_NAME_LENGTH)

    __wrapperCopyFileHandler: (fileName, copyTo) ->
      console.log("Файл #{fileName} скопирован в #{copyTo}")
      #        @showModalLoading = false
      @$modal.show('dialog',
        {
          title: 'Выполнено',
          text: "Файл сохранен."
          buttons: [
            {
              title: 'Закрыть',
              handler: () =>
                @$modal.hide('dialog')
            }
          ]
        }
      )

    __wrapperCopyFileStartedHandler: (fileName, copyTo) ->
      console.log("Начало копирования файла #{fileName} скопирован в #{copyTo}")
  #        @showModalLoading = true

    __wrapperCopyFileCancelledHandler: (fileName, copyTo) ->
      console.log("Сохранение файла #{fileName} отменено")
  #        @showModalLoading = false

    __wrapperCopyFileError: (fileName, copyTo, errorCode, errorMessage) ->
      console.log("Ошибка сохранения файла #{fileName}. Код: #{errorCode}. Сообщение: #{errorMessage}")
  #        @showModalLoading = false
}

export default DocumentDownload
