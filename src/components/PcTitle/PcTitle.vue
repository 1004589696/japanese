<template>
    <div class="pc-title-box" :class="{isWhite:!isWhite}">
        <div class="pc-title-content">
            <div class="logo">
                <img class="img" src="./logo.png" />
                <img v-if="isWhite" class="txt" src="./txt02.png" />
                <img v-else class="txt" src="./txt01.png" />
            </div>
            <div class="menu">
                <span
                    v-for="item in list"
                    :key="item.name"
                    :class="{iscourse:item.path=='/course'}"
                    @click.stop="changePath(item.path)"
                >
                    {{item.name}}
                    <div class="course-menu" v-if="item.path=='/course'">
                        <div @click.stop="todo('course02')">日语入门兴趣课程</div>
                        <div @click.stop="todo('course03')">日语考级、考研课程</div>
                        <div @click.stop="todo('course04')">日语高考课程</div>
                        <div @click.stop="todo('course05')">日语口语课程</div>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    props: {
        isWhite: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            list: [
                {
                    path: "/",
                    name: "首页"
                },
                {
                    path: "/course",
                    name: "日语课程"
                },
                {
                    path: "/studyabroad",
                    name: "留学游学"
                },
                {
                    path: "/aboutus",
                    name: "关于我们"
                },
                {
                    path: "/dynamicsharing",
                    name: "动态分享"
                }
            ]
        };
    },
    methods: {
        changePath(path) {
            if (path != this.$route.path) {
                this.$router.push(path);
            }
        },
        todo(id) {
            if (this.$route.path == "/course") {
                this.scroll("#" + id);
            } else {
                this.$router.push("/course?type=" + id);
            }
        },
        scroll(id) {
            let num = $(id).offset().top;
            $("html,body").animate({ scrollTop: num }, 100);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@baseWidth: 1200px;
@rpx: 100vw / @baseWidth;
.pc-title-box {
    height: 80 * @rpx;
    background: #fff;
    .pc-title-content {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10 * @rpx 0;
        img {
            vertical-align: top;
        }
        .logo {
            float: left;
            width: 260 * @rpx;
            .img {
                width: 60 * @rpx;
                height: 60 * @rpx;
            }
            .txt {
                width: 178 * @rpx;
                height: 60 * @rpx;
            }
        }
        .menu {
            margin-left: 260 * @rpx;
            text-align: right;
            span {
                display: inline-block;
                vertical-align: top;
                height: 60 * @rpx;
                line-height: 60 * @rpx;
                padding: 0 20 * @rpx;
                margin-right: 20 * @rpx;
                font-size: 18 * @rpx;
                font-family: Microsoft YaHei;
                color: rgba(51, 51, 51, 1);
                cursor: pointer;
                position: relative;
            }
            .course-menu {
                display: none;
                position: absolute;
                top: 45 * @rpx;
                left: -30 * @rpx;
                width: 200 * @rpx;
                height: 243 * @rpx;
                padding-top: 20 * @rpx;
                div {
                    font-size: 16 * @rpx;
                    font-family: Microsoft YaHei;
                    color: rgba(21, 21, 21, 1);
                    text-align: center;
                    line-height: 60 * @rpx;
                    border-bottom: 1px solid rgba(225, 225, 225, 0.5);
                    background-color: #fff;
                    cursor: pointer;
                }
            }
            .iscourse:hover {
                .course-menu {
                    display: block;
                }
            }
        }
    }
}
.pc-title-box.isWhite {
    background: linear-gradient(
        91deg,
        rgba(0, 138, 255, 1),
        rgba(0, 204, 255, 1)
    );
    .pc-title-content {
        .menu {
            span {
                color: #fff;
            }
        }
    }
}

@media (min-width: 1230px) {
    .pc-title-box {
        height: 80px;
        background: #fff;
        .pc-title-content {
            box-sizing: border-box;
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            padding: 10px 0;
            img {
                vertical-align: top;
            }
            .logo {
                float: left;
                width: 260px;
                .img {
                    width: 60px;
                    height: 60px;
                }
                .txt {
                    width: 178px;
                    height: 60px;
                }
            }
            .menu {
                margin-left: 260px;
                text-align: right;
                span {
                    display: inline-block;
                    vertical-align: top;
                    height: 60px;
                    line-height: 60px;
                    padding: 0 20px;
                    margin-right: 20px;
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    color: rgba(51, 51, 51, 1);
                    cursor: pointer;
                    position: relative;
                }
                .course-menu {
                    display: none;
                    position: absolute;
                    top: 45px;
                    left: -30px;
                    width: 200px;
                    height: 243px;
                    padding-top: 20px;
                    div {
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        color: rgba(21, 21, 21, 1);
                        text-align: center;
                        line-height: 60px;
                        border-bottom: 1px solid rgba(225, 225, 225, 0.5);
                        background-color: #fff;
                        cursor: pointer;
                    }
                }
                .iscourse:hover {
                    .course-menu {
                        display: block;
                    }
                }
            }
        }
    }
    .pc-title-box.isWhite {
        background: linear-gradient(
            91deg,
            rgba(0, 138, 255, 1),
            rgba(0, 204, 255, 1)
        );
        .pc-title-content {
            .menu {
                span {
                    color: #fff;
                }
            }
        }
    }
}
</style>
