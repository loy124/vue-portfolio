<template>
  <section class="portfolio-area" id="skill">
    <div class="title title-portfolio">PORTFOLIO</div>
    <div class="container">
      <div class="portfolio-filter-wrapper">
        <div class="portfolio-filter-item">ALL</div>
        <div class="portfolio-filter-item">WEB</div>
        <div class="portfolio-filter-item">AWARDS</div>
      </div>
      <div class="portfolio-item-wrapper">
        <div v-for="(portfolio, index) in portfolios" :key="index" class="portfolio-item">
          <div class="portfolio-item-image-container">
            <div class="portfolio-item-image-wrapper">
              <img :src="portfolio.image" @click="clickModal(portfolio.title)" />
            </div>
          </div>
          <div class="portfolio-item-title">{{portfolio.title}}</div>
          <div class="portfolio-item-content">{{portfolio.sub}}</div>
        </div>
      </div>
    </div>
    <Modal v-if="modalShow">
      <div slot="header">
        <div class="modal-header-wrapper">
          <div class="modal-header-close-button" @click="closeModal">x</div>
        </div>
      </div>
      <div slot="body">{{modalData}}</div>
      <div slot="footer"></div>
    </Modal>
  </section>
</template>
<script>
import Modal from "./Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      portfolios: [
        {
          type: "web",
          title: "Project Baby(베이비 시터 사이트)",
          image: require("../assets/baby.png"),
          sub: "jsp, servlet, oracle 을 활용한 베이비 시터 예약 사이트",
          github: "https://github.com/loy124/Project_Baby",
          blog: "https://loy124.tistory.com/184?category=761447",
          address: "",
          content: `
            jsp, servlet, oracle 및 카카오페이를 활용한 베이비 시터 예약 사이트`
        },
        {
          type: "web",
          title: "크롤링을 활용한 Spring 영화 예매 사이트",
          image: require("../assets/movie.png"),
          sub: "JSoup 크롤링 + Spring + oracle 활용한 영화 예매 사이트",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `JSoup 크롤링 + Spring + oracle 및 카카오페이를 활용한 영화 예매 사이트`
        },
        {
          type: "web",
          title: "Project Room(구해방)",
          image: require("../assets/room.png"),
          sub: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)`,
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `Spring boot + Vue.js(CLI) + Mybatis + MySql(AWS EC2)) + AWS S3(이미지및 파일서버)를 활용한
          부동산 중개 플랫폼 구해방`
        },

        {
          type: "award",
          title: "KST 대국민 아이디어 공모전 장려상",
          image: require("../assets/award1.jpg"),
          sub: "주최기관 : 선박안전기술공단",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `
            팀원들간 브레인 스토밍 기법을 통해 선박에 사고 감지센서를 달아 사고 감지값을 스마트폰을 통해 사고 상태를 전송하고 자율주행드론을 통해 사고를 빠르게 감지하여 골든 타임을 지키자는 아이디어가 나왔습니다. 해당 공모전을 통해 장려상을 받았습니다.`
        },
        {
          type: "award",
          title: "스마트시티 위크 해커톤 장려상",
          image: require("../assets/award2.png"),
          sub: "주최기관 : 국토교통부, 한국 토지주택공사",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `모든 드론에 장착하여 사용할 수 있는 자율주행 보드를 제작하여 현대 자동차의 블루 링크(에어백 신호 발생 시 사고 데이터를 전송)와 연동하는 아이디어를 채택하여 기존 아이디어의 적용 범위를 넓혔습니다. 해당 공모전을 통해 장려상을 받았습니다.`
        },
        {
          type: "award",
          title: "한이음 공모전 2018 입선및 부스 개최",
          image: require("../assets/award4.png"),
          sub: "주최기관 : 한국정보산업연합회, 과학기술정보통신부",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `2018 한 이음 ICT 멘토링 (2018-04-24 ~ 2018-11-03 )수행 완료 후 선발한 SW 인재 페스티벌 부스를 개최했습니다. 자율주행 드론을 차량에 접목해 고속도로 정체 개선 및 빠른 사고감지를 위한 드론 + 센서 및 SW 개발로 입선했습니다. 제 분야는 센서 부분 및 애플리케이션 개발로써 사고감지 센서 제작 및 사고 감지에 대한 값을 전송받는 어플리케이션 제작을 했습니다.`
        },
        {
          type: "award",
          title: "성균관대 창의연구 최종발표회 장려상",
          image: require("../assets/award5.png"),
          sub: "주최기관 : 성균관대학교, 과학기술정보통신부",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `주최기관: 성균관대학교, 과학기술정보통신부
자율 주행 드론을 선박에 접목하여 사고를 감지할 수 있는 자이로 센서 및 충격 센서 및 자율주행 드론을 제작했습니다. 이를 바탕으로 2018 성균관대학교 CONNECT 창의 연구 최종 발표회에 참가했습니다. 부스를 개최한 후 발표회를 통해 장려상을 받았습니다. 제 분야는 센서 부분 및 애플리케이션 개발로써 선박의 사고감지 센서 제작 및 사고 감지에 대한 값을 전송받는 어플리케이션 제작을 했습니다.`
        },
        {
          type: "award",
          title: "K-ECO 대국민 아이디어 공모전 장려상",
          image: require("../assets/award6.png"),
          sub: "주최기관 : 한국환경공단",
          github: "https://github.com/loy124/CGV_Clone",
          blog: "https://loy124.tistory.com/193?category=747622",
          address: "",
          content: `
            어디에서나 볼수있는 버스 정류소 안내기에 미세먼지 측정센서 + 와이파이를 연동하여 미세먼지에 대한 값을 수집하고 값을 DB에 저장하여 각 지역별에 맞는 미세먼지 대책을 낼 수 있는 아이디어를 제출했습니다. 해당 공모전을 통해 장려상을 수상했습니다.`
        }
      ],
      modalData: "",
      modalShow: false
    };
  },
  methods: {
    clickModal(title) {
      this.modalShow = true;
      console.log(title);
      this.modalData = this.portfolios.filter(
        portfolio => portfolio.title === title
      )[0];
      console.log(this.modalData);
    },
    closeModal() {
      this.modalShow = false;
    }
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
  /* height: auto; */
  /* background-color: #fff; */
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
  margin-right: 40px;
  width: 100px;
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
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  overflow: hidden;
}
.portfolio-item-image-wrapper > img {
  height: 360px;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
}
.portfolio-item-image-wrapper > img:hover {
  transform: scale(1.05); /*  default */
  -webkit-transform: scale(1.05); /*  크롬 */
  -moz-transform: scale(1.05); /* FireFox */
  -o-transform: scale(1.05); /* Opera */
}
.portfolio-item-title {
  margin-top: 30px;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.portfolio-item-content {
  margin-top: 14px;
  color: #777777;
  font-size: 16px;
  cursor: pointer;
  width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.portfolio-item-image-container {
  width: 460px;
}
</style>