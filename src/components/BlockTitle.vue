<template>
  <div class="block">
    <p>
      <span class="block-title">
        <span>{{ch}}</span>
      </span>
    </p>
    <span class="block-title-eng">{{eng}}</span>
  </div>
</template>

<script>
export default {
  props: ["ch", "eng"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@list: 1920px, 1680px, 1440px, 1366px, 1280px;

.loop(@arr, @index: 1, @value: extract(@arr, @index))
  when(length(@arr)>=@index ) {
  @media screen and (min-device-width: @value - 20px) and (max-device-width: @value + 20px) {
    @px: @value / 1920;

    .block {
      text-align: center;
      padding-top: 59 * @px;
      padding-bottom: 40 * @px;
      .block-title {
        font-size: 40 * @px;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
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
        bottom: 7 * @px;
        left: 50%;
        margin-left: -40 * @px;
        width: 80 * @px;
        height: 8 * @px;
        background: linear-gradient(
          91deg,
          rgba(0, 138, 255, 1),
          rgba(0, 204, 255, 1)
        );
      }
      .block-title-eng {
        font-size: 16 * @px;
        font-family: PingFangSC;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 30 * @px;
        opacity: 0.5;
      }
    }
  }
  .loop(@list, (@index+1));
}

.loop(@list);
</style>