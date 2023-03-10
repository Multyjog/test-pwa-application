<template>
  <div>
    <document v-for="document in getDocuments()" v-bind:key="document.id" v-bind:documentId="document.id" />
  </div>
</template>

<script lang="coffee">
  import Document from './Document'

  import ModelDocuments from '../lib/Documents'

  export default {
    components: {Document}

    methods:
      getDocuments: ->
        console.log(ModelDocuments)
        console.log(ModelDocuments.instance())
        ModelDocuments.instance().items
  }
</script>