<template>
  <div class="index-page">
    <div class="studyabroad-top-img">
      <img src="../assets/imgs/index01.png" />
    </div>

    <BlockTitle ch="我们的优势" style="padding:59px 0 50px;" />

    <div class="img-list">
      <img src="../assets/imgs/index02.png" />
      <img src="../assets/imgs/index03.png" />
      <img src="../assets/imgs/index04.png" />
    </div>

    <BlockTitle ch="我们的课程" style="padding:59px 0 50px;" />

    <div class="img-list2">
      <img class="width385" src="../assets/imgs/index05.png" />
      <img class="width355" src="../assets/imgs/index06.png" />
      <img class="width355" src="../assets/imgs/index07.png" />
      <img class="width355" src="../assets/imgs/index08.png" />
      <img class="width355" src="../assets/imgs/index09.png" />
    </div>

    <BlockTitle ch="我们的师资" style="padding:59px 0 50px;" />

    <div class="our-teachers">
      <div>
        <div class="teachers-img">
          <img src="../assets/imgs/index10.png" />
        </div>
        <div class="teachers-name">浦田美玲</div>
        <div class="teachers-intro">（游学老师）</div>
        <div
          class="teachers-desc"
        >私に会うと、みんな元気になります！私に会うと、みんな日本語が上手になります！日本語が上手になって、日本の映画やアニメを見ましょう。本や漫画を読みましょう。歌を歌いましょう。（能力試験もがんばりましょう）強くて、美しい日本語を楽しんで下さい。</div>
      </div>
      <div>
        <div class="teachers-img">
          <img src="../assets/imgs/index11.png" />
        </div>
        <div class="teachers-name">赵老师</div>
        <div class="teachers-intro">（游学老师）</div>
        <div class="teachers-intro">毕业于首都大学东京大学院</div>
        <div
          class="teachers-desc"
        >「日本語の勉強は楽しいです」ということ学生に伝えたいので、常に楽しく勉強できる方法を意識して授業をしています。 大学で日本語を専攻して日本語学校の大学院進学コースを通して、日本の大学院で「日本語教育学」を勉強しました。大学院進学までの流れについて何でもお聞きください。 学生として日本語を勉強したことがあるので、学生の気持ちがよくわかります。日本語の質問はもちろん、留学生としての悩みも相談できます。ぜひ日本で楽しく日本語を勉強しましょう。</div>
      </div>
      <div>
        <div class="teachers-img">
          <img src="../assets/imgs/index12.png" />
        </div>
        <div class="teachers-name">谢老师</div>
        <div class="teachers-intro">（留学、游学老师）</div>
        <div
          class="teachers-desc"
        >高级讲师、留学、游学老师 ，毕业于湖南工商大学外语系。多年翻译学生留学资料。曾送多名学员出国游学、留学。对于每位想出国的学员，都耐心的讲解有关出国留学、游学的所有事情。执行力非常强。</div>
        <div class="teachers-desc2">教龄：6年</div>
      </div>
      <div>
        <div class="teachers-img">
          <img src="../assets/imgs/index13.png" />
        </div>
        <div class="teachers-name">胡老师</div>
        <div class="teachers-intro">（日语初级精讲老师）</div>
        <div
          class="teachers-desc"
        >日语初级精讲、擅长引导零基础学员如何学好日语，独具特色的上课方式让学员在愉快的学习氛围中，打下夯实的基础，为后期的高级日语和考级、考研日语做准备。并且能让学生在短时间内能开口说日语到会基本的日常生活用语。</div>
        <div class="teachers-desc2">教龄：2年半</div>
      </div>
      <div>
        <div class="teachers-img">
          <img src="../assets/imgs/index14.png" />
        </div>
        <div class="teachers-name">贺老师</div>
        <div class="teachers-intro">（口语老师）</div>
        <div
          class="teachers-desc"
        >毕业于日本九州大学修士，高级口语老师，深受日语文化影响，独具特色的口语练习方式，让学员脱离中文式日语口语。达到工作日语所需要求，并且让学员在口语学习过程中能真正的做到会说到爱说。</div>
        <div class="teachers-desc2">教龄：8年</div>
      </div>
    </div>

    <BlockTitle ch="我们的风采" style="padding:59px 0 50px;" />

    <div class="tour-experience">
      <div class="line01">
        <img src="../assets/imgs/index15.png" />
        <img src="../assets/imgs/index16.png" />
        <img src="../assets/imgs/index17.png" />
        <img src="../assets/imgs/index18.png" />
      </div>
      <div class="line02">
        <img src="../assets/imgs/index19.png" />
        <img src="../assets/imgs/index20.png" />
        <img src="../assets/imgs/index21.png" />
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../components/Bottom.vue";
import BlockTitle from "../components/BlockTitle.vue";
export default {
  components: {
    Bottom,
    BlockTitle
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
  .studyabroad-top-img {
    width: 100%;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  .img-list {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  @list: 1920px, 1680px, 1440px, 1366px, 1280px;

  .loop(@arr, @index: 1, @value: extract(@arr, @index))
    when(length(@arr)>=@index ) {
    @media screen and (min-device-width: @value - 20px) and (max-device-width: @value + 20px) {
      @px: @value / 1920;

      .img-list2 {
        display: flex;
        justify-content: space-between;
        height: 651 * @px;
        width: auto;
        .width385 {
          width: 385 * @px;
        }
        .width355 {
          width: 355 * @px;
        }
      }

      .our-teachers {
        display: flex;
        justify-content: space-between;
        & > div {
          flex: 0 0 350 * @px;
          height: 815 * @px;
          background-color: #fff;
          .teachers-img {
            width: 100%;
            height: 328 * @px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .teachers-name {
            text-align: center;
            font-size: 34 * @px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(0, 0, 3, 1);
            line-height: 48 * @px;
            padding-top: 20 * @px;
          }

          .teachers-intro {
            text-align: center;
            font-size: 20 * @px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(0, 0, 3, 1);
            line-height: 31 * @px;
          }

          .teachers-desc {
            padding: 10 * @px 20 * @px 0;
            font-size: 16 * @px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24 * @px;
          }
          .teachers-desc2 {
            padding: 0 20 * @px;
            font-size: 16 * @px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24 * @px;
          }
        }
      }

      .tour-experience {
        .line01,
        .line02 {
          display: flex;
          margin-bottom: 14 * @px;
          justify-content: space-between;
        }
        .line01 {
          img {
            height: 419 * @px;
          }
        }
        .line02 {
          img {
            height: 404 * @px;
          }
        }
      }
    }
    .loop(@list, (@index+1));
  }

  .loop(@list);
}
</style>
