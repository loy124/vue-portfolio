<template>
  <!-- 해당 공간은 vue-cli 방식에서 component방식으로 넘겨줘서 spring의 tiles 처럼 해당 부분을 컴포넌트화 시켜서 붙일수 있다.-->
  <div id="app" class="header-container">
    <div id="header-top">
      <div class="header">
        <div class="header-left">
          <kinesis-container>
            <kinesis-element :strength="15" type="depth">
              <div class="name-title">LEEONYOU</div>
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="header-menu">
        <div class="header-menu-item header-menu-item1">
          <kinesis-container>
            <kinesis-element :strength="2">
              <div class="menu-item" v-scroll-to="'.banner-container'">HOME</div>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="header-menu-item header-menu-item1">
          <kinesis-container>
            <kinesis-element :strength="2">
              <div v-scroll-to="'#content1'" class="menu-item">ABOUT</div>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="header-menu-item header-menu-item2">
          <kinesis-container>
            <kinesis-element :strength="2">
              <div v-scroll-to="'.skills-area'" class="menu-item">SKILL</div>
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="header-menu-item header-menu-item3">
          <kinesis-container>
            <kinesis-element :strength="2">
              <div v-scroll-to="'.portfolio-area'" class="menu-item">PROJECT</div>
            </kinesis-element>
          </kinesis-container>
        </div>
        <!-- <div class="header-menu-item header-menu-item4">
          <kinesis-container>
            <kinesis-element :strength="3">
              <div class="menu-item">CONTACT</div>
            </kinesis-element>
          </kinesis-container>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    //로그인 데이터
    return {};
  },
  mounted() {},
  computed: {
    ...mapState(["loginData", "loginModal", "registerModal"])
    // ...mapMutations(["SET_LOGIN_MODAL"])
  },
  methods: {
    ...mapMutations(["SET_LOGIN", "SET_LOGIN_MODAL", "SET_REGISTER_MODAL"]),
    getLoginData() {
      // this.loginData = localStorage.getItem('login');
      // this.SET_LOGIN(this.loginData);
    },
    logout() {
      // console.log("test");
      sessionStorage.removeItem("login");
      this.SET_LOGIN("");
    }
  }
};
</script>

<style scoped>
.name-title {
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
}
.menu-item {
  color: #fff;
}

.header-container {
  position: fixed;
  z-index: 99;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 70px;
  color: #888888;
}

.header-left {
  display: flex;
  align-items: center;
  height: 70px;
}

.header-left-site-button1 {
  display: flex;
  align-items: flex-start;
  margin-left: 20px;
  min-width: 90px;
}

.header-left-site-button2 {
  min-width: 90px;
  display: flex;
  align-items: flex-start;
}
.vertical-line {
  display: inline-block;
  width: 1px;
  height: 15px;
  background: rgb(221, 221, 221);
  margin: 8px 12px 0 12px;
}

.header-left-site-button1 > button,
.header-left-site-button2 > button {
  color: #888888;
  font-size: 13px;
}

.header-left-site-button2 {
  margin-left: 8px;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-menu {
  display: flex;
}

.header-menu-item {
  min-width: 40px;
  margin-left: 35px;
}

.header-menu-item > div {
  /* color: rgb(34, 34, 34); */
  cursor: pointer;
}
.header-menu-item > div:hover {
  opacity: 0.3;
}

.header-login {
  display: flex;
  margin-left: 50px;
}
.header-login-item {
  min-width: 120px;
}
.header-login-item > button {
  margin-left: 8px;
  color: #888888;
  font-size: 13px;
}

button {
  background-color: white;
  border: 0;
}

img {
  height: 70px;
  /* height: auto; */
}
</style>
