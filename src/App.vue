<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="coffee">
  import wrapperBridge from './lib/WrapperBridge'

  export default {
    mounted: ->
      wrapperBridge.getOfficeBridge().checkAvailable (state, code, message) =>
        @$store.commit("changeOfficeWrapperAvailable", state)
  }
</script>
