<template>
  <div :class="isBlue?'header-box blue':'header-box'">
    <div>
      <div class="logo"></div>
      <div class="menu">
        <span>首页</span>
        <span>日语课程</span>
        <span>留学游学</span>
        <span>关于我们</span>
        <span>学院佳绩</span>
        <span>动态分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isBlue"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-box {
  height: 80px;
  background: #f4f7fc;
  & > div {
    max-width: 1200px;
    margin: 0 auto;
    .logo {
      float: left;
      height: 80px;
      width: 240px;
      background-color: red;
    }
    .menu {
      margin-left: 240px;
      text-align: right;
      padding: 15px 0;
      span {
        display: inline-block;
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 50px;
        margin-right: 60px;
        cursor: pointer;
      }
    }
  }
}
.blue {
  background: linear-gradient(
    91deg,
    rgba(0, 138, 255, 1),
    rgba(0, 204, 255, 1)
  );
  & > div {
    .menu {
      span {
        color: rgba(255, 255, 255, 1) !important;
      }
    }
  }
}
</style>
