<template>
  <div style="height: 1000px">
    <Carousel></Carousel>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Carousel from "~/components/index/Carousel";
@Component({
  components: {Carousel}
})
export default class Index extends Vue {}
</script>
