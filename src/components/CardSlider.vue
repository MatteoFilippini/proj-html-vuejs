<template>
  <div class="card">
    <img
      src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ card.price }}</h5>
      <h4 class="card-text">
        {{ card.desc }}
      </h4>
      <div class="card-stats mt-4">
        <span class="me-5">{{ card.lessons }} Lessons</span>
        <span>{{ card.students }} Students</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSlider",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";

.card {
  height: 450px;
  width: 400px;
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