<template>
  <div id="home">
    <nav-bar class="home__nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.home__nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>