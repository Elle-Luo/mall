<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/home.svg"
        alt=""
        class="img"
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
        class="img"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/category.svg"
        alt=""
        class="img"
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
        class="img"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="orange">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/shopcart.svg"
        alt=""
        class="img"
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/shopcart_active.svg"
        alt=""
        class="img"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/profile.svg"
        alt=""
        class="img"
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
        class="img"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/tabbar/tabbar";
import TabBarItem from "@/components/tabbar/tabBarItem.vue";
export default {
  components: {
    tabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>