<template>
  <div>
    <v-row dense align-content="center" :class="!isMobile ? '' : 'mt-6'">
      <v-col class="text-center aldrich-title">
        Prendre contact avec nous
      </v-col>
    </v-row>
    <v-row :class="!isMobile ? '' : 'mb-6'">
      <v-col cols="12" class="text-center">sdf </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactForm extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown
  }
}
</script>

<style>
.aldrich-title {
  font-size: 2.125rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.aldrich {
  font-family: 'Aldrich', sans-serif !important;
  font-size: 1rem !important;
}
</style>
