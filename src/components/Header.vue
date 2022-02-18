<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li
              class="nav-item"
              v-for="(item, index) in itemsNavbar"
              :key="index"
            >
              <a class="nav-link active" href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["itemsNavbar"],
};
</script>

<style>
</style>