<template>
  <div id="app">
    <!--      1.让home不要销毁掉 用keep-alive-->
    <!-- 
          keep-alive 不希望每次回来都创建一个新的组件 重新created 就用keep-alive 
     -->
    <!-- 2.让home中的内容保持原来的位置  离开时，保存
    一个位置信息saveY 回来时将位置设置为原来保存的位置信息 -->
    <!--      <router-view> 改标签会根据当前的路径，动态渲染出不同的组件 路由切换的时候，切换的是<router-view>挂载的组件，其他内容不会发生改变 -->
    <keep-alive exclude="Detail">
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
