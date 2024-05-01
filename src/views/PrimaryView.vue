<script setup>
import GalleryComponent from '@/components/GalleryComponent.vue'
import First from '@/assets/primary/1.jpeg'
import Second from '@/assets/primary/2.jpeg'
import Third from '@/assets/primary/3.jpg'
import Fourth from '@/assets/primary/4.jpeg'
import Fifth from '@/assets/primary/5.jpeg'
import Sixth from '@/assets/primary/6.jpeg'

const images = [
  {
    largeURL: First,
    thumbnailURL: First,
    width: 2560,
    height: 1920
  },
  {
    largeURL: Second,
    thumbnailURL: Second,
    width: 2560,
    height: 1920
  },
  {
    largeURL: Third,
    thumbnailURL: Third,
    width: 2560,
    height: 1920
  },
  {
    largeURL: Fourth,
    thumbnailURL: Fourth,
    width: 2560,
    height: 1988
  },
  {
    largeURL: Fifth,
    thumbnailURL: Fifth,
    width: 2560,
    height: 1674
  },
  {
    largeURL: Sixth,
    thumbnailURL: Sixth,
    width: 2560,
    height: 1920
  }
]
</script>

<template>
  <v-container class="custom-container my-4 pa-4">
    <h2 class="text-h2 text-center font-weight-bold my-4">Primario</h2>

    <GalleryComponent galleryID="primary-school" :images="images" />

    <div class="my-6 d-flex flex-column ga-3">
      <p>
        Potenciamos las capacidades de nuestros alumnos, ofreciéndoles una educación integral,
        moderna e inclusiva.
      </p>
      <p>
        Brindamos una escolaridad con extensión horaria, que dedicamos al perfeccionamiento del uso
        de la lengua inglesa. Nuestros alumnos acceden a exámenes internacionales donde validan sus
        conocimientos.
      </p>
      <p>
        Todas nuestras aulas están equipadas tecnológicamente, lo que nos permite enseñar con los
        últimos avances en educación.
      </p>
      <ul>
        <li>Feria de ciencias.</li>
        <li>Encuentro de Literatura.</li>
        <li>Encuentro lúdico de Matemáticas.</li>
        <li>Encuentros deportivos.</li>
        <li>Campamentos.</li>
        <li>Plataforma Virtual.</li>
      </ul>
    </div>
  </v-container>
</template>

<style scoped>
.custom-container {
  max-width: 1200px !important;
}
</style>
