import store from "../store"

import dataReader from "./DataReader"

class Documents

  constructor: (store) ->
    @store = store
    @items = []
    @groups = []

  getById: (id) ->
    @items.find((i) => i.id == id)

  search: (searchQuery, options = {}) ->
    _searchQuery = searchQuery.toLowerCase()
    @items.filter((i) =>
      r = i.name.toLowerCase().indexOf(_searchQuery) != -1 ||
        i.description.toLowerCase().indexOf(_searchQuery) != -1 ||
        (i.keywords &&
          i.keywords.findIndex((k) -> k.toLowerCase() == _searchQuery) != -1)
      r && @__documentOptionsCheck(i, options)
    ).sort(@__sortHandler)

  init: (handler) ->
    dataReader.readDocuments (result) =>
      @__proceedDocuments(result)
      handler() if handler?

  __proceedDocuments: (documents) ->
    g = []
    documents.forEach (d) ->
      s = d.name.trim()[0].toUpperCase()
      d.group = s
      g.push(s) if g.indexOf(s) == -1
    g.sort()

    @items = documents.map (item) ->
      item.id = "#{item.id}"
      item
    @groups = g

  __sortHandler = (a, b) ->
    nameA = a.name.toUpperCase()
    nameB = b.name.toUpperCase()
    return -1 if nameA < nameB
    return 1 if nameA > nameB
    return 0

  __documentOptionsCheck: (document, options) ->
    return true if Object.keys(options).length == 0
    if options['excludeFileEmpty']
      return false unless document.file_name? && document.file_name.trim() != ''
    return true


  @init: (handler) ->
    window.modelDocuments = new Documents(store)
    window.modelDocuments.init(handler)

  @instance: ->
    window.modelDocuments

export default Documents
