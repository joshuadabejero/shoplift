<script setup>
import { ref, watch } from "vue";

const items = [
  {
    title: "Home",
    value: "home",
    icon: "mdi-home",
  },
  {
    title: "Products",
    value: "products",
    icon: "mdi-package-variant-closed",
  },
  {
    title: "Categories",
    value: "categories",
    icon: "mdi-list-box-outline",
  },
  {
    title: "Cart",
    value: "cart",
    icon: "mdi-cart-outline",
  },
];

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>

<template>
  <v-app-bar class="navigation-bar" color="black" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="icon__container"
        icon="mdi-cart-outline"
        color="black"
        :ripple="false"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="navigation__title">ShopLift</v-app-bar-title>
    </template>

    <div class="d-sm-flex d-none">
      <v-btn :ripple="false">Home</v-btn>
      <v-btn :ripple="false">Products</v-btn>
      <v-btn :ripple="false">Categories</v-btn>
    </div>

    <template v-slot:append>
      <v-btn
        to="/"
        class="d-sm-flex d-none"
        icon="mdi-magnify"
        :ripple="false"
      ></v-btn>
      <v-btn
        class="d-sm-flex d-none"
        icon="mdi-cart-outline"
        :ripple="false"
      ></v-btn>
      <v-btn icon="mdi-account-outline" :ripple="false"></v-btn>
      <v-btn
        class="d-sm-none d-flex"
        icon="mdi-menu"
        :ripple="false"
        @click.stop="drawer = !drawer"
      ></v-btn>
    </template>
  </v-app-bar>
  <client-only>
    <v-navigation-drawer
      class="navigation-bar__mobile"
      v-model="drawer"
      location="end"
      color="black"
      temporary
      app
    >
      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.value"
          link
          :prepend-icon="item.icon"
          :title="item.title"
          @click="drawer = false"
        />
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<style scoped>
/* Custom Styles */
.icon__container {
  border-radius: 6px;
  background-color: #eab308;
  margin-right: 8px;
  padding: 8px;
}

.navigation__title {
  color: #eab308;
  font-weight: 700;
  line-height: 28px;
  font-size: 24px;
}

/* Component Overrides */
.navigation-bar > ::v-deep(.v-toolbar__content) {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  height: 72px !important;
}

.navigation-bar ::v-deep(.v-btn) {
  text-transform: none !important;
}

.navigation-bar__mobile ::v-deep(.v-list-item:hover),
.navigation-bar ::v-deep(.v-btn:hover) {
  color: #eab308;
}

.navigation-bar ::v-deep(.v-btn__overlay),
.navigation-bar ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}
.navigation-bar ::v-deep(.v-toolbar__prepend) {
  margin-inline: 0 auto;
}
</style>
