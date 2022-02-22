<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <Navbar :items="itemsNavbar" color="white" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="icons">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="copyright text-center">
            <span
              ><i class="fa-regular fa-copyright"></i>2020 Maxcoach. All Rights
              Reserved</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      id="footerBtn"
      class="d-flex justify-content-center align-items-center p-2"
      role="button"
    >
      <a href="#"
        ><i class="fa-solid fa-arrow-up-long" style="color: white"></i
      ></a>
    </div>
  </footer>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Footer",
  props: ["itemsNavbar", "color"],
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";

footer {
  background-color: $vulcan;
  padding: 40px 0;
  position: relative;
  .icons {
    i {
      margin-right: 27px;
      color: gray;
    }
  }
  .copyright {
    color: gray;
    font-size: 12px;
    margin-top: 30px;
    i {
      font-size: 0.6rem;
      margin: 0 5px;
    }
  }
  #footerBtn {
    height: 35px;
    width: 35px;
    border-radius: 50px;
    background-color: $mountainMeadow;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
</style>