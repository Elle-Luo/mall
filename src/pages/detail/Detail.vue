<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :item-params="itemParams"></detail-params-info>
      <detail-comment-info :comment="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from './childComponents/DetailGoodsInfo';
import DetailParamsInfo from './childComponents/DetailParamsInfo';
import DetailCommentInfo from './childComponents/DetailCommentInfo';
import GoodsList from 'components/content/goods/GoodsList';
import { getDetail, Goods, Shop, getRecommend } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    getRecommend,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: []
    };
  },
  created() {
    console.log(this.$route);
    // 1.保存传入的iid this.$route表示当前处于活跃状态的路由
    this.iid = this.$route.params.id;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 创建店铺信息
      this.shop = new Shop(data.shopInfo);

      // 详情展示
      this.detailInfo = data.detailInfo;

      // 参数信息
      this.itemParams = data.itemParams;

      // 评论信息
      if(data.rate.cRate !==0 ) {
      this.commentInfo = data.rate.list[0];
      }
    });

    //3. 请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
    }
  }
};
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>