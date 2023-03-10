<template>
  <div class="callout secondary">
    <h5>{{getDocument().name}}</h5>
    <p>{{getDocument().description}}</p>
    <div class="button-group">
      <document-viewer v-bind:documentId="documentId"></document-viewer>
      <document-viewer v-bind:documentId="documentId"></document-viewer>
      <document-viewer v-bind:documentId="documentId"></document-viewer>
    </div>
  </div>
</template>

<script lang="coffee">
  import ModelDocuments from '../lib/Documents'

  import DocumentViewer from './Viewer'

  export default {
    components: {DocumentViewer}

    props:
      documentId: String
      required: true

    methods:
      getDocument: ->
        ModelDocuments.instance().getById(@documentId)
  }
</script>
