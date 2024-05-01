<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const lightbox = ref(null)
const props = defineProps({
  galleryID: String,
  images: Array
})
const imagesData = props.images

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.value.init()
  }
})
onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>

<template>
  <div :id="galleryID">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(image, key) in imagesData" :key="key">
        <a
          :href="image.largeURL"
          :data-pswp-width="image.width"
          :data-pswp-height="image.height"
          target="_blank"
          rel="noreferrer"
        >
          <v-img :src="image.thumbnailURL" height="350" cover></v-img>
        </a>
      </v-col>
    </v-row>
  </div>
</template>
