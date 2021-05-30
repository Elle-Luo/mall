<template>
  <div id="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control :titles="titles" class="tabcontrol"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ui>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ui>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import HomeFeatureView from "./childrenComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";

export default {
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList
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
    };
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      });
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
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
.tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>