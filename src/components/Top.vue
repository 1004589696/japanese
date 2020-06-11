<template>
  <div>
    <div :class="isBlue?'header-box blue':'header-box'">
      <div>
        <div class="logo">
          <img class="logo-img" src="../assets/tinified/logo.png" />
          <img v-if="isBlue" class="logo-txt" src="../assets/tinified/logotxt01.png" />
          <img v-else class="logo-txt" src="../assets/tinified/logotxt02.png" />
        </div>
        <div class="menu">
          <span
            v-for="item in list"
            :key="item.name"
            :class="{active:item.path==path,iskech:item.path=='/course'}"
            @click="changePath(item.path)"
          >
            {{item.name}}
            <div class="hover" v-if="item.path=='/course'">
              <div @click="todo('course02')">日语入门兴趣课程</div>
              <div @click="todo('course03')">日语考级、考研课程</div>
              <div @click="todo('course04')">日语高考课程</div>
              <div @click="todo('course05')">日语口语课程</div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      path: "",
      isBlue: false,
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
  created() {
    this.path = this.$route.path;
  },
  watch: {
    $route() {
      this.path = this.$route.path;
      if (this.path != "/") {
        this.isBlue = true;
      } else {
        this.isBlue = false;
      }
    }
  },
  methods: {
    changePath(path) {
      if (path != this.$route.path && path != "/course") {
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
        position: relative;
      }
      .hover {
        display: none;
        position: absolute;
        top: 50px;
        left: -30px;
        width: 200px;
        height: 243px;
        padding-top: 30px;
        div {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(21, 21, 21, 1);
          text-align: center;
          line-height: 60px;
          border-bottom: 1px solid rgba(225, 225, 225, 0.5);
          background-color: #fff;
        }
      }
      .iskech:hover {
        .hover {
          display: block;
        }
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
