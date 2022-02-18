<template>
  <footer>
    <Navbar :items="itemsNavbar" />
  </footer>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Footer",
  props: ["itemsNavbar"],
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
</style>