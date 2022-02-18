<template>
  <div>
    <Header :itemsNavbar="headerNavbar" />
    <Footer :itemsNavbar="footerNavbar" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      headerNavbar: ["Home", "Pages", "Coursor", "Features", "Blog", "Shop"],
      footerNavbar: [
        {
          title: "Address",
          subtitle: [
            "382 NE 191st St # 87394 Miami, FL 33179-3899",
            "+1(305)547-9909(9am - 5pm EST, Monday-Friday)",
            "support@maxcoach.com",
          ],
        },
        {
          title: "Explore",
          subtitle: [
            "Start here",
            "Blog",
            "About us",
            "Success story",
            "Courses",
            "Contact us",
          ],
        },
        {
          title: "Information",
          subtitle: [
            "Membership",
            "Purchase guide",
            "Privacy policy",
            "Terms of service",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap";
@import "./assets/scss/style.scss";
</style>
