<!--
  这个tabBar的写法是vue2.6.0之前的写法，在vue2.6.0版本以上，该写法有错误
-->
<template>
  <div>
    <div>vue2.6.0之前的写法</div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="item-icon" src="../assets/img/classify.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/classify-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingCart">
        <img slot="item-icon" src="../assets/img/shoppingCart.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/shoppingCart-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../assets/img/profile.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/profile-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>