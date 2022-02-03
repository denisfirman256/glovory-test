<template>
  <div id="app">
    <notifications/>
    <router-view></router-view>
  </div>
</template>
<style>
  .text-success {
    color: #00b14f !important;
  }

  .text-secondary {
    color: #676767 !important;
  }
</style>

<script>
export default {
  name: 'App',
}
</script>

