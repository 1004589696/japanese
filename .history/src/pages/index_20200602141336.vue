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
        <div class="advantages-img">
          <img src="../assets/images/p01.png" />
        </div>
        <div class="advantages-name">团队优势</div>
        <div class="advantages-desc">
          <p>1:经验丰富、从教多年的骨干教师。</p>
          <p>2:对每位学员具有责任心和耐心。秉持着 让我们的每位学员都有所收获。</p>
          <p>3:教学点位置离大学很近，可以保证每个学员每天只要利 用一点课余时间，就能来学习。</p>
        </div>
      </div>
      <div>
        <div class="advantages-img">
          <img src="../assets/images/p02.png" />
        </div>
        <div class="advantages-name">课程优势</div>

        <div class="advantages-desc">
          <p>1:阶段性作业演讲，随堂会话练习。</p>
          <p>2:一对一纠错，每堂课课后会监督检测打卡情况。</p>
        </div>
      </div>
      <div>
        <div class="advantages-img">
          <img src="../assets/images/p03.png" />
        </div>
        <div class="advantages-name">时间优势</div>
        <div class="advantages-desc">
          <p>1:上课时间根据大家的课余或业余时间灵活安排。</p>
          <p>2:会给缺课者安排补课;不定期团体活动;随时为学生答疑解惑。</p>
        </div>
      </div>
    </div>
    <div class="block">
      <p>
        <span class="block-title">
          <span>我们的课程</span>
        </span>
      </p>
      <span class="block-title-eng">OUR COURSES</span>
    </div>
    <div class="our-courses">
      <div>
        <div class="courses-img">
          <img src="../assets/images/p04.png" />
        </div>
        <div class="courses-name">
          <span>
            <span>日语考研</span>
          </span>
        </div>
        <div class="courses-desc">突破传统的填鸭式教育，为内部学员提供 实用应试技巧，助学员高分升学。</div>
      </div>
      <div>
        <div class="courses-img">
          <img src="../assets/images/p05.png" />
        </div>
        <div class="courses-name">
          <span>
            <span>日语考级</span>
          </span>
        </div>
        <div class="courses-desc">课程设置具有阶梯螺旋上升的难度递进。针对不同考级要求与内容， 精心研发考点与强化课程。</div>
      </div>
      <div>
        <div class="courses-img">
          <img src="../assets/images/p06.png" />
        </div>
        <div class="courses-name">
          <span>
            <span>日语留学游学</span>
          </span>
        </div>
        <div class="courses-desc">优质的服务，一对一私人订制留学计划。体验日本不同的风土人情。深入感受日本文化。</div>
      </div>
      <div>
        <div class="courses-img">
          <img src="../assets/images/p07.png" />
        </div>
        <div class="courses-name">
          <span>
            <span>日语高考</span>
          </span>
        </div>
        <div class="courses-desc">因材施教，讲究引导式学习方式。关注每个同学的学习情况及状态。</div>
      </div>
      <div>
        <div class="courses-img">
          <img src="../assets/images/p08.png" />
        </div>
        <div class="courses-name">
          <span>
            <span>日语口语</span>
          </span>
        </div>
        <div class="courses-desc">独创的口语教学体系，基础学习与口语学习同步。场景会话演练，让学生克服哑巴日语。</div>
      </div>
    </div>

    <div class="block">
      <p>
        <span class="block-title">
          <span>我们的师资</span>
        </span>
      </p>
      <span class="block-title-eng">OUR TEACHERS</span>
    </div>

    <div class="our-teachers">

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
// @media screen and (min-width:600px) and (max-width:900px){
//   body {background-color:#f5f5f5;}
// }
.index-page {
  background-color: #f4f7fc;
  .our-advantages {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    & > div {
      flex: 0 0 340px;
      width: 340px;
      background-color: #fff;
      .advantages-img {
        width: 120px;
        margin: 40px auto 20px;
        img {
          width: 100%;
          vertical-align: top;
        }
      }
      .advantages-name {
        font-size: 26px;
        font-family: PingFangSC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      .advantages-desc {
        padding: 30px 30px 50px 30px;
        font-size: 16px;
        line-height: 24px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
  .our-courses {
    display: flex;
    justify-content: space-between;
    & > div {
      background-color: #fff;
      flex: 0 0 18.5%;
      .courses-img {
        padding: 5.63% 10.56%;
        text-align: center;
        img {
          width: 100%;
        }
      }
      .courses-name {
        padding: 0 16.9%;
        span {
          position: relative;
          span {
            position: relative;
            z-index: 2;
            font-size: 32px;
            font-family: PingFangSC;
            font-weight: 500;
            color: rgba(65, 65, 65, 1);
          }
        }
        & > span::before {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: calc(100% + 15px);
          height: 14px;
          background: rgba(255, 199, 70, 1);
          opacity: 0.5;
          border-radius: 7px;
        }
      }
      .courses-desc {
        padding: 8.45% 16.9% 14.08% 16.9%;
        font-size: 20px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 38px;
      }
    }
  }
}
</style>
