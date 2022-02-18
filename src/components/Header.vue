<template>
  <header>
    <div class="topHeader justify-content-around">
      <Navbar :items="itemsNavbar" />
      <img src="../assets/img/dark-logo.png" alt="logo" />
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
  //   justify-content: space-around;
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
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>