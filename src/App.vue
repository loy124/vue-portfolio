<template>
  <div id="app" v-on:scroll.passive="handleScroll">
    <!-- <div id="header"></div> -->
    <Navbar></Navbar>
    <!-- <div id="header-nav">
                <div class="container">header-nav</div>
    </div>-->

    <!-- //header -->
    <div id="banner" v-scroll-to="'#element'">
      <Banner />
    </div>
    <!-- banner -->
    <div id="contents">
      <div id="content1">
        <div class="container">
          <Introduce />
        </div>
      </div>
      <div id="content2">
        <div class="container">
          <Skill />
        </div>
      </div>
      <div id="content3">
        <div class="container">
          <Result />
        </div>
      </div>
    </div>

    <!-- //contents -->
    <div id="footer">
      <kinesis-container>
        <kinesis-element :strength="5">Copyright 2020 LEE ON YOU All rights reserved</kinesis-element>
      </kinesis-container>
      <!-- <div id="footer-nav"> -->

      <!-- </div> -->
      <!-- <div id="footer-info">
        <div class="container">footer-info</div>
      </div>-->
    </div>
    <!-- //footer -->
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import Result from "./components/Result";
export default {
  name: "app",
  components: {
    Navbar,
    Banner,
    Introduce,
    Skill,
    Result
  },
  data() {
    return {};
  },
  methods: {
    handleScroll(e) {
      // console.log(e);
    }
  },
  mounted() {}
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Heebo, sans-serif"; */
}
button {
  background-color: #fff;
  /* border: 0; */
}
/* 전체 레이아웃 */

#app {
  font-size: 20px;
  color: #fff;

  /* text-align: center; */
}

#header {
  height: 140px;
}

#banner {
  position: relative;
  /* height: 1000px; */
  height: 100vh;

  background: #222222;
  z-index: 1;
}

#footer {
  position: relative;
  z-index: 0;
  /* background-color: #222222; */
  height: 60px;
  /* background: url("./assets/back2.jpg") 50% 50%; */
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 레이아웃 */

#content1 {
  /* height: 480px; */
  height: 105vh;
  position: relative;
  background-color: #fff;
  z-index: 1;
  /* opacity: 0.9; */
}
#content1::after {
  width: 100%;
  height: 100%;
  content: "";
  /* background: url('./assets/back.jpg') 50% 50%; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}
#content2 {
  /* height: 480px; */
  height: 100%;
  position: relative;
  background-color: #fff;
  z-index: 1;
  /* opacity: 0.9; */
}
#content2::after {
  width: 100%;
  height: 100%;
  content: "";
  /* background: url('./assets/back.jpg') 50% 50%; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}

#content3 {
  /* height: 380px; */
  /* line-height: 380px; */
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

#content3::after {
  width: 100%;
  height: 100%;
  content: "";
  /* background: url('./assets/back.jpg') 50% 50%; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}

.container {
  width: 1100px;
  margin: 0 auto;
  height: inherit;
  /* background: rgba(0, 0, 0, 0.1); */
}
</style>
