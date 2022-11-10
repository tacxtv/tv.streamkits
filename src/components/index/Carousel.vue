<template>
  <div>
    <v-carousel
      hide-delimiter-background
      :show-arrows="false"
      cycle
      :hide-delimiters="true"
      :interval="10000"
      height="700px"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.backgroundSrc"
      >
        <v-row class="h-full">
          <v-col :align-self="isMobile ? 'end' : 'center'" cols="12" sm="6">
            <v-img
              class="w-1/2 mx-auto"
              max-width="350px"
              :src="item.imageSrc"
            ></v-img>
          </v-col>
          <v-col :align-self="isMobile ? 'start' : 'center'" cols="12" sm="6">
            <div class="text-center">
              <div
                class="text-center"
                :class="
                  !isMobile
                    ? 'carousel-item-title'
                    : 'carousel-item-title-mobile'
                "
                v-html="item.text"
              ></div>
              <v-btn
                v-if="item.button"
                class="mt-4"
                large
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
        backgroundSrc: '/carousel/background.png',
        imageSrc: '/logos/logo.svg',
        text: 'Un bot pour les streamers<br>Fait par un streamer',
        button: {
          action: () => {
            this.$router.push({
              path: '/contact',
              query: { forNewsletter: '1' },
            })
          },
          text: 'Me tenir informé',
          // text: 'Me lancer',
        },
      },
    ]
  }

  get isMobile() {
    return (this as any).$vuetify.breakpoint.smAndDown
  }
}
</script>

<style>
.carousel-item-title {
  font-size: 2.725rem !important;
  font-weight: 600;
  line-height: 3.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.carousel-item-title-mobile {
  font-size: 2.025rem !important;
  font-weight: 600;
  line-height: 3.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}
</style>
