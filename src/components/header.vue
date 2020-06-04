<template>
  <div :class="isBlue?'header-box blue':'header-box'">
    <div>
      <div class="logo">
        <img class="logo-img" src="../assets/images/logo.png" />
        <img v-if="isBlue" class="logo-txt" src="../assets/images/logotxt01.png" />
        <img v-else class="logo-txt" src="../assets/images/logotxt02.png" />
      </div>
      <div class="menu">
        <span
          v-for="item in list"
          :key="item.name"
          :class="{active:item.path==path}"
          @click="todo(item.path)"
        >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isBlue"],
  data() {
    return {
      path: "",
      list: [
        {
          path: "/",
          name: "首页"
        },
        {
          path: "/studyingabroad",
          name: "留学游学"
        },
        {
          path: "/aboutsuccess",
          name: "关于佳绩"
        },
        {
          path: "/dynamicshare",
          name: "动态分享"
        }
      ]
    };
  },
  created() {
    this.path = this.$route.path;
  },
  methods: {
    todo(rou) {
      if (rou != this.path) {
        this.$router.push(rou);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-box {
  height: 80px;
  background: #fff;
  & > div {
    max-width: 1200px;
    margin: 0 auto;
    .logo {
      float: left;
      padding: 10px 0;
      width: 239px;
      position: relative;
      font-size: 0;
      img {
        vertical-align: top;
      }
      .logo-img {
        width: 60px;
        height: 60px;
      }
      .logo-txt {
        width: 178px;
        height: 60px;
      }
    }
    .menu {
      margin-left: 240px;
      text-align: right;
      padding: 15px 0;
      span {
        display: inline-block;
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 50px;
        margin-right: 20px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }
}
.blue {
  background: linear-gradient(
    91deg,
    rgba(0, 138, 255, 1),
    rgba(0, 204, 255, 1)
  );
  & > div {
    .menu {
      span {
        color: rgba(255, 255, 255, 1) !important;
      }
    }
  }
}
</style>
