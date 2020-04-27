<template>
  <section class="portfolio-area" id="skill">
    <div class="title title-portfolio">PORTFOLIO</div>
    <div class="container">
      <div class="portfolio-filter-wrapper">
        <div class="portfolio-filter-item">ALL</div>
        <div class="portfolio-filter-item">Jsp&Spring</div>
        <div class="portfolio-filter-item">Vue</div>
        <div class="portfolio-filter-item">AWARDS</div>
      </div>
      <div class="portfolio-item-wrapper">
        <div class="portfolio-item">
          <div class="portfolio-item-image-wrapper">
            <img src="../assets/movie.png" />
          </div>
          <div class="portfolio-item-title">제목</div>
          <div class="portfolio-item-content">git주소</div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-image-wrapper">
            <img src="../assets/movie.png" />
          </div>
          <div class="portfolio-item-title">제목</div>
          <div class="portfolio-item-content">git주소</div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-image-wrapper">
            <img src="../assets/movie.png" />
          </div>
          <div class="portfolio-item-title">제목</div>
          <div class="portfolio-item-content">git주소</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      portfolios: [
        {
          title: "KST 대국민 아이디어 공모전 장려상",
          image: require("../assets/award1.jpg"),
          sub: "주최기관 : 선박안전 기술공단"
        }
      ]
    };
  }
};
</script>

<style>
.title {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  padding-bottom: 70px;
}
.title-portfolio {
  /* margin-top: 100px; */
}

.title::after {
  content: "";
  display: block;
  width: 100px;
  height: 10px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#4169e1, #5592cf);
}
.portfolio-area * {
  height: auto;
  background-color: #fff;
  color: #222222;
}
.portfolio-area {
  margin-top: 60px;
  border-top: 1px solid #dddddd;
  padding-top: 40px;
}
.portfolio-area > .container {
  text-align: center;
}

.portfolio-filter-wrapper {
  display: flex;
  justify-content: center;
}
.portfolio-filter-item {
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.portfolio-filter-item:hover {
  opacity: 0.5;
}
.portfolio-item-wrapper {
  display: flex;

  width: 1200px;
  flex-wrap: wrap;
  margin: 0 auto;
}
.portfolio-item {
  padding: 40px 25px;
}
.portfolio-item-image-wrapper {
  height: 340px;
}
.portfolio-item-image-wrapper > img {
  /* width: 100%; */
  height: 100%;
}
.portfolio-item-title {
  margin-top: 20px;
}

.portfolio-item-content {
  margin-top: 14px;
}
</style>