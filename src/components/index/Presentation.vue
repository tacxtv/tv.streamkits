<template>
  <div>
    <v-row class="my-10">
      <v-col v-for="(item, i) in items" :key="i" cols="12" class="mb-12">
        <v-sheet
          v-if="!isMobile"
          style="border-radius: 20px"
          class="mx-auto pa-6"
          max-width="900"
          color="background"
        >
          <v-row v-if="isEven(i)">
            <v-col cols="12" sm="6">
              <v-img
                class="flex-grow-0 mr-auto ml-6"
                style="width: 200px"
                :src="item.imageSrc"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6" align-self="center">
              <div :class="!isMobile ? 'mr-6 text-right' : 'text-center'">
                <div class="aldrich-h4-title" v-text="item.title"></div>
                <div class="aldrich-h6-title" v-text="item.subtitle"></div>
                <div class="aldrich" v-text="item.text"></div>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="!isEven(i)">
            <v-col cols="12" sm="6" align-self="center">
              <div :class="!isMobile ? 'text-left ml-6' : 'text-center'">
                <div class="aldrich-h4-title" v-text="item.title"></div>
                <div class="aldrich-h6-title" v-text="item.subtitle"></div>
                <div class="aldrich" v-text="item.text"></div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                class="flex-grow-0 ml-auto mr-6"
                style="width: 200px"
                :src="item.imageSrc"
              ></v-img>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet v-else class="mx-auto" max-width="900" color="transparent">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                class="flex-grow-0 mx-auto"
                style="width: 200px"
                :src="item.imageSrc"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6" align-self="center">
              <div class="text-center">
                <div class="aldrich-h4-title" v-text="item.title"></div>
                <div class="aldrich-h6-title" v-text="item.subtitle"></div>
                <div class="aldrich" v-text="item.text"></div>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Presentation extends Vue {
  get items() {
    return [
      {
        imageSrc: '/presentation/bot.png',
        title: 'Bot',
        subtitle: 'Twitch et Discord',
        text: 'Liez vos comptes pour batir votre plus belle communauté',
      },
      {
        imageSrc: '/presentation/plugin.png',
        title: 'Plugin',
        subtitle: 'amélioré et personnalisable',
        text: 'Crééz des plugins avec notre aide pour personnaliser vos streams au besoin',
      },
      {
        imageSrc: '/presentation/stockage.png',
        title: 'Stockage',
        subtitle: 'des overlays',
        text: 'Et le tout directement dans le Cloud',
      },
      {
        imageSrc: '/presentation/commande.png',
        title: 'Commandes',
        subtitle: 'personnalisées',
        text: 'Adapté aux novices',
      },
      {
        imageSrc: '/presentation/gestion.png',
        title: 'Gestion',
        subtitle: 'des permissions',
        text: 'Pour des possibilités infinies',
      },
      {
        imageSrc: '/presentation/support.png',
        title: 'Support',
        subtitle: 'de modération',
        text: 'Votre modération toujours présente lors de vos streams',
      },
      {
        imageSrc: '/presentation/modedev.png',
        title: 'Mode',
        subtitle: 'développeur intégré',
        text: 'Pour encore plus de personnalisation',
      },
    ]
  }

  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown
  }

  isEven(x: number) {
    return x % 2 === 0
  }
}
</script>

<style>
.aldrich-h4-title {
  font-size: 2.125rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}
.aldrich-h6-title {
  font-size: 1.25rem !important;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: 'Aldrich', sans-serif !important;
  color: #ffd803;
}
.aldrich {
  font-family: 'Aldrich', sans-serif !important;
  font-size: 1rem !important;
}
</style>
