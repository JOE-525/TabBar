<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon" /></div>
    <div v-else><slot name="item-icon-active" /></div>
    <div :class="{active: isActive}"><slot name="item-text" /></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        require: true
      }
    },
    methods: {
      btnClick() {
        return this.$router.push(this.path).catch(() => Error)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  .active {
    color: #d4237a
  }
</style>