<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <v-app>
    <HeaderComponent />

    <v-main>
      <RouterView />
    </v-main>

    <FooterComponent />
  </v-app>
</template>
