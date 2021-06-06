<template>
  <div id="app">
    <!--      1.让home不要销毁掉 用keep-alive-->
    <!-- 2.让home中的内容保持原来的位置  离开时，保存
    一个位置信息saveY 回来时将位置设置为原来保存的位置信息 -->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
