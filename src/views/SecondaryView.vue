<script setup>
import GalleryComponent from '@/components/GalleryComponent.vue'
import First from '@/assets/secondary/1.jpeg'
import Second from '@/assets/secondary/2.jpeg'
import Third from '@/assets/secondary/3.jpg'
import Fourth from '@/assets/secondary/4.jpg'
import Fifth from '@/assets/secondary/5.jpg'
import Sixth from '@/assets/secondary/6.jpg'

const images = [
  {
    largeURL: First,
    thumbnailURL: First,
    width: 1600,
    height: 1200
  },
  {
    largeURL: Second,
    thumbnailURL: Second,
    width: 1600,
    height: 1200
  },
  {
    largeURL: Third,
    thumbnailURL: Third,
    width: 960,
    height: 540
  },
  {
    largeURL: Fourth,
    thumbnailURL: Fourth,
    width: 1032,
    height: 581
  },
  {
    largeURL: Fifth,
    thumbnailURL: Fifth,
    width: 2560,
    height: 1920
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
    <h2 class="text-h2 text-center font-weight-bold my-4">Secundario</h2>

    <GalleryComponent galleryID="primary-school" :images="images" />

    <div class="my-6 d-flex flex-column ga-3">
      <p>
        Somos una institución creada con el objetivo de brindar una formación integral al estudiante
        en un marco de respeto, solidaridad y tolerancia. Estos son los pilares que brindan
        confianza a toda nuestra comunidad educativa.
      </p>
      <p>
        Transitamos junto a los jóvenes, una etapa insustituible a través de una educación
        personalizada donde se privilegia el diálogo y la participación con el fin de despertar su
        espíritu crítico y potenciar sus capacidades.
      </p>
      <p>
        Motivamos a cada alumno a descubrir sus habilidades y destrezas para así desenvolverse en
        todos los ámbitos, tanto sea, educativo, laboral y social.
      </p>
      <ul>
        <li>Taller de Técnicas de Estudio en 1° y 2° año.</li>
        <li>Taller de Economía en 3° año.</li>
        <li>Micro emprendimientos en 6° año.</li>
        <li>Participación en Olimpíadas Contables en UNLZ.</li>
        <li>Participación en Olimpíada Matemática Argentina (OMA) y lanusense.</li>
        <li>Organización de encuentros literarios.</li>
        <li>
          Proyectos solidarios propuestos por nuestro establecimiento con iniciativa de los alumnos.
        </li>
        <li>Participación en torneos deportivos.</li>
      </ul>
    </div>
  </v-container>
</template>

<style scoped>
.custom-container {
  max-width: 1200px !important;
}
</style>
