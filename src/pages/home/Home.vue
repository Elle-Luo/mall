<template>
  <div id="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullup="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- native修饰符 监听组件的原生事件-->
    <back-top @click.native="backClick" v-show="isShowBackTop"> </back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import HomeFeatureView from "./childrenComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";

export default {
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "精选", "新款"],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
    // 获取tabControl的offsetTop
    // 所有的组件都有一个属性叫$el, 用于获取组件的元素
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    /* 
      事件监听相关方法
    */
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 判断Backtop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // 加载更多
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    /* 
      网络请求相关代码 
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // scroll默认加载一次，必须调一次finishPullUp方法才会进行下一次
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
};
</script>
<style scoped>
#home {
  /* vh是视口的高度*/
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home__nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>