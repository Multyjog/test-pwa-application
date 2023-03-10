import DocumentDownload from './DocumentDownload'

MAX_DOCUMENT_NAME_LENGTH = 60

DocumentView = {
  mixins: [DocumentDownload]

  computed:
    isViewable: ->
      @isExample && @hasFile

  methods:
    clickAction: ($event)->
      if @isViewable
        @$refs.viewer.show()
      else
        @clickDownloadAction($event)
}

export default DocumentView
