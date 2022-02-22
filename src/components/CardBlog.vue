<template>
  <div class="card me-5 border-0">
    <img
      src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ card.person }}</h5>
      <h4 class="card-text">
        {{ card.desc }}
      </h4>
      <div class="card-stats mt-4">
        <span class="me-5"
          ><i class="fa-regular fa-calendar me-2"></i>{{ card.date }}
        </span>
        <span><i class="fa-regular fa-eye me-2"></i>{{ card.view }} View</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBlog",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";
.card {
  height: 450px;
  width: 400px;
  .card-title {
    text-transform: uppercase;
    font-size: 14px;
  }
  .card-stats {
    color: $delta;
    font-size: 14px;
  }
}
</style>