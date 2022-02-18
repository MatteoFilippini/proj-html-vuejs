<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <ul
            class="navbar-nav"
            id="footerNav"
            v-for="(item, index) in items"
            :key="index"
          >
            <li class="nav-item">
              <a class="nav-link active me-3" href="#"
                ><strong>{{ item.title || item }}</strong>
                <i
                  class="fa-solid fa-angle-down ms-1 align-middle"
                  v-if="!item.title"
                ></i>
              </a>
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
</template>

<script>
export default {
  name: "Navbar",
  props: ["items"],
};
</script>

<style lang="scss" scoped>
#footerNav {
  display: flex;
  flex-direction: column;
}
i {
  font-size: 12px;
}
a {
  font-size: 14px;
}
</style>