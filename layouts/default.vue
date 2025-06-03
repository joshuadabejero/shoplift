<script setup>
import SiteHeader from "~/components/website/Header.vue";
import SiteFooter from "~/components/website/Footer.vue";
</script>

<template>
  <v-app>
    <SiteHeader />
    <v-main>
      <NuxtPage />
    </v-main>
    <SiteFooter />
  </v-app>
</template>
