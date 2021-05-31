<template>
  <!-- ref绑定子组件中。通过this.$refs.refname获取一个子组件对象 
     也可以绑定在普通的元素中，就可以拿到某个元素 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    // pullUpLoad: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      // probeType: 3 这个值不要写死
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    // 3.监听上拉事件
    // this.scroll.on('pullingUp', () => {
    //   this.$emit('pullup')
    // })
    console.log(this.scroll);

    this.scroll.refresh()
  },
};
</script>
<style scoped>
</style>