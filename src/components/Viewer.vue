<template>
  <a v-if="showActionLink" class="button documents__link" href="#" v-on:click.prevent="clickAction">
    <!--<svgicon :name=labelActionIcon class="mr-2" width="17" height="17" color="#c5676cб"></svgicon>-->
    <span>{{labelActionLink}}</span>
    <component v-if="isViewable"
               v-bind:is="viewComponent"
               v-bind:documentId="documentId" ref="viewer"/>
  </a>
</template>

<script lang="coffee">
  import MixinDocumentId from '../mixins/Document'
  import MixinDocumentView from '../mixins/DocumentView'

  export default {
    mixins: [MixinDocumentId, MixinDocumentView]
  }
</script>
