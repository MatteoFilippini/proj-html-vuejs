<template>
  <header>
    <div class="topHeader justify-content-around align-items-center">
      <Navbar :items="itemsNavbar" />
      <figure class="m-0">
        <img src="../assets/img/dark-logo.png" alt="logo" />
      </figure>

      <div class="info">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-circle-user"></i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div class="bottomHeader">
      <h3>Commerce Business</h3>
      <h1>Distant Mentoring Program</h1>
      <Bottone testo="Dowload free guidebook" colore="verde" />
      <div class="icons">
        <i class="fa-solid fa-chart-bar"></i>
        <i class="fa-solid fa-compass"></i>
        <i class="fa-solid fa-book"></i
        ><i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
import Bottone from "./Bottone.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  props: ["itemsNavbar"],
  components: {
    Navbar,
    Bottone,
  },
};
</script>

<style lang="scss" scoped>
// top header
.topHeader {
  display: flex;
  max-height: 70px;
  align-items: center;
  img {
    height: 30px;
  }
  .info {
    i {
      padding: 0 7px;
      font-size: 16px;
    }
  }
}
// bottom header
.bottomHeader {
  height: 800px;
  background-image: url("../assets/img/home-3-hero-bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  position: relative;
  h1 {
    font-size: 70px;
    font-weight: 300;
  }
  .icons {
    height: 130px;
    width: 40px;
    background-color: white;
    border-radius: 5px 0 0 5px;
    color: black;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 20%;
    right: 0;
  }
}
</style>