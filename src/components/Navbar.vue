<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div
      class="collapse navbar-collapse d-flex justify-content-between"
      id="navbarNavDropdown"
    >
      <!-- <ul class="navbar-nav"> -->
      <ul
        class="navbar-nav"
        id="footerNav"
        v-for="(item, index) in items"
        :key="index"
      >
        <li class="nav-item">
          <a
            class="nav-link me-3 d-flex align-items-center"
            id="title"
            href="#"
            :style="`color: ${color}`"
            >{{ item.title || item }}
            <i
              class="fa-solid fa-angle-down align-middle ms-1"
              v-if="!item.title"
            ></i>
          </a>
        </li>
        <li class="nav-item" v-for="(sub, j) in item.subtitle" :key="j">
          <a class="nav-link" id="sub" href="#" style="color: gray">
            {{ sub }}
          </a>
        </li>
      </ul>
      <!-- </ul> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["items", "color"],
};
</script>

<style lang="scss" scoped>
#footerNav {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 200px;
  width: calc(100% / 4);
}
i {
  font-size: 12px;
}

#title {
  font-size: 14px;
  font-weight: 600;
}

#sub {
  font-size: 12px;
}
</style>