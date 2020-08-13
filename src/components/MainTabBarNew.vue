<template>
  <div>
    <div>vue2.6.0以后的写法</div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="../assets/img/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/home-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <template v-slot:item-icon>
          <img src="../assets/img/classify.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/classify-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shoppingCart">
        <template v-slot:item-icon>
          <img src="../assets/img/shoppingCart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/shoppingCart-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="../assets/img/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../assets/img/profile-active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './tabbar/TabBar'
  import TabBarItem from "./tabbar/TabBarItem"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
