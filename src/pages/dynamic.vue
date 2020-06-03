<template>
  <div class="dynamic-page">
    <HeaderIndex :isBlue="true" />
    <BlockTitle ch="游学体验" eng="STUDY TOUR EXPERIENCE" />
    <div class="tour-experience">
      <div class="line01">
        <img src="../assets/images/dynamic01.png" />
        <img src="../assets/images/dynamic02.png" />
        <img src="../assets/images/dynamic03.png" />
        <img src="../assets/images/dynamic04.png" />
        <img src="../assets/images/dynamic05.png" />
      </div>
      <div class="line02">
        <img src="../assets/images/dynamic06.png" />
        <img src="../assets/images/dynamic07.png" />
        <img src="../assets/images/dynamic08.png" />
        <img src="../assets/images/dynamic09.png" />
      </div>
      <div class="line03">
        <img src="../assets/images/dynamic10.png" />
        <img src="../assets/images/dynamic11.png" />
        <img src="../assets/images/dynamic12.png" />
        <img src="../assets/images/dynamic13.png" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderIndex from "../components/header.vue";
import BlockTitle from "../components/BlockTitle.vue";
export default {
  components: {
    HeaderIndex,
    BlockTitle
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dynamic-page {
  background-color: #f4f7fc;

  @list: 1920px, 1680px, 1440px, 1366px, 1280px;

  .loop(@arr, @index: 1, @value: extract(@arr, @index))
    when(length(@arr)>=@index ) {
    @media screen and (min-device-width: @value - 20px) and (max-device-width: @value + 20px) {
      @px: @value / 1920;

      .tour-experience {
        .line01,
        .line02,
        .line03 {
          display: flex;
          margin-bottom: 14 * @px;
          justify-content: space-between;
        }
        .line01 {
          img {
            height: 327 * @px;
          }
        }
        .line02 {
          img {
            height: 356 * @px;
          }
        }
        .line03 {
          img {
            height: 398 * @px;
          }
        }
      }
    }
    .loop(@list, (@index+1));
  }

  .loop(@list);
}
</style>
