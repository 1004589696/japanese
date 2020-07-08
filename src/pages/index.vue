<template>
    <div class="index-page">
        <img class="top-img" src="../assets/tinified/index01.png" />
        <BlockTitle ch="我们的优势" style="padding:59px 0 50px;" />
        <div class="advantage-card-list">
            <div class="card01">
                <p>团队优势</p>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    经验丰富、从教多年的骨干教师
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    对每位学员具有责任心和耐心。秉持着让我们的每位学员都有所收获。
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    教学点位置离大学很近，可以保证每个学员每天只要利用一点课余时间，就能来学习。
                </div>
            </div>
            <div class="card02">
                <p>课程优势</p>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    阶段性作业演讲，随堂会话练习。 一对一纠错，每堂课课后监督检测打卡
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    会给缺课者安排补课
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    不定期团体活动，随时为学生答疑解惑
                </div>
            </div>
            <div class="card03">
                <p>时间优势</p>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    上课时间根据大家的课余或业余时间灵活安排。
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    缺课者的补课时间也灵活安排
                </div>
                <div>
                    <img src="../assets/v1/index-advantage-bg04.png" />
                    线上线下随时为学生答疑解惑
                </div>
            </div>
        </div>
        <BlockTitle ch="我们的课程" style="padding:59px 0 50px;" />
        <swiper
            :options="{
				slidesPerView: 'auto',
				freeMode: true,
				spaceBetween: 0
			}"
        >
            <swiper-slide>
                <div class="course-card-list">
                    <div class="card01">
                        <p>日语考研</p>
                        <div>突破传统的填鸭式教育，为内部学员提供 实用应试技巧，助学员高分升学。</div>
                    </div>
                    <div class="card02">
                        <p>日语考级</p>
                        <div>课程设置具有阶梯螺旋上升的难度递进。针对不同考级要求与内容， 精心研发考点与强化课程。</div>
                    </div>
                    <div class="card03">
                        <p>日语留学游学</p>
                        <div>优质的服务，一对一私人订制留学计划。体验日本不同的风土人情。深入感受日本文化。</div>
                    </div>
                    <div class="card04">
                        <p>日语高考</p>
                        <div>因材施教，讲究引导式学习方式。关注每个同学的学习情况及状态。</div>
                    </div>
                    <div class="card05">
                        <p>日语口语</p>
                        <div>独创的口语教学体系，基础学习与口语学习同步。场景会话演练，让学生克服哑巴日语。</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <BlockTitle ch="我们的师资" style="padding:59px 0 50px;" />
        <swiper :options="{
				slidesPerView: 'auto',
				spaceBetween: 20
			}">
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index10.png" />
                    </div>
                    <div class="teachers-name">浦田美玲</div>
                    <div class="teachers-tag">（游学老师）</div>
                    <div
                        class="teachers-desc"
                    >私に会うと、みんな元気になります！私に会うと、みんな日本語が上手になります！日本語が上手になって、日本の映画やアニメを見ましょう。本や漫画を読みましょう。歌を歌いましょう。（能力試験もがんばりましょう）強くて、美しい日本語を楽しんで下さい。</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index11.png" />
                    </div>
                    <div class="teachers-name">赵老师</div>
                    <div class="teachers-tag">
                        （游学老师）
                        <br />毕业于首都大学东京大学院
                    </div>
                    <div
                        class="teachers-desc"
                    >「日本語の勉強は楽しいです」ということ学生に伝えたいので、常に楽しく勉強できる方法を意識して授業をしています。 大学で日本語を専攻して日本語学校の大学院進学コースを通して、日本の大学院で「日本語教育学」を勉強しました。大学院進学までの流れについて何でもお聞きください。 学生として日本語を勉強したことがあるので、学生の気持ちがよくわかります。日本語の質問はもちろん、留学生としての悩みも相談できます。ぜひ日本で楽しく日本語を勉強しましょう。</div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index12.png" />
                    </div>
                    <div class="teachers-name">谢老师</div>
                    <div class="teachers-tag">（留学、游学老师）</div>
                    <div class="teachers-desc">
                        高级讲师、留学、游学老师 ，毕业于湖南工商大学外语系。多年翻译学生留学资料。曾送多名学员出国游学、留学。对于每位想出国的学员，都耐心的讲解有关出国留学、游学的所有事情。执行力非常强。
                        <br />教龄：6年
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index13.png" />
                    </div>
                    <div class="teachers-name">胡老师</div>
                    <div class="teachers-tag">（日语初级精讲老师）</div>
                    <div class="teachers-desc">
                        日语初级精讲、擅长引导零基础学员如何学好日语，独具特色的上课方式让学员在愉快的学习氛围中，打下夯实的基础，为后期的高级日语和考级、考研日语做准备。并且能让学生在短时间内能开口说日语到会基本的日常生活用语。
                        <br />教龄：2年半
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index14.png" />
                    </div>
                    <div class="teachers-name">贺老师</div>
                    <div class="teachers-tag">（口语老师）</div>
                    <div class="teachers-desc">
                        毕业于日本九州大学修士，高级口语老师，深受日语文化影响，独具特色的口语练习方式，让学员脱离中文式日语口语。达到工作日语所需要求，并且让学员在口语学习过程中能真正的做到会说到爱说。
                        <br />教龄：8年
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="teachers-item">
                    <div class="teachers-img">
                        <img src="../assets/tinified/index22.png" />
                    </div>
                    <div class="teachers-name">小松崎 幸隆</div>
                    <div class="teachers-tag">(游学老师）</div>
                    <div
                        class="teachers-desc"
                    >中央大学文学部史科学東洋史専攻卒業。今では 日本で１０数年 韓国で１０年間 ３０００人以上の学生に日本語を教えてきました。その間ラジオパーソナリティをやって 6ヶ月日本語を教えました。韓国から日本に戻って ほかの日本語学校で校長をしました。今 東京学社で日本語を教えています。東京学社に入学した皆さんの「夢を叶う」お手伝いをします。一緒に頑張りましょう。</div>
                </div>
            </swiper-slide>
        </swiper>
        <BlockTitle ch="我们的风采" style="padding:59px 0 50px;" />
        <swiper
            :options="{
				slidesPerView: 'auto',
				freeMode: true,
				spaceBetween: 0
			}"
        >
            <swiper-slide>
                <div class="mien">
                    <img src="../assets/v1/index-mien-bg01.png" />
                </div>
            </swiper-slide>
        </swiper>
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
.top-img {
    width: 100%;
    vertical-align: top;
}
.advantage-card-list {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    & > div {
        flex: 0 0 341px;
        width: 341px;
        height: 421px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        p {
            font-size: 24px;
            padding-top: 49px;
            padding-bottom: 25px;
            text-align: center;
            font-family: PingFangSC;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
        }
        & > div {
            margin: 0 30px;
            font-size: 18px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
            img {
                vertical-align: top;
                width: 18px;
                height: 18px;
                margin-top: 3px;
            }
        }
    }
    .card01 {
        background-image: url("../assets/v1/index-advantage-bg01.png");
    }
    .card02 {
        background-image: url("../assets/v1/index-advantage-bg02.png");
    }
    .card03 {
        background-image: url("../assets/v1/index-advantage-bg03.png");
    }
}
.course-card-list {
    display: flex;
    justify-content: space-between;
    & > div {
        flex: 0 0 384px;
        margin-right: 30px;
        width: 384px;
        height: 360px;
        background-size: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        p {
            font-size: 32px;
            padding-top: 90px;
            padding-bottom: 40px;
            padding-left: 56px;
            font-family: PingFangSC;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
        }
        & > div {
            font-size: 20px;
            font-family: PingFangSC;
            padding: 0 58px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 30px;
            text-align: justify;
        }
    }
    .card01 {
        background-image: url("../assets/v1/index-course-bg01.png");
    }
    .card02 {
        background-image: url("../assets/v1/index-course-bg02.png");
    }
    .card03 {
        background-image: url("../assets/v1/index-course-bg03.png");
    }
    .card04 {
        background-image: url("../assets/v1/index-course-bg04.png");
    }
    .card05 {
        background-image: url("../assets/v1/index-course-bg05.png");
        margin-right: 0;
    }
}
.swiper-slide {
    width: auto !important;
}
.teachers-item {
    width: 280px;
    font-family: PingFangSC;
    font-weight: 400;
    background: rgba(255, 255, 255, 1);
    .teachers-img {
        width: 280px;
        height: 265px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .teachers-name {
        text-align: center;
        font-size: 34px;
        color: rgba(0, 0, 3, 1);
        padding-top: 15px;
        padding-bottom: 5px;
    }
    .teachers-tag {
        text-align: center;
        font-size: 20px;
        color: rgba(0, 0, 3, 1);
        line-height: 34px;
        padding-bottom: 10px;
    }
    .teachers-desc {
        font-size: 16px;
        color: rgba(102, 102, 102, 1);
        padding: 0 20px;
        line-height: 24px;
        text-align: justify;
        padding-bottom: 40px;
    }
}
.mien > img {
    height: 1029px;
}
.index-page {
    background-color: #f4f7fc;
}
</style>
