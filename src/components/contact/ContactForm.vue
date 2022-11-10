<template>
  <div :class="!isMobile ? 'mx-96' : 'mx-10'">
    <v-row dense align-content="center" class="mt-6">
      <v-col class="text-center aldrich-contact-title">
        {{
          forNewsletter
            ? "M'inscrire à la newsletter"
            : 'Prendre contact avec nous'
        }}
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12">
        <v-text-field
          v-model="email"
          background-color="#343434"
          label="Email"
          placeholder="Email"
          name="email"
          outlined
          dense
          :error-messages="missingEmail ? 'Le champ e-mail est manquant' : ''"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="subject"
          background-color="#343434"
          label="Sujet"
          placeholder="Sujet"
          name="subject"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="body"
          background-color="#343434"
          label="Message"
          placeholder="Message"
          name="body"
          outlined
          dense
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-right">
        <v-btn color="primary" @click="mailto()"
          ><v-icon class="mr-1" small>mdi-send</v-icon> Envoyer
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense align-content="center" class="my-12">
      <v-col cols="12" class="text-center aldrich-contact-title--or">
        Ou
      </v-col>
      <v-col cols="12" class="text-center aldrich">
        à l’adresse :
        <a href="mailto:support@streamkits.fr">support@streamkits.fr</a>
      </v-col>
    </v-row>

    <v-row dense align-content="center">
      <v-col class="text-center aldrich">
        <v-row>
          <v-col cols="12" class="text-center">
            Rejoins Le coin de Streamkits<br />
            <a href="https://discord.gg/YrJpVTsZyy">
              <v-img
                class="mx-auto"
                width="225"
                src="/contact/discord.png"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactForm extends Vue {
  subject = ''
  email = ''
  body = ''
  missingEmail = false
  forNewsletter = false

  get isMobile() {
    return (this as any).$vuetify.breakpoint.smAndDown
  }

  mounted() {
    this.forNewsletter = !!this.$route.query.forNewsletter
    if (this.forNewsletter) {
      this.subject = "Demande d'inscription à la newsletter"
      this.body = `Bonjour,

Je souhaiterai m'inscrire à la newsletter de StreamKits.

Bonne journée.`
    }
  }

  mailto() {
    if (!this.email) {
      this.missingEmail = true
      return
    }
    this.missingEmail = false
    if (this.forNewsletter) {
      // NEWSLETTER MODE

      const request = new XMLHttpRequest()
      request.open(
        'POST',
        'https://discord.com/api/webhooks/1039272680827932742/4BbIT3KhBLdB2KKw5qupnlGSFgzrp-Zl8OjsYAlNBy-VLOv4dMXEqnjx3g1A6a5wZXQs'
      )
      request.setRequestHeader('Content-type', 'application/json')
      request.send(
        JSON.stringify({
          username: 'fr.tacxtv/projects/telethon-minecraft',
          avatar_url:
            'http://www.telethon85.fr/index.php/organisateurs/logos?download=75:logo-telethon-bonbon',
          content:
            'Demande de newsletter https://tacxtv.fr/projects/telethon-minecraft',
          embeds: [
            {
              title: 'INSCRIPTION NEWSLETTER',
              color: 15258703,
              thumbnail: {
                url: '',
              },
              fields: [
                {
                  name: 'E-mail',
                  value: this.email,
                  inline: true,
                },
                {
                  name: 'Sujet',
                  value: this.subject,
                  inline: true,
                },
                {
                  name: 'Message',
                  value: this.body,
                  inline: true,
                },
              ],
            },
          ],
        })
      )
      this.redirect()
      return request
    }

    // CLASSIC MODE

    const request = new XMLHttpRequest()
    request.open(
      'POST',
      'https://discord.com/api/webhooks/1039272680827932742/4BbIT3KhBLdB2KKw5qupnlGSFgzrp-Zl8OjsYAlNBy-VLOv4dMXEqnjx3g1A6a5wZXQs'
    )
    request.setRequestHeader('Content-type', 'application/json')
    request.send(
      JSON.stringify({
        username: 'fr.tacxtv/projects/telethon-minecraft',
        avatar_url:
          'http://www.telethon85.fr/index.php/organisateurs/logos?download=75:logo-telethon-bonbon',
        content: `${this.email} ; ${this.subject} ; ${this.body}`,
      })
    )
    this.redirect()
  }

  redirect() {
    (this as any).$toast.message.success('Votre message a bien été envoyé', {
      position: 'top-right',
    })
    this.$router.replace('/')
  }
}
</script>

<style>
.aldrich-contact-title {
  font-size: 1.925rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.aldrich-contact-discord-title {
  font-size: 1.625rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
}

.aldrich-contact-title--or {
  font-size: 1.925rem !important;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Aldrich', sans-serif !important;
  color: #ffd803;
}
</style>
