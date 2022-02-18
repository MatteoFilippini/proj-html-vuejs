<template>
  <header>
    <Navbar :items="itemsNavbar" />
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Header",
  props: ["itemsNavbar"],
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
</style>