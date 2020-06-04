<template>
  <div class="top-img">
    <div>
      <img :src="url" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top-img {
  & > div {
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    img {
      text-align: center;
      max-width: 1200px;
    }
  }
}
</style>