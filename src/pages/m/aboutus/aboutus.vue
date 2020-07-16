<template>
    <div>
        <MTitle />
        <img class="top-img" src="./aboutus01.png" />
        <div class="sub-title">
            <span>关于我们</span>
        </div>
        <div class="present">
            <p>四川思彼得教育管理有限公司是一家致力于高中生、大学生、社会人士的专业日语教学培 训，出国留学、游学和合作办学的专业教育机构，总部位于四川省，大连作为主要的发展 根据地。创建伊始我校一直本着“质量第一、信誉至上、服务社会”的办学宗旨，一心为学 员负责的原则，采用屹立于大连教育培训的前列。</p>
            <p>目前与日本名校、东九区留学、东京学社等多所语言培训学校和塾合作，并且与四川部分中学合作，现目前有5个教学点，现有在校学生 500 人左右。</p>
            <p>拥有雄厚的师资力量，高薪聘请了一批具有常年授课经验的中外籍教师，资深培训教师 39 人，助教若干。并且部分每年去日本学校学习 1 个月。拥有多年教学经验;中国教师毕 业于国内著名高校，教学经验丰富，教学方式风趣幽默。另外我们还拥有严格的管理体系、灵活超前的培训模式。</p>
            <p>弊社は高校生・大学生・社会人を主として日本語の教授と海外留学・短期留学・連携教育に力を入れたプロフェッショナルな教育機構である.本社は四川省に置いており， 大連を拠点として業務を拡張している.「顧客満足度や信頼度」を第一にし，社会へ貢献 する方針で，生徒一人ひとりの学習成果に責任を持つ原則で会社を設立したため，弊社 は大連で4年ほどかけて上位に立つことができた.</p>
            <p>現在，東京学社・東九区留学や・・などの日本語学校および塾と提携しており，海外 留学と短期留学の学生を今まで既に 300 人余り送り出した.</p>
            <p>大連工業大学・東北財経大学・大連大学・湘潭大学などでは日本語教室を開設している上に，大連の一部の中学校ともコラボしており，現時点 2000 人ほどの学生は在籍し ている.</p>
            <p>弊社には精鋭教師陣があり，長年教授経験を積んだ中国人と日本人教師を雇用している. 経験豊富な教師は15人，毎年日本へ一ヶ月ほど見学することになっている.中国人の 教師は中国国内の名門校を卒業し，教授方法は独特で生徒に非常に人気である.そして厳しい管理・独特な教授方法を持っている。</p>
        </div>
        <div
            class="s"
            style="margin-top:0.4rem;background: linear-gradient(90deg,rgba(249, 97, 147, 1),rgba(254, 131, 222, 1));"
        >
            <div class="tabbars-item-title">大连工业大学教学点</div>
            <div class="tabbars-item-desc">联系方式: 18173280543</div>
        </div>
        <div
            class="s"
            style="background: linear-gradient(90deg,rgba(0,138,255,1),rgba(0,204,255,1));"
        >
            <div class="tabbars-item-title">黄河路辽师教学点</div>
            <div class="tabbars-item-desc">联系方式: 13898604692</div>
        </div>
        <div
            class="s"
            style="background:linear-gradient(90deg,rgba(153,58,252,1),rgba(227,153,227,1));"
        >
            <div class="tabbars-item-title">沙河口东财教学点</div>
            <div class="tabbars-item-desc">联系方式: 18674399914</div>
        </div>
        <div
            class="s"
            style="background:linear-gradient(90deg,rgba(67,194,188,1),rgba(132,226,139,1));"
        >
            <div class="tabbars-item-title">金州连大教学点</div>
            <div class="tabbars-item-desc">联系方式: 13898604692</div>
        </div>
        <div
            class="s"
            style="background:linear-gradient(90deg,rgba(254,137,49,1),rgba(255,195,79,1));"
        >
            <div class="tabbars-item-title">旅顺科院教学点</div>
            <div class="tabbars-item-desc">联系方式: 18173280543</div>
        </div>
        <img class="top-img" style="padding-top:0.6666rem;" src="./aboutus02.png" />
        <div class="sub-title">
            <span>学员佳绩</span>
        </div>
        <swiper
            :options="{slidesPerView:2.25,spaceBetween: 0,autoplay:{disableOnInteraction:false}}"
        >
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img01.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img02.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img03.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img04.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img05.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img06.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img07.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img08.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img09.png" />
            </swiper-slide>
            <swiper-slide>
                <img class="img-list" src="../../aboutus/aboutus-img10.png" />
            </swiper-slide>
        </swiper>
        <div class="sub-title">
            <span>学员心声</span>
        </div>
        <swiper :options="{autoHeight:false,autoplay:{disableOnInteraction:false}}">
            <swiper-slide v-for="(item,index) in c" :key="index">
                <div class="heart-item">
                    <div class="heart-item-top">
                        <img :src="pngarr[index]" />
                        <div>
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
                    </div>
                    <div class="feel">学习感受：</div>
                    <div class="feel-content">{{item.feel}}</div>
                </div>
            </swiper-slide>
        </swiper>
        <MBottom />
    </div>
</template>

<script>
import MTitle from "../components/MTitle/MTitle.vue";
import MBottom from "@/pages/m/components/MBottom/MBottom.vue";
import c from "./data.json";
import png01 from "@/pages/aboutus/aboutus-01.png";
import png02 from "@/pages/aboutus/aboutus-02.png";
import png03 from "@/pages/aboutus/aboutus-03.png";
import png04 from "@/pages/aboutus/aboutus-04.png";
import png05 from "@/pages/aboutus/aboutus-05.png";
import png06 from "@/pages/aboutus/aboutus-06.png";
import png07 from "@/pages/aboutus/aboutus-07.png";
import png08 from "@/pages/aboutus/aboutus-08.png";
import png09 from "@/pages/aboutus/aboutus-09.png";
import png10 from "@/pages/aboutus/aboutus-010.png";
export default {
    components: { MTitle, MBottom },
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
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top-img {
    width: 100%;
    vertical-align: top;
}
.sub-title {
    padding-top: 0.68rem;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    font-size: 0.5333rem;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    position: relative;
    span {
        position: relative;
        z-index: 1;
    }
}

.sub-title::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.54rem;
    width: 1.08rem;
    height: 0.10666rem;
    background: linear-gradient(
        91deg,
        rgba(0, 138, 255, 1),
        rgba(0, 204, 255, 1)
    );
}
.present {
    padding: 0.6666rem 0.9rem 0;
    font-family: PingFangSC;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    font-size: 0.32rem;
    line-height: 0.5rem;
    text-align: justify;
    p {
        padding-bottom: 0.1rem;
    }
}
.s {
    width: 8.2rem;
    height: 1.74rem;
    margin: 0.35rem auto 0;
    position: relative;
    .tabbars-item-title {
        font-size: 0.5rem;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 0.7rem;
        padding-left: 1.6rem;
        padding-top: 0.25rem;
    }
    .tabbars-item-desc {
        font-size: 0.4rem;
        font-family: PingFangSC;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 0.5rem;
        padding-top: 0.05rem;
        padding-left: 1.6rem;
    }
}
.s::before {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 1.2rem;
    width: 0.106666rem;
    height: 1.173333rem;
    background: rgba(255, 255, 255, 1);
}
.img-list {
    vertical-align: top;
    width: 4rem;
    height: 5.86rem;
    margin-top: 0.56rem;
    margin-left: 0.4rem;
}
.heart-item {
    padding: 0.6666rem 0.4rem 0 0.4rem;
}
.heart-item-top {
    display: flex;
    align-items: center;
    & > img {
        flex: 0 0 4.12rem;
        width: 4.12rem;
        height: 4.64rem;
    }
    & > div {
        flex: 1;
        margin-left: 0.8rem;
        & > div {
            padding-bottom: 0.15rem;
        }
        span {
            font-size: 0.34666rem;
            font-family: PingFangSC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 0.4rem;
        }
        .fr-span {
            color: #666666;
        }
    }
}
.feel {
    font-size: 0.37333rem;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 0.8rem;
}
.feel-content {
    font-size: 0.32rem;
    font-family: PingFangSC;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    line-height: 0.5rem;
    text-align: justify;
}
</style>