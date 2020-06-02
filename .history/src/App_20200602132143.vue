<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.block {
  text-align: center;
  padding-top: 59px;
  padding-bottom: 40px;
  .block-title {
    font-size: 40px;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
    position: relative;
    & > span {
      position: relative;
      z-index: 2;
    }
  }
  .block-title::before {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 7px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 8px;
    background: linear-gradient(
      91deg,
      rgba(0, 138, 255, 1),
      rgba(0, 204, 255, 1)
    );
  }
  .block-title-eng {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    line-height: 30px;
    opacity: 0.5;
  }
}
</style>
