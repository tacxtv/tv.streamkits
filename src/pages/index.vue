<template>
  <div>
    <Carousel></Carousel>
    <Presentation></Presentation>
    <Why></Why>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Carousel from '~/components/index/Carousel'
import Presentation from '~/components/index/Presentation'
import Why from '~/components/index/Why'
@Component({
  components: { Why, Presentation, Carousel },
})
export default class Index extends Vue {}
</script>
