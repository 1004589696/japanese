<template>
    <div>
        <MTitle />
        <img class="top-img" src="./s01.png" />
        <div class="sub-title">
            <span>留学流程</span>
        </div>
        <div class="cap-title">考本科</div>
        <div
            class="cap-title-content"
        >日本留学生考试，相当于日本高考，是全国统一考试。校内考，相当于大学的自主招生。日本的好大学基本上都需要综合考虑留学生考试分数，以及校内考考试的分数来衡量是否录取。</div>
        <div class="five-box">
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
        <div class="cap-title">考硕士</div>
        <div class="cap-title-content">考硕士不需要参加日本留学生考试，也没有其他任何全国统一考试。直接参加各个大学的自主招生考试，笔试面试通过之后，即可入学。</div>
        <div class="five-box">
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
        <div class="cap-title">
            <img src="./s03.png" />申请类套餐介绍
        </div>
        <div class="sub-cap-title">“研究生”项目</div>
        <div
            class="sub-cap-title-content"
        >面向考研的同学。适合专业基础不牢固需要花时间学习，或者在日本考研失利后但签 证到期，想要继续留在日本备考的同学。 日语中“研究生”，相当于中文的硕士预科，指非正式的硕士课程旁听生。仍需通过考 试才能成为硕士。“研究生”期间，可以进入教授的研究室正常参与学习和研究。拥有 包括大学图书馆，研究室在内的所有研究资源。</div>
        <div class="sub-cap-title" style="padding-top:0.4rem;">SGU 英文项目</div>
        <div
            class="sub-cap-title-content"
        >面向考大学和考研的同学。适合各方面条件比较优秀，更擅长英语的同学。SGU 英文 项目是日本文部科学省为了推进大学的国际化进程，而实施的英语授课项目。除授课 语言为英语外，跟参加正常考试入学的学生无差别，学习期间也同样享受大学内其他 各类学习、研究、生活资源。</div>
        <div class="cap-title">
            <img src="./s03.png" />申请类服务套餐介绍
        </div>
        <div class="sub-cap-title">保证套餐</div>
        <div
            class="sub-cap-title-content"
        >已我们申请为主，学生辅助我们，申请前会给学生准确的评估定位，制定目标 学校，如果申请失败全额退款比较适合，还比较迷茫，不想分太多心在申请上 的同学。</div>
        <div class="sub-cap-title" style="padding-top:0.4rem;">辅助套餐</div>
        <div
            class="sub-cap-title-content"
        >以学生为主我们申请。比较适合有自己的想法明确目标,并希望参与到申请并且 从申请的过程中学到更多东西的同学。所有申请都是根据学生的情况定制化生气,步骤流水线。目前两个套餐,连续三年申请成功率百分之百。</div>
        <div class="six-box">
            <div>
                <span>学习日语</span>
            </div>
            <div>
                <span>
                    方向确定
                    <br />资料准备
                </span>
            </div>
            <div>
                <span>
                    导师联系
                    <br />研究计划
                </span>
            </div>
        </div>
        <div class="six-box">
            <div>
                <span>面试指导</span>
            </div>
            <div>
                <span>内诺</span>
            </div>
            <div>
                <span>
                    出愿准备
                    <br />入学准备
                </span>
            </div>
        </div>
        <div class="cap-title" style="padding-top:0.8rem;">
            <img src="./s03.png" />短期游学
        </div>
        <div class="cap-title-content">
            游学特色:1:全程有老师陪同 2:上课均由日本老师上课
            <br />(锻炼自己的口语及听力)
            <br />3:每 周体验不同的日本文化。(当地和服体验、迪斯尼乐园、上
            野动物园、大江户温泉物语)
        </div>
        <div class="sub-title">
            <span>游学体验</span>
        </div>
        <img class="top-img" src="./s05.png" style="padding-top:0.5rem;" />
        <MBottom />
    </div>
</template>

<script>
import MTitle from "../components/MTitle/MTitle.vue";
import MBottom from "@/pages/m/components/MBottom/MBottom.vue";
export default {
    components: { MTitle, MBottom },
    data() {
        return {};
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
.cap-title {
    padding: 0.4rem 0 0.15rem 0;
    text-align: center;
    font-size: 0.34rem;
    font-family: PingFangSC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 0.64rem;
    img {
        width: 0.34rem;
        height: 0.34rem;
        vertical-align: top;
        padding-top: 0.135rem;
        padding-right: 0.135rem;
    }
}
.cap-title-content {
    padding: 0 1.06rem;
    font-size: 0.32rem;
    font-family: PingFangSC;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    line-height: 0.48rem;
    text-align: center;
}
.five-box {
    padding: 0 1.75rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
        flex: 0 0 2.933333rem;
        height: 2.266666rem;
        background: url("./s02.png") no-repeat center;
        background-size: 100%;
        margin-top: 0.4rem;
        margin-bottom: 0.266666rem;
        font-size: 0.373333rem;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(92, 165, 56, 1);
        line-height: 0.4rem;
        padding-left: 0.4rem;
        box-sizing: border-box;
        display: table;
        span {
            display: table-cell;
            vertical-align: middle;
        }
    }
}
.sub-cap-title {
    font-size: 0.34rem;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(0, 176, 255, 1);
    line-height: 0.64rem;
    padding: 0 1rem;
}
.sub-cap-title-content {
    padding: 0 1rem;
    font-size: 0.32rem;
    font-family: PingFangSC;
    font-weight: 300;
    color: rgba(51, 51, 51, 1);
    line-height: 0.48rem;
    text-align: justify;
}
.six-box {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
        flex: 0 0 2.2266rem;
        height: 1.9333rem;
        background: url("./s04.png") no-repeat center;
        background-size: 100%;
        margin-top: 0.5rem;
        font-size: 0.333333rem;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(0, 176, 255, 1);
        text-align: center;
        line-height: 0.4rem;
        box-sizing: border-box;
        display: table;
        position: relative;
        span {
            display: table-cell;
            vertical-align: middle;
        }
    }
    & > div::before {
        content: "";
        position: absolute;
        left: 2.3266rem;
        top: 0.96665rem;
        width: 0.4rem;
        height: 0.06rem;
        background: rgba(0, 176, 255, 1);
    }
    & > div:last-child::before {
        display: none;
    }
}
</style>