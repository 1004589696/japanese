<template>
    <div class="studyabroad-page" style="background-color: #f4f7fc;">
        <PcTitle :isWhite="false" />
        <img class="top-img" src="./studyabroad01.png" />
        <div class="item-content">
            <BlockTitle ch="留学流程" />
            <div class="item-content-title item-content-title1">考本科</div>
            <div
                class="item-content-title-content"
            >日本留学生考试，相当于日本高考，是全国统一考试。校内考，相当于大学的自主招生。日本的好大学基本上都需要综合考虑留学生考试分数，以及校内考考试的分数来衡量是否录取。</div>
            <div class="five-role">
                <div>
                    <span>学习日语</span>
                </div>
                <div>
                    <span>
                        参加日本
                        <br />留学生考试
                    </span>
                </div>
                <div>
                    <span>
                        参加各个
                        <br />大学校内考
                    </span>
                </div>
                <div>
                    <span>入学</span>
                </div>
            </div>
            <div class="item-content-title">考硕士</div>
            <div
                class="item-content-title-content"
            >考硕士不需要参加日本留学生考试，也没有其他任何全国统一考试。直接参加各个大学的自主招生考试，笔试面试通过之后，即可入学。</div>
            <div class="five-role">
                <div>
                    <span>学习日语</span>
                </div>
                <div>
                    <span>专业课笔试</span>
                </div>
                <div>
                    <span>面试</span>
                </div>
                <div>
                    <span>入学</span>
                </div>
            </div>
        </div>
        <div class="item-content2">
            <div class="item-content2-title">
                <img src="./studyabroad03.png" />
                申请类套餐介绍
            </div>
            <div class="left-right">
                <div>
                    <div class="left-right-title">“研究生”项目</div>
                    <div
                        class="left-right-content"
                    >面向考研的同学。适合专业基础不牢固需要花时间学习，或者在日本考研失利后但签 证到期，想要继续留在日本备考的同学。 日语中“研究生”，相当于中文的硕士预科，指非正式的硕士课程旁听生。仍需通过考 试才能成为硕士。“研究生”期间，可以进入教授的研究室正常参与学习和研究。拥有 包括大学图书馆，研究室在内的所有研究资源。</div>
                </div>
                <div>
                    <div class="left-right-title">SGU 英文项目</div>
                    <div
                        class="left-right-content"
                    >面向考大学和考研的同学。适合各方面条件比较优秀，更擅长英语的同学。SGU 英文 项目是日本文部科学省为了推进大学的国际化进程，而实施的英语授课项目。除授课 语言为英语外，跟参加正常考试入学的学生无差别，学习期间也同样享受大学内其他 各类学习、研究、生活资源。</div>
                </div>
            </div>
            <div class="item-content2-title">
                <img src="./studyabroad03.png" />
                申请类服务套餐介绍
            </div>
            <div
                class="item-content2-title-content"
            >服务的内容包含:学生的评估，研究方向定位，研究室的选定以及导师联系， 研究计划，面试，以及出院方面的指导。直到学生成功入学。</div>
            <div class="left-right">
                <div>
                    <div class="left-right-title">保证套餐</div>
                    <div
                        class="left-right-content"
                    >已我们申请为主，学生辅助我们，申请前会给学生准确的评估定位，制定目标 学校，如果申请失败全额退款比较适合，还比较迷茫，不想分太多心在申请上 的同学。</div>
                </div>
                <div>
                    <div class="left-right-title">辅助套餐</div>
                    <div
                        class="left-right-content"
                    >以学生为主我们申请。比较适合有自己的想法明确目标,并希望参与到申请并且 从申请的过程中学到更多东西的同学。所有申请都是根据学生的情况定制化生气,步骤流水线。目前两个套餐,连续三年申请成功率百分之百。</div>
                </div>
            </div>
            <div class="six-role">
                <div>
                    <span>学员评估</span>
                </div>
                <div>
                    <span>方向确定资料准备</span>
                </div>
                <div>
                    <span>导师联系研究计划</span>
                </div>
                <div>
                    <span>面试指导</span>
                </div>
                <div>
                    <span>内诺</span>
                </div>
                <div>
                    <span>出愿准备入学准备</span>
                </div>
            </div>
            <div class="item-content2-title">
                <img src="./studyabroad03.png" />
                短期游学
            </div>
            <div
                class="item-content2-title-content"
            >游学特色:1:全程有老师陪同 2:上课均由日本老师上课(锻炼自己的口语及听力)3:每 周体验不同的日本文化。(当地和服体验、迪斯尼乐园、上野动物园、大江户温泉物语)</div>
        </div>
        <BlockTitle ch="游学体验" />
        <swiper
            :options="{
				slidesPerView: 'auto',
				freeMode: true,
				spaceBetween: 0
			}"
        >
            <swiper-slide>
                <div class="experience">
                    <img class="line01" src="./dynamic01.png" />
                    <img class="line01" src="./dynamic02.png" />
                    <img class="line01" src="./dynamic03.png" />
                    <img class="line01" src="./dynamic04.png" />
                    <img class="line01" src="./dynamic05.png" />
                    <br />
                    <img class="line02" src="./dynamic06.png" />
                    <img class="line02" src="./dynamic07.png" />
                    <img class="line02" src="./dynamic08.png" />
                    <img class="line02" src="./dynamic09.png" />
                    <br />
                    <img class="line03" src="./dynamic10.png" />
                    <img class="line03" src="./dynamic11.png" />
                    <img class="line03" src="./dynamic12.png" />
                    <img class="line03" src="./dynamic13.png" />
                </div>
            </swiper-slide>
        </swiper>
        <PcBottom />
    </div>
</template>
<script>
import PcTitle from "@/components/PcTitle/PcTitle.vue";
import PcBottom from "@/components/PcBottom/PcBottom.vue";
import BlockTitle from "@/components/BlockTitle.vue";
export default {
    components: {
        PcTitle,
        PcBottom,
        BlockTitle
    },
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@baseWidth: 1200px;
@rpx: 100vw / @baseWidth;
.swiper-slide {
    width: auto !important;
}
.top-img {
    width: 100%;
    vertical-align: top;
}
.item-content {
    margin: 60 * @rpx auto 0;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    padding-bottom: 60 * @rpx;
    .item-content-title {
        text-align: center;
        font-size: 26 * @rpx;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        padding-top: 35 * @rpx;
        padding-bottom: 5 * @rpx;
    }
    .item-content-title1 {
        padding-top: 0;
    }
    .item-content-title-content {
        text-align: center;
        padding: 0 140 * @rpx;
        font-size: 20 * @rpx;
        font-family: Microsoft YaHei;
        color: rgba(102, 102, 102, 1);
        line-height: 30 * @rpx;
    }
    .five-role {
        display: flex;
        justify-content: space-between;
        padding: 0 90 * @rpx;
        margin-top: 30 * @rpx;
        & > div {
            flex: 0 0 220 * @rpx;
            width: 220 * @rpx;
            height: 170 * @rpx;
            background: url("./studyabroad02.png") no-repeat center;
            background-size: 100%;
            display: table;
            span {
                display: table-cell;
                vertical-align: middle;
                font-size: 24 * @rpx;
                font-family: Microsoft YaHei;
                font-weight: 600;
                color: rgba(92, 165, 56, 1);
                padding-left: 25 * @rpx;
                padding-right: 60 * @rpx;
            }
        }
    }
}
.item-content2 {
    margin: 50 * @rpx auto 0;
    padding-bottom: 40 * @rpx;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    .item-content2-title {
        text-align: center;
        font-size: 26 * @rpx;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        line-height: 30 * @rpx;
        padding-top: 65 * @rpx;
        img {
            vertical-align: top;
            margin-top: 2 * @rpx;
            width: 26 * @rpx;
            height: 26 * @rpx;
        }
    }
    .left-right {
        display: flex;
        justify-content: space-between;
        padding: 0 80 * @rpx;
        & > div {
            flex: 0 0 485 * @rpx;
            text-align: justify;
            .left-right-title {
                padding-top: 50 * @rpx;
                padding-bottom: 30 * @rpx;
                font-size: 22 * @rpx;
                font-family: Microsoft YaHei;
                color: rgba(0, 176, 255, 1);
            }
            .left-right-content {
                font-size: 20 * @rpx;
                font-family: Microsoft YaHei;
                color: rgba(51, 51, 51, 1);
                line-height: 30 * @rpx;
            }
        }
    }
    .item-content2-title-content {
        padding: 25 * @rpx 110 * @rpx 0;
        text-align: center;
        font-size: 20 * @rpx;
        font-family: Microsoft YaHei;
        color: rgba(102, 102, 102, 1);
        line-height: 30 * @rpx;
    }

    .six-role {
        display: flex;
        justify-content: space-between;
        padding: 60 * @rpx 30 * @rpx 0;
        & > div {
            flex: 0 0 150 * @rpx;
            width: 150 * @rpx;
            height: 131 * @rpx;
            background: url("./studyabroad04.png") no-repeat center;
            background-size: 100%;
            position: relative;
            display: table;
            span {
                display: table-cell;
                text-align: center;
                vertical-align: middle;
                font-size: 22 * @rpx;
                font-family: Microsoft YaHei;
                font-weight: 500;
                color: rgba(0, 176, 255, 1);
                padding: 0 25 * @rpx;
            }
        }
        & > div::after {
            content: "";
            position: absolute;
            right: -37 * @rpx;
            top: 63 * @rpx;
            width: 28 * @rpx;
            height: 5 * @rpx;
            background: rgba(0, 176, 255, 1);
        }
        & > div:last-child::after {
            display: none;
        }
    }
}
.experience {
    white-space: nowrap;
    img {
        vertical-align: top;
    }
    .line01 {
        height: 327 * @rpx;
    }
    .line02 {
        height: 366 * @rpx;
    }
    .line03 {
        height: 408 * @rpx;
    }
}

@media (min-width: 1230px) {
    .item-content {
        margin: 60px auto 0;
        width: 1200px;
        background: rgba(255, 255, 255, 1);
        padding-bottom: 60px;
        .item-content-title {
            text-align: center;
            font-size: 26px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
            padding-top: 35px;
            padding-bottom: 5px;
        }
        .item-content-title1 {
            padding-top: 0;
        }
        .item-content-title-content {
            text-align: center;
            padding: 0 140px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 30px;
        }
        .five-role {
            display: flex;
            justify-content: space-between;
            padding: 0 90px;
            margin-top: 30px;
            & > div {
                flex: 0 0 220px;
                width: 220px;
                height: 170px;
                background: url("./studyabroad02.png") no-repeat center;
                background-size: 100%;
                display: table;
                span {
                    display: table-cell;
                    vertical-align: middle;
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: 600;
                    color: rgba(92, 165, 56, 1);
                    padding-left: 25px;
                    padding-right: 60px;
                }
            }
        }
    }
    .item-content2 {
        margin: 50px auto 0;
        padding-bottom: 70px;
        width: 1200px;
        background: rgba(255, 255, 255, 1);
        .item-content2-title {
            text-align: center;
            font-size: 26px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
            line-height: 30px;
            padding-top: 60px;
            img {
                vertical-align: top;
                margin-top: 2px;
                width: 26px;
                height: 26px;
            }
        }
        .left-right {
            display: flex;
            justify-content: space-between;
            padding: 0 80px;
            & > div {
                flex: 0 0 485px;
                text-align: justify;
                .left-right-title {
                    padding-top: 50px;
                    padding-bottom: 30px;
                    font-size: 22px;
                    font-family: Microsoft YaHei;
                    color: rgba(0, 176, 255, 1);
                }
                .left-right-content {
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    color: rgba(51, 51, 51, 1);
                    line-height: 30px;
                }
            }
        }
        .item-content2-title-content {
            padding: 25px 110px 0;
            text-align: center;
            font-size: 20px;
            font-family: Microsoft YaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 30px;
        }
        .six-role {
            display: flex;
            justify-content: space-between;
            padding: 60px 30px 0;
            & > div {
                flex: 0 0 150px;
                width: 150px;
                height: 131px;
                background: url("./studyabroad04.png") no-repeat center;
                background-size: 100%;
                position: relative;
                display: table;
                span {
                    display: table-cell;
                    text-align: center;
                    vertical-align: middle;
                    font-size: 22px;
                    font-family: Microsoft YaHei;
                    font-weight: 500;
                    color: rgba(0, 176, 255, 1);
                    padding: 0 25px;
                }
            }
            & > div::after {
                content: "";
                position: absolute;
                right: -37px;
                top: 63px;
                width: 28px;
                height: 5px;
                background: rgba(0, 176, 255, 1);
            }
            & > div:last-child::after {
                display: none;
            }
        }
    }
    .experience {
        white-space: nowrap;
        img {
            vertical-align: top;
        }
        .line01 {
            height: 327px;
        }
        .line02 {
            height: 366px;
        }
        .line03 {
            height: 408px;
        }
    }
}
</style>
