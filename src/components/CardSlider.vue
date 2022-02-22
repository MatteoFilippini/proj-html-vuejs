<template>
  <div class="card border-0">
    <img :src="imageSrc" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ card.price }}</h5>
      <h4 class="card-text">
        {{ card.desc }}
      </h4>
      <div class="card-stats mt-4">
        <span class="me-5"
          ><i class="fa-regular fa-file-lines me-2"></i
          >{{ card.lessons }} Lessons</span
        >
        <span
          ><i class="fa-regular fa-user me-2"></i
          >{{ card.students }} Students</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSlider",
  props: ["card"],
  computed: {
    imageSrc() {
      return require(`../assets/img/${this.card.url}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";

.card {
  height: 450px;
  width: 370px;
}

.card-title {
  color: $jungleGreen;
  font-weight: 600;
  font-size: 26px;
}
.card-stats {
  color: gray;
}
</style>