<template>
  <footer>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <ul
              class="navbar-nav"
              id="footerNav"
              v-for="(item, index) in itemsNavbar"
              :key="index"
            >
              <li class="nav-item">
                <a class="nav-link active" href="#"
                  ><strong>{{ item.title }}</strong></a
                >
              </li>
              <li class="nav-item" v-for="(sub, j) in item.subtitle" :key="j">
                <a class="nav-link text-muted" href="#">
                  {{ sub }}
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["itemsNavbar"],
};
</script>

<style lang="scss" scoped>
#footerNav {
  display: flex;
  flex-direction: column;
}
</style>