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
        <img src="../assets/images/p01.png" />
        <p>团队优势</p>
        <div>1:经验丰富、从教多年的骨干教师。
          2:对每位学员具有责任心和耐心。秉持着 让我们的每位学员都有所收获。
          3:教学点位置离大学很近，可以保证每个学员每天只要利 用一点课余时间，就能来学习。
        </div>
      </div>
      <div>
        <img src="../assets/images/p02.png" />
        <p>课程优势</p>
        <div>1:阶段性作业演讲，随堂会话练习。
          2:一对一纠错，每堂课课后会监督检测打卡情况。
        </div>
      </div>
      <div>
        <img src="../assets/images/p03.png" />
        <p>时间优势</p>
        <div>1:上课时间根据大家的课余或业余时间灵活安排。
          2:会给缺课者安排补课;不定期团体活动;随时为学生答疑解惑。
        </div>
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
  background-color: #f4f7fc;
  .our-advantages {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    & > div {
      flex: 0 0 340px;
      max-width: 340px;
      background-color: #fff;
      p {
        font-size: 26px;
        font-family: PingFangSC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      div {
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        white-space: pre;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
    }
  }
}
</style>
