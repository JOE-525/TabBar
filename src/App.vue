<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar-new/>
    <main-tab-bar-old/>
  </div>
</template>

<script>
  import MainTabBarOld from "./components/MainTabBarOld";
  import MainTabBarNew from "./components/MainTabBarNew";

  export default {
    name: 'app',
    components: {
      MainTabBarOld,
      MainTabBarNew
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
