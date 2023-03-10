<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul ref="dropDown" class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Документы</li>
        </ul>
      </div>
    </div>
    <div class="expanded row" id="content">
      <div class="columns small-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">
  export default {
    
  }
</script>
