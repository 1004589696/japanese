<template>
  <div class="aboutus-page">
    <div class="studyabroad-top-img">
      <img src="../assets/tinified/aboutus01.png" />
    </div>

    <div class="page-item">
      <BlockTitle ch="关于我们" style="padding:60px 0 50px;" />
      <div class="page-item-pragram">
        <div>四川思彼得教育管理有限公司是一家致力于高中生、大学生、社会人士的专业日语教学培 训，出国留学、游学和合作办学的专业教育机构，总部位于四川省，大连作为主要的发展 根据地。创建伊始我校一直本着“质量第一、信誉至上、服务社会”的办学宗旨，一心为学 员负责的原则，采用屹立于大连教育培训的前列。</div>
        <div>目前与日本名校、东九区留学、东京学社等多所语言培训学校和塾合作，并且与四川部分中学合作，现目前有5个教学点，现有在校学生 500 人左右。</div>
        <div>拥有雄厚的师资力量，高薪聘请了一批具有常年授课经验的中外籍教师，资深培训教师 39 人，助教若干。并且部分每年去日本学校学习 1 个月。拥有多年教学经验;中国教师毕 业于国内著名高校，教学经验丰富，教学方式风趣幽默。另外我们还拥有严格的管理体系、灵活超前的培训模式。</div>
        <div>弊社は高校生・大学生・社会人を主として日本語の教授と海外留学・短期留学・連携教育に力を入れたプロフェッショナルな教育機構である.本社は四川省に置いており， 大連を拠点として業務を拡張している.「顧客満足度や信頼度」を第一にし，社会へ貢献 する方針で，生徒一人ひとりの学習成果に責任を持つ原則で会社を設立したため，弊社 は大連で4年ほどかけて上位に立つことができた.</div>
        <div>現在，東京学社・東九区留学や・・などの日本語学校および塾と提携しており，海外 留学と短期留学の学生を今まで既に 300 人余り送り出した.</div>
        <div>大連工業大学・東北財経大学・大連大学・湘潭大学などでは日本語教室を開設している上に，大連の一部の中学校ともコラボしており，現時点 2000 人ほどの学生は在籍し ている.</div>
        <div>弊社には精鋭教師陣があり，長年教授経験を積んだ中国人と日本人教師を雇用している. 経験豊富な教師は15人，毎年日本へ一ヶ月ほど見学することになっている.中国人の 教師は中国国内の名門校を卒業し，教授方法は独特で生徒に非常に人気である.そして厳しい管理・独特な教授方法を持っている。</div>
      </div>
    </div>

    <div class="tabbars">
      <div
        class="tabbars-item"
        style="background:linear-gradient(90deg,rgba(249,97,147,1),rgba(254,131,222,1));"
      >
        <div class="tabbars-item-title">大连工业大学教学点</div>
        <div class="tabbars-item-desc">联系方式: 18173280543</div>
      </div>
      <div
        class="tabbars-item"
        style="background:linear-gradient(91deg,rgba(0,138,255,1),rgba(0,204,255,1));"
      >
        <div class="tabbars-item-title">黄河路辽师教学点</div>
        <div class="tabbars-item-desc">联系方式: 13898604692</div>
      </div>
      <div
        class="tabbars-item"
        style="background:linear-gradient(90deg,rgba(153,58,252,1),rgba(227,153,227,1));"
      >
        <div class="tabbars-item-title">沙河口东财教学点</div>
        <div class="tabbars-item-desc">联系方式: 18674399914</div>
      </div>
      <div
        class="tabbars-item"
        style="background:linear-gradient(90deg,rgba(67,194,188,1),rgba(132,226,139,1));"
      >
        <div class="tabbars-item-title">金州连大教学点</div>
        <div class="tabbars-item-desc">联系方式: 18674399914</div>
      </div>
      <div
        class="tabbars-item"
        style="background:linear-gradient(90deg,rgba(254,137,49,1),rgba(255,195,79,1));"
      >
        <div class="tabbars-item-title">旅顺科院教学点</div>
        <div class="tabbars-item-desc">联系方式: 18173280543</div>
      </div>
      <div class="tabbars-item" style="opacity:0;"></div>
    </div>

    <div class="mid-img">
      <img src="../assets/tinified/aboutus02.png" />
    </div>

    <BlockTitle ch="学员佳绩" style="padding:70px 0 60px;" />
    <div class="img-list">
      <!-- <div :style="'left:-'+(currentIndex*309)+'px'">
        <img src="../assets/tinified/aboutus-img01.png" />
        <img src="../assets/tinified/aboutus-img02.png" />
        <img src="../assets/tinified/aboutus-img03.png" />
        <img src="../assets/tinified/aboutus-img04.png" />
        <img src="../assets/tinified/aboutus-img05.png" />
        <img src="../assets/tinified/aboutus-img06.png" />
        <img src="../assets/tinified/aboutus-img07.png" />
        <img src="../assets/tinified/aboutus-img08.png" />
        <img src="../assets/tinified/aboutus-img09.png" />
        <img src="../assets/tinified/aboutus-img10.png" />
      </div>-->
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img01.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img02.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img03.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img04.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img05.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img06.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img07.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img08.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img09.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/tinified/aboutus-img10.png" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="img-list-bottom">
      <span @click="reducerChange" class="pont">
        <span class="top">
          <i></i>
        </span>
      </span>
      <span class="pre-index">{{swiper?'0'+(swiper.activeIndex+1):'01'}}</span>
      <span class="index-ling"></span>
      <span class="next-index">10</span>
      <span @click="addChange" class="pont">
        <span class="top top2">
          <i></i>
        </span>
      </span>
    </div>

    <BlockTitle ch="学员心声" style="padding:60px 0 50px;" />

    <div class="heat-item" v-for="(item,index) in c" :key="index">
      <div class="heat-item-img">
        <img :src="pngarr[index]" />
      </div>
      <div class="heat-item-txt">
        <div class="heat-item-txt-top">
          <div>
            <span>姓名：</span>
            <span class="fr-span">{{item.name}}</span>
          </div>
          <div>
            <span>学校：</span>
            <span class="fr-span">{{item.school}}</span>
          </div>
          <div>
            <span>成绩:</span>
            <span class="fr-span">{{item.score}}</span>
          </div>
          <div>
            <span>专业：</span>
            <span class="fr-span">{{item.profession}}</span>
          </div>
        </div>
        <div class="heat-item-txt-title">学习感受：</div>
        <div class="heat-item-txt-content">{{item.feel}}</div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../components/Bottom.vue";
import BlockTitle from "../components/BlockTitle.vue";
import c from "./data.json";
import png01 from "../assets/tinified/aboutus-01.png";
import png02 from "../assets/tinified/aboutus-02.png";
import png03 from "../assets/tinified/aboutus-03.png";
import png04 from "../assets/tinified/aboutus-04.png";
import png05 from "../assets/tinified/aboutus-05.png";
import png06 from "../assets/tinified/aboutus-06.png";
import png07 from "../assets/tinified/aboutus-07.png";
import png08 from "../assets/tinified/aboutus-08.png";
import png09 from "../assets/tinified/aboutus-09.png";
import png10 from "../assets/tinified/aboutus-010.png";

export default {
  components: {
    Bottom,
    BlockTitle
  },
  data() {
    return {
      c,
      pngarr: [
        png01,
        png02,
        png03,
        png04,
        png05,
        png06,
        png07,
        png08,
        png09,
        png10
      ],
      swiperOptions: {
        slidesPerView: 4, // 显示的数量
        spaceBetween: 30 // 每张的间距
      },
      swiper: null
    };
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.$swiper;
  },
  methods: {
    addChange() {
      let index = this.swiper.activeIndex;
      if (index < 9) {
        this.swiper.slideTo(index + 1, 1000, false);
      }
    },
    reducerChange() {
      let index = this.swiper.activeIndex;
      if (index > 0) {
        this.swiper.slideTo(index - 1, 1000, false);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aboutus-page {
  background-color: #f4f7fc;
  .studyabroad-top-img {
    width: 100%;
    img {
      width: 100%;
      vertical-align: top;
    }
  }

  .page-item {
    background-color: #fff;
    box-sizing: border-box;
    width: 1200px;
    margin: 60px auto 0;
    .page-item-pragram {
      padding: 0 60px 70px 60px;
      font-size: 18px;
      font-family: PingFangSC;
      font-weight: 300;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
      padding-bottom: 70px;
      & > div {
        margin-bottom: 3px;
      }
    }
  }

  .tabbars {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .tabbars-item {
      flex: 0 0 386px;
      height: 126px;
      position: relative;
      margin-top: 20px;
      .tabbars-item-title {
        font-size: 24px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        padding-left: 85px;
        padding-top: 34px;
      }
      .tabbars-item-desc {
        font-size: 20px;
        font-family: PingFangSC;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        padding-left: 85px;
      }
    }
    .tabbars-item::before {
      content: "";
      position: absolute;
      left: 60px;
      top: 37px;
      width: 5px;
      height: 52px;
      background: rgba(255, 255, 255, 1);
    }
  }

  .mid-img {
    width: 100%;
    margin-top: 60px;
    img {
      width: 100%;
      vertical-align: top;
    }
  }

  .img-list {
    width: 1200px;
    height: 411px;
    margin: 0 auto;
    overflow: hidden;
    .swiper-img {
      height: 411px;
      width: 279px;
    }
  }
  .img-list-bottom {
    padding-top: 30px;
    text-align: center;
    height: 21px;
    .top {
      position: relative;
      top: 10px;
      display: inline-block;
      vertical-align: top;
      width: 43px;
      height: 1px;
      i {
        position: absolute;
        top: 0.5px;
        left: 0;
        z-index: 2;
        width: 43px;
        height: 1px;
        background-color: #333333;
      }
    }
    .top:before,
    .top:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 13px;
      height: 1px;
      background-color: #333333;
      transform-origin: 0 0;
    }
    .top:before {
      transform: rotate(-35deg);
    }
    .top:after {
      transform: rotate(35deg);
    }
    .top2 {
      top: 11px;
      i {
        top: -0.5px;
      }
    }
    .top2:before,
    .top2:after {
      left: 43px;
    }
    .top2:before {
      transform: rotate(-145deg);
    }
    .top2:after {
      transform: rotate(145deg);
    }
    .pre-index {
      color: #0096ff;
    }
    .index-ling {
      position: relative;
      top: 10px;
      display: inline-block;
      vertical-align: top;
      width: 43px;
      height: 1px;
      background-color: #333333;
      margin: 0 20px;
    }
    .pont {
      cursor: pointer;
    }
  }

  .heat-item {
    padding: 30px;
    background: rgba(255, 255, 255, 1);
    width: 1200px;
    margin: 0 auto 40px;
    box-sizing: border-box;
    display: flex;
    .heat-item-img {
      flex: 0 0 192px;
      margin-right: 30px;
      img {
        width: 100%;
      }
    }
    .heat-item-txt {
      flex: 1;
      .heat-item-txt-top {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 500;
        line-height: 30px;
        & > div {
          flex: 1;
          span {
            color: rgba(51, 51, 51, 1);
          }
          .fr-span {
            color: #666;
          }
        }
      }
      .heat-item-txt-title {
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
        padding: 10px 0 5px 0;
      }
      .heat-item-txt-content {
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
      }
    }
  }

  @list: 1920px, 1680px, 1440px, 1366px, 1280px;

  .loop(@arr, @index: 1, @value: extract(@arr, @index))
    when(length(@arr)>=@index ) {
    @media screen and (min-device-width: @value - 20px) and (max-device-width: @value + 20px) {
      @px: @value / 1920;
    }
    .loop(@list, (@index+1));
  }

  .loop(@list);
}
</style>
