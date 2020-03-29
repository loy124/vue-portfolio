<template>
  <div class="banner-container">
    <!-- <vue-typed-js
      :strings="['<p>Paragraph</p>', '<span>Span</span>']"
      :contentType="'html'"
    >
      <h2 class="typing"></h2>
    </vue-typed-js>-->
    <!-- <vue-typed-js :strings="['World!', 'My Friend!']">
      <h1>Hello <span class="typing"></span></h1>
    </vue-typed-js>-->

    <div>
      <vue-typed-js
        :typeSpeed="20"
        :showCursor="false"
        :strings="[
          `<div class=typed >const introduce = {
                <div class=padding-div>
                  <div>name : '이온유',</div>
                <div>birth : '1994.01.03',</div>
                <div>job : 'Web Developer',</div>
                <div>Skiil: {'HTML', 'CSS', 'JAVASCRIPT',</div>
                <div>'JAVA', 'ORACLE', 'MYSQL'},</div>
                <div>Framework: {'Vue.js', 'Jquery',</div>
                <div>  'Node.js', 'Spring', 'Spring-boot'}</div>
                <div>};</div>
                <br>
                <br>
                </div>
          </div> ^600`,
        ]"
      >
        <h1>
          <kinesis-container>
            <kinesis-element :strength="20" type="depth">
              <span class="typing"></span>
            </kinesis-element>
          </kinesis-container>
        </h1>
      </vue-typed-js>
    </div>
    <div class="move-about-button" v-scroll-to="'#content1'">
      ∇
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.typed {
  opacity: 0.8;
  width: 100%;
  height: 400px;
  font-size: 30px;
}
.center-div {
  width: 100%;
  height: 100%;
}
.padding-div {
  padding-left: 120px;
}
.banner-container {
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  position: relative;
  z-index: 1;
}
.banner-container::after {
  width: 100%;
  height: 100%;
  content: '';
  background: url('../assets/back2.jpg') 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  background-attachment: fixed;
}

.move-about-button {
  padding-top: 100px;
  font-size: 60px;
  cursor: pointer;
  color: #fff;
}
.move-about-button:hover {
  background: -webkit-linear-gradient(#008161, #4169e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
