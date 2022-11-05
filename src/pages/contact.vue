<template>
  <div class="mt-16">
    <ContactForm></ContactForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContactForm from '~/components/contact/ContactForm'

@Component({
  components: { ContactForm },
})
export default class Contact extends Vue {}
</script>
