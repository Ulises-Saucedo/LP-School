<script setup>
import { onMounted, ref } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { getPageTable } from 'vue-notion'
import PostCard from '@/components/PostCard.vue'

const page = ref(1)
const postsStore = usePostsStore()

onMounted(async () => {
  postsStore.postsTable = await getPageTable(import.meta.env.VITE_NOTION_TABLE_ID)
})
</script>

<template>
  <v-container class="my-16 pa-4">
    <h2 class="text-center text-h2 mb-8 font-weight-bold">Novedades</h2>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="post in postsStore.pagination(page)" :key="post.id">
        <PostCard :post="post" />
      </v-col>
    </v-row>
    <v-pagination :length="postsStore.pages" v-model="page" class="mt-8"></v-pagination>
  </v-container>
</template>
