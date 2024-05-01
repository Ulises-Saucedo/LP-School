<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import StellaMaris from '@/assets/StellaMaris.png'

const { mobile } = useDisplay()
const drawer = ref(false)
const itemsMenu = [
  { title: 'Inicio', to: { name: 'home' } },
  { title: 'Primario', to: { name: 'primary' } },
  { title: 'Secundario', to: { name: 'secondary' } },
  { title: 'Historia', to: { name: 'history' } },
  { title: 'Novedades', to: { name: 'news' } }
]
</script>

<template>
  <v-app-bar app>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-if="mobile">
    </v-app-bar-nav-icon>

    <v-img :src="StellaMaris" max-width="250" contain class="ml-3"></v-img>

    <v-spacer></v-spacer>

    <div v-if="!mobile" class="d-flex ga-2 mr-3">
      <v-btn
        v-for="(item, i) in itemsMenu"
        :key="i"
        variant="flat"
        tile
        :to="item.to"
        color="#6F0D0D"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer class="h-auto" v-model="drawer" :location="mobile ? 'top' : undefined" app>
    <v-list>
      <v-list-item v-for="(item, i) in itemsMenu" :key="i" :to="item.to" active-class="active">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.active {
  background-color: #6f0d0d;
  color: white;
}
</style>
