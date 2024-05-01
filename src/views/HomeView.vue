<script setup>
import { onMounted, ref } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { getPageTable } from 'vue-notion'
import First from '@/assets/carousel/1.jpg'
import Second from '@/assets/carousel/2.jpg'
import Third from '@/assets/carousel/3.jpg'
import Fourth from '@/assets/carousel/4.jpg'
import PostCard from '@/components/PostCard.vue'

const lastPosts = ref([])
const postsStore = usePostsStore()

onMounted(async () => {
  postsStore.postsTable = await getPageTable(import.meta.env.VITE_NOTION_TABLE_ID)

  lastPosts.value = postsStore.extractLastPosts()
})
</script>

<template>
  <v-carousel class="custom-carousel" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item cover :src="First"></v-carousel-item>
    <v-carousel-item cover :src="Second"></v-carousel-item>
    <v-carousel-item cover :src="Third"></v-carousel-item>
    <v-carousel-item cover :src="Fourth"></v-carousel-item>
  </v-carousel>

  <v-container class="my-16 pa-4">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="7" md="5">
        <v-img :src="First" height="450" cover></v-img>
      </v-col>
      <v-col cols="12" sm="5" md="5" class="d-flex flex-column justify-center ga-3">
        <p>
          Más de 29 años al servicio de la educación laica en Lanús Este. Enriquecemos a las futuras
          generaciones para que sean personas criteriosas, responsables y capaces de afrontar los
          retos futuros.
        </p>
        <p>
          “El principal objetivo de la educación es formar personas capaces de hacer cosas nuevas y
          no solamente repetir lo que otras generaciones hicieron”
        </p>
        <p>Jean Piaget</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="my-16 pa-4">
    <h2 class="text-center text-h2 mb-8 font-weight-bold">Novedades</h2>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="post in lastPosts" :key="post.id">
        <PostCard :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-carousel {
  height: calc(100dvh - 64px) !important;
}
</style>
