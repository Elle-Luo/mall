<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name:"tabBar"
};
</script>
<style scoped>
#tabbar {
  width: 100%;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>