<template>
  <div class="introduce-container-wrapper">
    <div class="introduce-title">ABOUT</div>
    <div class="introduce-container">
      <div class="introduce-profile-image-wrapper">
        <div class="introduce-profile-wrapper">
          <img src="../assets/mail.png" />
        </div>
        <div class="introduce-profile-name">이온유</div>
        <div class="introduce-profile-job">JUNIOR DEVELOPER</div>
      </div>
      <div>
        <p class="introduce-comment">
          안녕하세요. 배움을 통해, 아이디어를 통해 문제를 해결해 나가는 과정을
          <br />좋아하는 예비 개발자입니다.
          <br />
          <span>궁금하신 점이 있으시다면 언제든지 편하게 연락주시면 감사하겠습니다.</span>
        </p>
        <div href="#" class="icon-img-wrapper">
          <img src="../assets/birthday.png" class="icon-img" />3rd January, 1994
        </div>
        <div href="#" class="icon-img-wrapper">
          <img src="../assets/phone-call.png" class="icon-img" />010-9536-5780
        </div>
        <div href="#" class="icon-img-wrapper">
          <img src="../assets/mail.png" class="icon-img" />dhsdb1541@naver.com
        </div>
        <div href="#" class="icon-img-wrapper">
          <img src="../assets/home-run.png" class="icon-img" />
          <div>Hoean-daero, Gwangju-si, Gyeonggi-do, Republic of Korea</div>
        </div>
        <a href="https://github.com/loy124" target="_blank" class="icon-img-wrapper">
          <img src="../assets/git.png" class="icon-img" />https://github.com/loy124
        </a>
        <a href="https://loy124.tistory.com/" target="_blank" class="icon-img-wrapper">
          <img src="../assets/blog.png" class="icon-img" />
          https://loy124.tistory.com/
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19BcQ6dK36iOxi_wyE0EtUmWB7LWxbrNB/view?usp=sharing"
          class="icon-img-wrapper"
        >
          <img src="../assets/google-drive.png" class="icon-img" />Portfolio -
          PPT ver(대학및 공모전)
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: black;
}
.introduce-container-wrapper {
  height: 100%;
  padding-top: 60px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.introduce-container {
  margin-top: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.introduce-title {
  margin-top: 40px;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  /* 
  background: -webkit-linear-gradient(#4169e1, #5592cf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.introduce-title::after {
  content: "";
  margin: 0 auto;
  display: block;
  width: 140px;
  height: 10px;

  background-image: linear-gradient(to right, #5592cf, #4169e1);
}
.introduce-profile-image-wrapper {
  margin-right: 80px;
}
.introduce-comment {
  font-size: 16px;
}
.icon-img {
  width: 20px;
  margin-right: 15px;
}
.icon-img-wrapper {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 2px;
  font-size: 18px;
}

.introduce-profile-wrapper {
  width: 200px;
}
.introduce-profile-wrapper > img {
  width: 100%;
}

.introduce-profile-name {
  margin-top: 10px;
  text-align: center;
  font-size: 27px;
}

.introduce-profile-job {
}
</style>
