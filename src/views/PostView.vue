<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NotionRenderer, getPageTable, getPageBlocks } from 'vue-notion'
import { usePostsStore } from '@/stores/posts'

const data = ref()
const router = useRouter()
const route = useRoute()
const postsStore = usePostsStore()

const { postId } = route.params

onMounted(async () => {
  postsStore.postsTable = await getPageTable(import.meta.env.VITE_NOTION_TABLE_ID)

  const postFound = postsStore.postsTable.find((post) => post.id === postId)

  if (!postFound) {
    return router.push('/404')
  }

  data.value = await getPageBlocks(postFound.id)
})
</script>

<template>
  <NotionRenderer :blockMap="data" fullPage />
</template>

<style>
@import 'vue-notion/src/styles.css';
</style>
