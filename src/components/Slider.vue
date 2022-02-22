<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item mb-5"
        v-for="(card, index) in cards"
        :key="index"
        :class="{ active: isActive(index) }"
      >
        <CardSlider :card="card" />
      </div>
      <div class="carousel-indicators m-0">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: isActive(index) }"
          aria-current="true"
          aria-label="Slide 1"
          v-for="(card, index) in cards"
          :key="index"
          style="
            background-color: black;
            height: 10px;
            width: 10px;
            border-radius: 50%;
          "
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
      currentIndex: 0,
      cards: [
        {
          price: "$40,00",
          desc: "Learning to Write as a professional Author",
          lessons: "20",
          students: "50",
          url: "course-02-480x298.jpg",
        },
        {
          price: "$0,00",
          desc: "Customers-centric Info-tech Strategies",
          lessons: "24",
          students: "769",
          url: "stock-full-hd-03-480x298.jpg",
        },
        {
          price: "$19,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$9,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$22,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$191,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "stock-full-hd-04-480x298.jpg",
        },
        {
          price: "$19s,00",
          desc: "Open Programming courses for Everyonr: Python",
          lessons: "17",
          students: "62",
          url: "stock-full-hd-04-480x298.jpg",
        },
      ],
    };
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>