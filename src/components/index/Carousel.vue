<template>
  <div>
    <v-carousel
      hide-delimiter-background
      :show-arrows="false"
      cycle
      :interval="10000"
      height="700px"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.backgroundSrc"
      >
        <v-row class="h-full" align="center">
          <v-col cols="12" sm="6">
            <v-img
              class="w-1/2 mx-auto"
              max-width="350px"
              :src="item.imageSrc"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div
                class="text-center font-carousel-item-text"
                v-html="item.text"
              ></div>
              <v-btn
                v-if="item.button"
                class="mt-4"
                color="primary"
                @click="item.button.action()"
                v-text="item.button.text"
              ></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
  get items() {
    return [
      {
        backgroundSrc: '/carousel/1.jpeg',
        imageSrc: '/logos/logo-white.svg',
        text: 'Un bot pour les streamers<br>Fait par un streamer',
        button: {
          action: () => {
            console.log('lol')
          },
          text: 'Se lancer',
        },
      },
    ]
  }
}
</script>

<style>
.font-carousel-item-text {
  font-family: 'Aldrich', sans-serif !important;
  font-weight: 550;
  font-size: 2rem;
}
</style>
