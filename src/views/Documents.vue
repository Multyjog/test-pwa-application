<template>
  <div style="margin-top: 10px">

    <action-buttons></action-buttons>

    <documents></documents>
  </div>
</template>

<script lang="coffee">
  import Documents from '../components/Documents'
  import ActionButtons from '../components/ActionButtons'

  export default {
    components: {Documents, ActionButtons}
  }
</script>
