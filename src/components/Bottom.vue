<template>
  <div class="bottom-box">
    <div>
      <div class="content-box">
        <div class="img-qr">
          <img src="../assets/tinified/qr01.png" />
          <p>微信咨询/报名</p>
        </div>
        <div class="txt">
          <p>微信：sibide123</p>
          <p>Q Q：501159350</p>
          <p>邮箱：501159350@qq·com</p>
          <p>地址：辽宁省大连市甘井子区玉情街34号</p>
        </div>
        <div class="btn">
          <span>在线咨询电话</span>
          <p>13898604692</p>
          <p>18674399914</p>
        </div>
      </div>
    </div>
    <p>备案号：4s412dsf1asdfa1sdfa12dsf</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bottom-box {
  margin-top: 225px;
  height: 305px;
  background: rgba(51, 51, 51, 1);
  position: relative;
  & > div {
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 300px;
    .content-box {
      margin: 0 auto;
      width: 1200px;
      box-sizing: border-box;
      height: 300px;
      background: rgba(255, 255, 255, 1);
      display: flex;
      align-items: center;
      padding: 0 70px;
      .img-qr {
        flex: 0 0 164px;
        img {
          width: 164px;
          height: 164px;
        }
        p {
          text-align: center;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
      .txt {
        flex: 1;
        margin-left: 43px;
        font-size: 18px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
      }
      .btn {
        flex: 0 0 205px;
        text-align: right;
        span {
          display: inline-block;
          width: 174px;
          height: 43px;
          background: linear-gradient(
            91deg,
            rgba(0, 138, 255, 1),
            rgba(0, 204, 255, 1)
          );
          border-radius: 6px;
          font-size: 20px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 43px;
          text-align: center;
          margin-bottom: 5px;
        }
        p {
          width: 205px;
          font-size: 30px;
          font-family: PingFangSC;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          margin-right: 0;
          text-align: justify;
        }
      }
    }
  }
  & > p {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    text-align: center;
  }
}
</style>
