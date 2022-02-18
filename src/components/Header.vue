<template>
  <header>
    <!-- <div class="container">
      <div class="row">
        <div class="col"></div>
      </div>
    </div> -->
    <div class="topHeader">
      <Navbar :items="itemsNavbar" />
      <img src="../assets/img/dark-logo.png" alt="logo" />
      <div class="info">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-circle-user"></i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div class="bottomHeader">a</div>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  props: ["itemsNavbar"],
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
// top header
.topHeader {
  display: flex;
  max-height: 70px;
  justify-content: space-around;
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
}
</style>