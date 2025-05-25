<script setup></script>

<template>
  <v-app-bar class="navigation-bar" color="black">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="icon__container"
        icon="mdi-cart-outline"
        color="black"
        :ripple="false"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="navigation__title">ShopLift</v-app-bar-title>
    </template>

    <v-btn :ripple="false">Home</v-btn>
    <v-btn :ripple="false">Products</v-btn>
    <v-btn :ripple="false">Categories</v-btn>

    <template v-slot:append>
      <v-btn to="/" icon="mdi-magnify" :ripple="false"></v-btn>
      <v-btn icon="mdi-cart-outline" :ripple="false"></v-btn>
      <v-btn icon="mdi-account-outline" :ripple="false"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
/* Base Styling */

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

.navigation-bar ::v-deep(.v-btn:hover) {
  color: #eab308;
}

.navigation-bar ::v-deep(.v-btn__overlay),
.navigation-bar ::v-deep(.v-btn__underlay) {
  display: none !important;
  pointer-events: none !important;
}

/* Mobile Responsiveness */
</style>
