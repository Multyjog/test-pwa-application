import ModelDocuments from '../lib/Documents'

Document = {
  props:
    documentId:
      type: [String, Number]
      require: true

  computed:
    isDocumentExists: ->
      @getDocument()?

    isDocument: ->
      @isCategoryDocument(@getDocumentCategory())

    isExample: ->
      @isCategoryExample(@getDocumentCategory())

    isForm: ->
      @isCategoryForm(@getDocumentCategory())

    hasFile: ->
      if @isDocument || @isForm
        @getDocument().file_name &&
          !Array.isArray(@getDocument().file_name) &&
          @getDocument().file_name.trim() != ''
      else if @isExample
        return false unless @getDocument().file_name
        if Array.isArray(@getDocument().file_name)
          @getDocument().file_name.length !=0
        else
          @getDocument().file_name.trim() != ''
      else
        false

    isFilePdf: ->
      if Array.isArray(@getDocument().file_name)
        @getDocument().file_name[0].toString().endsWith('.pdf')
      else
        @getDocument().file_name.toString().endsWith('.pdf')

    showActionLink: ->
      @hasFile

    labelActionLink: ->
      @getLabelActionLink(@getDocumentCategory())

    labelActionIcon: ->
      @getLabelActionIcon(@getDocumentCategory())

  methods:
    getDocument: ->
      @getModelDocuments().getById(@documentId)

    getDocumentCategory: ->
      @getDocument()?.category || ''

    getModelDocuments: ->
      ModelDocuments.instance()

    getRelatedUrl: ->
      return '' unless @hasFile
      fileName = @getDocument().file_name
      if fileName.startsWith('files')
        fileName = "data/#{fileName}"
      else
        fileName = "data/files/#{fileName}"
      fileName

    getLabelActionIcon: (documentCategory) ->
      if @isCategoryDocument(documentCategory)
        "download"
      else if @isCategoryExample(documentCategory)
        "visibility"
      else if @isCategoryForm(documentCategory)
        "download"
      else ''

    getLabelActionLink: (documentCategory) ->
      if @isCategoryDocument(documentCategory)
        "Скачать документ"
      else if @isCategoryExample(documentCategory)
        "Посмотреть образец"
      else if @isCategoryForm(documentCategory)
        "Скачать форму"
      else ''

    isCategoryDocument: (documentCategory) ->
      documentCategory == 'document'

    isCategoryExample: (documentCategory) ->
      documentCategory == 'example'

    isCategoryForm: (documentCategory) ->
      documentCategory == 'form'
}

export default Document
