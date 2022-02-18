<template>
  <div>
    <Header :itemsNavbar="headerNavbar" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      headerNavbar: ["Home", "Pages", "Coursor", "Features", "Blog", "Shop"],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap";
@import "./assets/scss/style.scss";
</style>
