<template>
    <div class="mtitle-box">
        <div class="title-content">
            <img class="title-content-logo" src="./logo.png" />
            <img class="title-content-logo-txt" src="./txt01.png" />
            <img class="title-content-close" v-if="open" src="./close.png" @click="open=false" />
            <img class="title-content-san" v-else src="./san.png" @click="open=true" />
            <div class="menu-list" v-if="open">
                <div class="menu-line">
                    <div class="menu-line-item">
                        <router-link to="/">首页</router-link>
                    </div>
                    <div class="menu-line-item">
                        <router-link to="/m/course">日语课程</router-link>
                    </div>
                    <div class="menu-line-item">
                        <router-link to="/m/studyabroad">留学游学</router-link>
                    </div>
                </div>
                <div class="menu-line">
                    <div class="menu-line-item">
                        <router-link to="/m/aboutus">关于我们</router-link>
                    </div>
                    <!-- <div class="menu-line-item">
                        <router-link>学员佳绩</router-link>
                    </div>-->
                    <div class="menu-line-item">
                        <router-link to="/m/dynamicsharing">动态分享</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isWhite: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            open: false
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mtitle-box {
    height: 1.0933rem;
}
.title-content {
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    height: 1.0933rem;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0.22666rem 0.48rem;
    background: rgba(54, 66, 89, 1);
    .title-content-logo {
        width: 0.666666rem;
        height: 0.666666rem;
        border-radius: 50%;
    }
    .title-content-logo-txt {
        height: 0.666666rem;
    }
    .title-content-san {
        float: right;
        height: 0.666666rem;
    }
    .title-content-close {
        float: right;
        height: 0.666666rem;
        padding: 0.1rem 0;
        box-sizing: border-box;
    }
    .menu-list {
        box-sizing: border-box;
        position: absolute;
        top: 1.0933rem;
        left: 0;
        width: 100%;
        height: 2.213332rem;
        z-index: 101;
        background-color: #fff;
        padding-top: 0.3rem;
        .menu-line {
            display: flex;
            .menu-line-item {
                flex: 0 0 33.3333%;
                text-align: center;
                position: relative;
                a {
                    display: inline-block;
                    vertical-align: top;
                    line-height: 0.8rem;
                    font-size: 0.373333rem;
                    font-family: PingFangSC;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    text-decoration: none;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-tap-highlight-color: transparent;
                }
            }
            .menu-line-item::after {
                content: "/";
                position: absolute;
                right: 0;
                top: 0.1rem;
                font-size: 0.4rem;
                font-family: PingFangSC;
                font-weight: 400;
                color: #c2c2c2;
            }
            .menu-line-item:last-child::after {
                display: none;
            }
        }
    }
}
</style>