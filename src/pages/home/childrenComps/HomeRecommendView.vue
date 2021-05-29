<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend__item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend__item {
  flex: 1;
}

.recommend__item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>