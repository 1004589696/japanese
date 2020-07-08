<template>
    <div class="page-content-title">
        <span>
            <span class="txt">{{ch}}</span>
        </span>
    </div>
</template>

<script>
export default {
    props: ["ch", "eng"],
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-content-title {
    text-align: center;
    height: 34px;
    span {
        display: inline-block;
        vertical-align: top;
        line-height: 34px;
        font-size: 30px;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        position: relative;
    }
    .txt {
        position: relative;
        z-index: 2;
    }
    & > span::before {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: -2.5px;
        left: 50%;
        margin-left: -30px;
        width: 60px;
        height: 6px;
        background: linear-gradient(
            91deg,
            rgba(0, 138, 255, 1),
            rgba(0, 204, 255, 1)
        );
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
</style>