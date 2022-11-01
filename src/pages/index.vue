<template>
  <div>
    <Carousel></Carousel>
    <Presentation></Presentation>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Carousel from '~/components/index/Carousel'
import Presentation from '~/components/index/Presentation'
@Component({
  components: { Presentation, Carousel },
})
export default class Index extends Vue {}
</script>
