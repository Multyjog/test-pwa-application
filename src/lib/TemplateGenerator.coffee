import ModelDocuments from './Documents'

import DateFormatHelper from './DateFormatHelper'

class TemplateGenerator

  constructor: (documentId) ->
    @documentId = documentId

  enabled: ->
    TemplateGenerator.enabled()

  @enabled: ->
    wrapperBridge.getOfficeBridge().enabled()

  officeWrapperBridge: ->
    wrapperBridge.getOfficeBridge()

  setStartedHandler: (handler)->
    @__startedHandler = handler

  setInProcessHandler: (handler)->
    @__inProcessHandler = handler

  setFinishedHandler: (handler)->
    @__finishedHandler = handler

  setErrorHandler: (handler)->
    @__errorHandler = handler

  getDocument: ->
    return @__document if @__document
    @__document = ModelDocuments.instance().getById(@documentId)
    @__document

  getDocumentPath: ->
    @getDocument().file_name

  generate: (outputName) ->
    console.log @optionsHash()
    @officeWrapperBridge().generateFromTemplate(@getDocumentPath(), @optionsHash(), outputName, @__handlers());

  generateOptionsForCurrentDate: ->
    now = new Date()
    {
      'G_DATE_NOW__RAW': DateFormatHelper.iso8601(now).toString()
      'G_DATE_NOW__FULL': DateFormatHelper.full(now).toString()
      'G_DATE_NOW__FULL__MONTH_NAME': DateFormatHelper.fullMonthName(now).toString()
      'G_DATE_NOW__DAY': DateFormatHelper.day(now).toString()
      'G_DATE_NOW__MONTH': DateFormatHelper.month(now).toString()
      'G_DATE_NOW__MONTH_NAME': DateFormatHelper.monthName(now).toString()
      'G_DATE_NOW__YEAR': DateFormatHelper.year(now).toString()
      'G_DATE_NOW__YEAR__SHORT': DateFormatHelper.yearShort(now).toString()
    }

  getRandomArbitrary: (min, max) ->
    Math.round(Math.random() * (max - min) + min)

  optionsHash: ->
    r = {}

    for i in [1..8]
      r["NUMBER_#{i}"] = @getRandomArbitrary(10, 1000)

    Object.assign(r, @generateOptionsForCurrentDate())
    r

  __handlers: ->
    handlers = {}
    handlers.started = @__startedHandler if @__startedHandler
    handlers.inProcess = @__inProcessHandler if @__inProcessHandler
    handlers.finished = @__finishedHandler if @__finishedHandler
    handlers.error = @__errorHandler if @__errorHandler

    handlers

window.TemplateGenerator = TemplateGenerator

export default TemplateGenerator
