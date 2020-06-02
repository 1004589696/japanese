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
        <img />
        <p>团队优势</p>
        <div>
          1:经验丰富、从教多年的骨干教师。
          2:对每位学员具有责任心和耐心。秉持着 让我们的每位学员都有所收获。
          3:教学点位置离大学很近，可以保证每个学员每天只要利 用一点课余时间，就能来学习。
        </div>
      </div>
      <div></div>
      <div></div>
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
  .our-advantages {
    display: flex;
    & > div {
      flex: 1;
    }
  }
}
</style>
