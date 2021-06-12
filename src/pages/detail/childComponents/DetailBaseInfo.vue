<template>
  <!-- 首先判断是否有数据展示  如果没有数据就不展示 Object.key(obj).length ?== 0 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">
      {{ goods.title }}
    </div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.OLDPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        v-for="index in goods.services.length - 1"
        :key="index"
        class="info-service-item"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>
          {{ goods.services[index - 1].name }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
  margin-bottom: 20px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-other {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  font-size: 10px;
}
.info-service {
  margin-top: 20px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.info-service img {
  width: 10px;
  height: 10px;
}
</style>
