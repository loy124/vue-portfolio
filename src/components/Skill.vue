<template>
  <section class="skills-area" id="skill">
    <div class="title title-skill">SKILL</div>
    <div class="container">
      <div class="item" v-for="(skill, index) in skills" :key="index">
        <div class="icon">
          <span>
            <img class="icon-image" :src="skill.icon" />
          </span>
        </div>
        <div class="skill">{{skill.title}}</div>
        <div class="content">{{skill.content}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: require("../assets/idea.png"),
          title: "IDEA",
          content: `아이디어를 생각해 낸다는 것은 처음부터 완벽하게 나오지 않습니다. 자신이 살면서 필요하거나 불편했거나,
       혹은 누군가 필요로 할 것들을 조금씩 확장해 합쳐 나가는 것이 아이디어의 필수 요소라고 생각합니다.
저는 이러한 아이디어를 도출해내는 사고를 통해 문제를 해결해가는 능력을 키우게 되었고,
 아이디어를 활용하여 아이디어 공모전 및 아이디어를 바탕으로 제작한 물품을 통해 총 다섯 개의 공모전에서 수상했습니다.
 `
        },
        {
          icon: require("../assets/html-5.png"),
          title: "HTML & CSS",
          content: `
          HTML & CSS는 웹 프론트 개발에 있어서 필수 이자 기본이 되는 언어입니다. Html5및 css3의 전반적인 지식을 습득하였으며
          특정 웹사이트를 보고 display flex등을 활용하여 따라 만드는 등 웹 퍼블리싱이 가능합니다
          `
        },
        {
          icon: require("../assets/js.png"),
          title: "JAVASCRIPT",
          content: `
          JAVASCRIPT는 객체 기반의 스크립트 프로그래밍 언어입니다.
           Vanilla Js(순수 자바스크립트)를 공부를 바탕으로 ES6에 대해 이해하고있으며 
           2중 for문을 활용한 좌석 배열 선택하기, 
           현재 날짜부터 마지막 날짜의 리스트 구하기 등에 활용하고있으며 
           axios및 ajax를 활용한 REST API 방식의 비동기 통신을 활용하고있습니다.
          `
        },
        {
          icon: require("../assets/java.png"),
          title: "JAVA",
          content: `
          JAVA는 객체 지향 프로그래밍 언어입니다. 상속, 추상화, 캡슐화등을 적용한 자바에 대해 이해하고있으며 jsp, servlet등을 활용하여 서버 사이드 프로그래밍에 대해 숙지하고있습니다.          
          `
        },
        {
          icon: require("../assets/database.png"),
          title: "ORACLE & MYSQL",
          content: `
          ORACLE 및 MySQL 기본 쿼리문에 대해 숙지하고있으며 테이블간 관계 설정에 대해 숙지하고있습니다
          또한 jdbc, mybatis등을 활용하여 jsp, spring및 spring boot와 연동이 가능합니다.
          
          `
        },
        {
          icon: require("../assets/vuejs.png"),
          title: "Vue",
          content: `
          MVVM방식의 Vue.js에 대해 이해하고있으며 파일 업로드시 이미지 미리보기 및 삭제하기 컴포넌트를 제작하여 codepen에 업로드 하는등 vue.js를 활용하고있으며
          팀 프로젝트의 프론트를 vue-cli 기반으로 제작하여 Vue Router, 네비게이션 가드, Vuex를 활용하여 프로젝트를 제작하였습니다.
          `
        },

        {
          icon: require("../assets/spring.png"),
          title: "Spring & Spring-boot",
          content: `
          MVC 방식의 스프링에 대해 이해하고있으며 Spring + Mybatis를 활용해 크롤링을 활용한 영화 예매 사이트를 구현하였으며
          @RestController을 활용한 REST API 방식의 스프링 부트 프로젝트 제작이 가능합니다.
          또한 팀 프로젝트의 백엔드를 Spring-boot를 구성하여 Mybatis, AWS EC2(DB서버), S3(정적 파일 업로더)를 활용하여 프로젝트를 제작하였습니다.
          
          `
        },
        {
          icon: require("../assets/git (2).png"),
          title: "GIT & GITHUB",
          content: `
          git 에 대한 기본적인 이해를 하고있으며 (branch등) git을 통해 코드를 관리하고 git을 통해 github에 작성한 코드들을 저장및 관리하고 있습니다.
           또한 github page 기능을 활용하여 만든 사이트들을 호스팅 하고있습니다.
          `
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
.title-skill {
  margin-top: 30px;
}

.title::after {
  content: "";
  display: block;
  width: 100px;
  height: 10px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#4169e1, #5592cf);
}
.skills-area * {
  height: auto;
  background-color: #fff;
  color: #222222;
}

.skills-area > .container {
  text-align: center;
}

.skills-area > .container > .item {
  height: auto;
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  text-align: left;
  transition: all 0.5s ease;
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
}

.skills-area > .container > .item:hover {
  transform: scale(1.015);
  box-shadow: 0 6ps 20px 0 rgba(0, 0, 0, 0.2);
}

.skills-area > .container > .item > .icon {
  padding: 10px 0;
  display: inline-block;
}

.skills-area > .container > .item > .icon > span > i {
  font-size: 48px;
  color: #aaa;
}
.skills-area > .container > .item > .skill {
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
}

.skills-area > .container > .item > .content {
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 1.5px;
  padding: 10px 0;
}
.icon-image {
  width: 80px;
}
</style>