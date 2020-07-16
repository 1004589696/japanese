<template>
  <div class="foot-box">
    <div class="foot-content">
      <div class="img-qr">
        <img src="./qr01.png" />
        <p>微信咨询/报名</p>
      </div>
      <div class="txt">
        <p>微信：SIBIDE123</p>
        <p>Q Q：501159350</p>
        <p>邮箱：501159350@qq·com</p>
        <p>地址：辽宁省大连市甘井子区玉情街34号</p>
        <P>咨询电话：13898604692 18674399914</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.foot-box {
  height: 3.44rem;
  background: #fff;
  .foot-content{
    padding:0.426rem 0.6rem 0.44rem 0.9rem;
    overflow: hidden;
    .img-qr{
      float:left;
      width:2.173rem;
      text-align:center;
      margin-right:0.453rem;
      & > img{
        display:block;
        width:100%;
        height:2.186rem;
      }
      & > p{
        color:#999;
        margin-top:0.133rem;
        font-size:0.266rem;
      }
    }
    .txt{
      margin-left:2.173rem;
      color:#333;
      font-weight: 400;
      font-size:0.293rem;
      & >p{
        line-height: 0.5rem;
      }
    }
  }
}
</style>