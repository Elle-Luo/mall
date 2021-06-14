<template>
  <div class="comment-info" v-if="Object.keys(comment).length !== 0">
    <div class="info-header">
      <div class="header-title">
        用户评价
      </div>
      <div class="header-more">更多
        <i class="arroe-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="comment.user.avatar" alt="">
      <span>
        {{comment.user.uname}}
      </span>
    </div>

    <div class="info-detail">
      <p>{{comment.content}}</p>
      <div class="info-other">
        <span class="date">{{comment.created}}</span>
        <span>{{comment.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" alt="" 
          v-for="(item, index) in comment.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>
<style scoped>

</style>
