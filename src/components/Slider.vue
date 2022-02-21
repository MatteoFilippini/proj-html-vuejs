<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner d-flex">
        <div class="carousel-item d-flex">
          <div v-for="(card, index) in cards" :key="index">
            <CardSlider :card="card" />
          </div>
        </div>
      </div>
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          aria-current="true"
          aria-label="Slide 1"
          class="active"
          v-for="(card, index) in 3"
          :key="index"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import CardSlider from "./CardSlider.vue";
export default {
  name: "Slider",
  components: {
    CardSlider,
  },
  data() {
    return {
      cards: [
        {
          price: "$40,00",
          desc: "Learning to Write as a professional Author",
          lessons: "20",
          students: "50",
          url: "../assets/img/course-02-480x298.jpg",
        },
        {
          price: "$0,00",
          desc: "Customers-centric Info-tech Strategies",
          lessons: "24",
          students: "769",
          url: "../assets/img/stock-full-hd-03-480x298.jpg",
        },
        {
          price: "$19,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "../assets/img/stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$9,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "../assets/img/stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$22,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "../assets/img/stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$191,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "../assets/img/stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$19s,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "../assets/img/stock-full-hd-04-480x298.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-indicators {
  position: relative;
  align-items: center;
  button {
    background-color: red;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    &.active {
      background-color: black;
      height: 15px;
      width: 15px;
    }
  }
}
</style>