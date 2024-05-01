import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const postsTable = ref([])

  const pages = computed(() => Math.ceil(postsTable.value.length / 6))

  const extractLastPosts = () => {
    return postsTable.value.slice(0, 6)
  }

  const pagination = (page) => {
    return postsTable.value.slice((page - 1) * 6, page * 6)
  }

  return {
    postsTable,
    pages,
    extractLastPosts,
    pagination
  }
})
