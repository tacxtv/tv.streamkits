<template>
  <div>
    <v-parallax
      :height="!isMobile ? '500' : '100%'"
      dark
      src="/why/background.jpg"
    >
      <v-row dense align-content="center" :class="!isMobile ? '' : 'mt-6'">
        <v-col
          class="text-center"
          :class="!isMobile ? 'aldrich-title' : 'aldrich-title-mobile'"
        >
          Pourquoi choisir Streamkits ?
        </v-col>
      </v-row>
      <v-row :class="!isMobile ? '' : 'mb-6'">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="4"
          class="text-center"
        >
          <span
            :class="
              !isMobile ? 'aldrich-item-title' : 'aldrich-item-title-mobile'
            "
            v-text="item.title"
          ></span
          ><br />
          <span
            :class="!isMobile ? 'aldrich-subtitle' : 'aldrich-subtitle-mobile'"
            v-text="item.subtitle"
          ></span>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Presentation extends Vue {
  get items() {
    return [
      {
        title: 'Adapté',
        subtitle: 'à vos besoins de streamer',
      },
      {
        title: 'Facile',
        subtitle: 'à prendre en main',
      },
      {
        title: 'Protection',
        subtitle: 'optimale et simple',
      },
    ]
  }

  get isMobile() {
    return (this as any).$vuetify.breakpoint.smAndDown
  }
}
</script>

<style>
.aldrich-title {
  font-size: 2.725rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}
.aldrich-title-mobile {
  font-size: 2.125rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.aldrich-item-title {
  font-size: 2.525rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}
.aldrich-item-title-mobile {
  font-size: 1.925rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.aldrich-subtitle {
  font-size: 1.75rem !important;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: 'Aldrich', sans-serif !important;
  color: #ffd803;
}
.aldrich-subtitle-mobile {
  font-size: 1.15rem !important;
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
