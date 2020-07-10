<template>
    <div class="bottom-box">
        <div>
            <div class="img-qr">
                <img src="./qr01.png" />
                <p>微信咨询/报名</p>
            </div>
            <div class="txt">
                <p>微信：sibide123</p>
                <p>Q Q：501159350</p>
                <p>邮箱：501159350@qq·com</p>
                <p>地址：辽宁省大连市甘井子区玉情街34号</p>
            </div>
            <div class="btn">
                <span>咨询电话</span>
                <p>13898604692</p>
                <p>18674399914</p>
            </div>
        </div>
        <p>
            <a class="linek" href="http://www.beian.miit.gov.cn/" target="_blank">蜀ICP备20020435号</a>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@baseWidth: 1200px;
@rpx: 100vw / @baseWidth;
.bottom-box {
    background: rgba(51, 51, 51, 1);
    margin-top: 225 * @rpx;
    height: 305 * @rpx;
    position: relative;
    & > div {
        position: absolute;
        box-sizing: border-box;
        top: -150 * @rpx;
        left: 0;
        width: 100%;
        height: 300 * @rpx;
        padding: 0 70 * @rpx;
        background: rgba(255, 255, 255, 1);
        display: flex;
        align-items: center;
        .img-qr {
            flex: 0 0 164 * @rpx;
            img {
                width: 164 * @rpx;
                height: 164 * @rpx;
            }
            p {
                text-align: center;
                font-size: 16 * @rpx;
                font-family: Microsoft YaHei;
                color: rgba(153, 153, 153, 1);
            }
        }
        .txt {
            flex: 1;
            margin-left: 43 * @rpx;
            font-size: 18 * @rpx;
            font-family: Microsoft YaHei;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 32 * @rpx;
        }
        .btn {
            flex: 0 0 205 * @rpx;
            text-align: right;
            span {
                display: inline-block;
                width: 174 * @rpx;
                height: 43 * @rpx;
                background: linear-gradient(
                    91deg,
                    rgba(0, 138, 255, 1),
                    rgba(0, 204, 255, 1)
                );
                border-radius: 6 * @rpx;
                font-size: 20 * @rpx;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 43 * @rpx;
                text-align: center;
                margin-bottom: 5 * @rpx;
            }
            p {
                width: 205 * @rpx;
                font-size: 30 * @rpx;
                font-family: Microsoft YaHei;
                font-weight: 600;
                color: rgba(51, 51, 51, 1);
                line-height: 36 * @rpx;
                margin-right: 0;
                text-align: justify;
            }
        }
    }
    & > p {
        position: absolute;
        bottom: 40 * @rpx;
        left: 0;
        width: 100%;
        text-align: center;
        .linek {
            font-family: Microsoft YaHei;
            text-decoration: none;
            font-size: 14 * @rpx;
            color: rgba(255, 255, 255, 0.7);
        }
    }
}

@media (min-width: 1230px) {
    .bottom-box {
        margin-top: 225px;
        height: 305px;
        background: rgba(51, 51, 51, 1);
        position: relative;
        & > div {
            position: absolute;
            box-sizing: border-box;
            top: -150px;
            left: 50%;
            margin-left: -600px;
            width: 1200px;
            height: 300px;
            padding: 0 70px;
            background: rgba(255, 255, 255, 1);
            display: flex;
            align-items: center;
            .img-qr {
                flex: 0 0 164px;
                img {
                    width: 164px;
                    height: 164px;
                }
                p {
                    text-align: center;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
            }
            .txt {
                flex: 1;
                margin-left: 43px;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
            }
            .btn {
                flex: 0 0 205px;
                text-align: right;
                span {
                    display: inline-block;
                    width: 174px;
                    height: 43px;
                    background: linear-gradient(
                        91deg,
                        rgba(0, 138, 255, 1),
                        rgba(0, 204, 255, 1)
                    );
                    border-radius: 6px;
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 43px;
                    text-align: center;
                    margin-bottom: 5px;
                }
                p {
                    width: 205px;
                    font-size: 30px;
                    font-family: Microsoft YaHei;
                    font-weight: 600;
                    color: rgba(51, 51, 51, 1);
                    line-height: 36px;
                    margin-right: 0;
                    text-align: justify;
                }
            }
        }
        & > p {
            position: absolute;
            bottom: 40px;
            left: 0;
            width: 100%;
            text-align: center;
            .linek {
                font-family: Microsoft YaHei;
                text-decoration: none;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
}
</style>
