<template>
  <!-- <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <div>
        <a href="./index.html">aaaa</a>
      </div>
    </div>
    <router-view />
  </div>-->
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
        <div class="container"><Introduce /></div>
      </div>
      <div id="content2">
        <div class="container">content2</div>
      </div>
      <div id="content3">
        <div class="container">content3</div>
      </div>
    </div>

    <!-- //contents -->
    <div id="footer">
      <div id="footer-nav">
        <div class="container">footer-nav</div>
      </div>
      <div id="footer-info">
        <div class="container">footer-info</div>
      </div>
    </div>
    <!-- //footer -->
  </div>
</template>
<script>
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
export default {
  name: 'app',
  components: {
    Navbar,
    Banner,
    Introduce,
  },
  data() {
    return {};
  },
  methods: {
    handleScroll(e) {
      console.log(e);
    },
  },
  mounted() {},
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

/* #banner::after {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
} */

/* #contents {
  height: 790px;
} */

#footer {
  background-color: #222222;
  height: 220px;
}
/* 레이아웃 */

/* #header-top {
  height: 70px;
  line-height: 70px;
  background: #b2ebf2;
} */
/* #header-nav {
         height: 70px;
         line-height: 70px;
         background: #80deea;
     } */

/* #content1 {
  height: 90px;
  line-height: 90px;
  background-color: #26c6da;
} */
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
  content: '';
  /* background: url('./assets/back.jpg') 50% 50%; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}
#content2 {
  /* height: 480px; */
  height: 105vh;
  position: relative;
  background-color: #fff;
  z-index: 1;
  /* opacity: 0.9; */
}
#content2::after {
  width: 100%;
  height: 100%;
  content: '';
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
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

#content3::after {
  width: 100%;
  height: 100%;
  content: '';
  /* background: url('./assets/back.jpg') 50% 50%; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}

#footer-nav {
  height: 60px;
  line-height: 60px;
  background-color: ;
  position: relative;
  z-index: 1;
}

#footer-nav::after {
  width: 100%;
  height: 100%;
  content: '';
  background: url('./assets/back2.jpg') 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}

#footer-info {
  height: 160px;
  line-height: 160px;
  background-color: #222222;
  position: relative;
  z-index: 1;
}

#footer-info::after {
  width: 100%;
  height: 100%;
  content: '';
  background: url('./assets/back2.jpg') 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}
/* 컨테이너 */

.container {
  width: 1100px;
  margin: 0 auto;
  height: inherit;
  /* background: rgba(0, 0, 0, 0.1); */
}
</style>
