<template>
  <div>
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">
        {{detailInfo.desc}}
      </div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" alt="" 
        v-for="(item, index) in detailInfo.detailImage[0].list" 
        :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        conuter: 0,
        imageLength: 0
      }
    },
    methods: {
      imgLoad() {
        // 判断所有图片都加在完了， 那么进行一次回调即可
        if(++this.conuter === this.imageLength) {
          this.$emit('imageLoad')
        }
      }                                                
    },
    watch: {
      detailInfo() {
        this.imageLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>
<style scoped>

</style>
