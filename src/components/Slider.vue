<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active d-flex justify-content-between">
        <CardSlider v-for="(card, index) in cards" :key="index" :card="card" />
      </div>
    </div>
    <div class="carousel-indicators p-3">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
  </div>
</template>

<script>
import CardSlider from "./CardSlider";
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
    background-color: black;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    &.active {
      height: 15px;
      width: 15px;
    }
  }
}
</style>