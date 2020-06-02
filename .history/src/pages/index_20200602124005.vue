<template>
  <div class="index-page">
    <HeaderIndex />
    <div class="block">
      <p>
        <span class="block-title">
          <span>我们的优势</span>
        </span>
      </p>
      <span class="block-title-eng">OUR ADVANTAGES</span>
    </div>
    <div class="our-advantages">
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderIndex from "../components/header.vue";
export default {
  components: {
    HeaderIndex
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index-page {
  .our-advantages{
    display: flex;
    &>div{
      flex: 1;
    }
  }
}
</style>
