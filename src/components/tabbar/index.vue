<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff6485">
        <img slot="icon-item" src="../../../static/svg/tabbar/home.svg" alt="">
        <img slot="icon-item-active" src="../../../static/svg/tabbar/home_active.svg" alt="">
        <div slot="text-item">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff6485">
        <img slot="icon-item" src="../../../static/svg/tabbar/category.svg" alt="">
        <img slot="icon-item-active" src="../../../static/svg/tabbar/category_active.svg" alt="">
        <div slot="text-item">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#ff6485">
        <img slot="icon-item" src="../../../static/svg/tabbar/shopcart.svg" alt="">
        <img slot="icon-item-active" src="../../../static/svg/tabbar/shopcart_active.svg" alt="">
        <div slot="text-item">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff6485">
        <img slot="icon-item" src="../../../static/svg/tabbar/profile.svg" alt="">
        <img slot="icon-item-active" src="../../../static/svg/tabbar/profile_active.svg" alt="">
        <div slot="text-item">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar'
import TabBarItem from './tabbarItem'

export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
