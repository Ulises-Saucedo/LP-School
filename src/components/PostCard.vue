<script setup lang="ts">
defineProps({
  post: Object
})
</script>

<template>
  <v-card height="400" flat border>
    <v-img :src="post?.Image[0].url" cover :height="200"></v-img>

    <v-card-title>{{ post?.Title }}</v-card-title>
    <v-card-subtitle>{{ post?.Date }} | {{ post?.Author }}</v-card-subtitle>

    <v-card-text class="text-truncate">{{ post?.Description }}</v-card-text>

    <v-card-actions>
      <v-btn
        color="#6F0D0D"
        :to="{ name: 'post', params: { postId: post?.id } }"
        block
        variant="flat"
      >
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
