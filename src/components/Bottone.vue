<template>
  <button type="button" class="btn" :class="{ white: colore === 'verde' }">
    <strong>{{ testo }}</strong>
  </button>
</template>

<script>
export default {
  name: "Bottone",
  props: ["testo", "colore"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";
button {
  padding: 12px 35px;
  border-radius: 4px;

  background-color: $jungleGreen;
  color: #fff;
}
.white {
  background-color: #fff;
  color: $jungleGreen;
}
.white::after {
  content: "\f178";
  margin-left: 5px;
}
</style>