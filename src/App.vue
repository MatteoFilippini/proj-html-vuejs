<template>
  <div>
    <Header :itemsNavbar="headerNavbar" />
    <Main :cardsBlog="cardsBlog" />
    <Footer :itemsNavbar="footerNavbar" color="white" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
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
      cardsBlog: [
        {
          person: "artist",
          desc: "Brush Strokes Energize Trees in Paintings",
          date: "May,15,2020",
          view: "688",
          url: "",
        },
        {
          person: "artist",
          desc: "Poket-Sized Notebooks Hold Miniature Paintings",
          date: "May,15,2020",
          view: "603",
          url: "",
        },
        {
          person: "artist",
          desc: "Connection Between Self-Portraits and Identify",
          date: "May,15,2020",
          view: "397",
          url: "",
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
