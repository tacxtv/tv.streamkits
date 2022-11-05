<template>
  <v-app dark>
    <v-main>
      <v-overlay :opacity="1" :value="displayOverlay">
        <v-progress-circular indeterminate size="64"> </v-progress-circular>
      </v-overlay>
      <v-card color="#121212" flat class="mx-auto overflow-hidden">
        <v-app-bar fixed dense color="primary" dark>
          <a href="/"
            ><v-img v-if="!isMobile" width="45" :src="logoSrc"></v-img
          ></a>

          <v-app-bar-nav-icon
            v-if="isMobile"
            @click="drawer = true"
          ></v-app-bar-nav-icon>

          <v-img
            v-if="isMobile"
            width="45"
            class="mobile-logo-app-bar"
            :src="logoSrc"
          ></v-img>

          <v-tabs
            v-if="!isMobile"
            align-with-title
            :value="$route.name"
            class="ml-12"
          >
            <v-tab
              v-for="(item, key) in items"
              :key="key"
              v-bind="item.binds"
              class="white--text mx-3"
              nuxt
            >
              <span class="font-menu-item" v-text="item.title"></span>
            </v-tab>
          </v-tabs>

          <v-spacer></v-spacer>

          <v-btn
            v-if="!isMobile"
            class="mx-2 font-menu-item"
            depressed
            color="secondary"
          >
            <v-icon class="mr-2">mdi-crown</v-icon> Devenir premium
          </v-btn>

          <v-btn v-if="!isMobile" class="mx-2 font-menu-item" depressed text>
            Connexion
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          color="primary"
          height="100vh"
          absolute
          temporary
        >
          <v-img class="mx-auto mb-3" width="150" :src="logoSrc"></v-img>

          <v-list-item
            v-for="(item, key) in items"
            :key="key"
            class="my-1"
            dense
            v-bind="item.binds"
            nuxt
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              class="white--text font-menu-item"
              v-text="item.title"
            ></v-list-item-content>
          </v-list-item>

          <template #append>
            <div class="w-full text-center my-2">
              <v-btn class="font-menu-item" depressed color="secondary">
                <v-icon class="mr-2">mdi-crown</v-icon> Devenir premium
              </v-btn>
            </div>

            <div class="w-full text-center my-2">
              <v-btn class="font-menu-item" depressed text> Connexion </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <Nuxt />
      </v-card>
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Streamkits</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  drawer = false
  displayOverlay = true
  logoSrc = '/logos/logo-white.svg'

  mounted() {
    this.displayOverlay = false
  }

  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown
  }

  get items() {
    return [
      {
        title: 'Accueil',
        icon: 'mdi-home',
        binds: {
          to: '/',
          value: '/',
          exact: true,
        },
      },
      {
        title: 'Présentation',
        icon: 'mdi-account',
        binds: {
          to: '/',
          value: '/',
          exact: true,
        },
      },
      {
        title: 'Nous contacter',
        icon: 'mdi-email',
        binds: {
          to: '/contact',
          value: '/contact',
          exact: true,
        },
      },
    ]
  }
}
</script>

<style>
.mobile-logo-app-bar {
  flex: 0 0 auto;
}

.font-menu-item {
  font-family: 'Aldrich-Regular', sans-serif !important;
  text-decoration: none;
  font-weight: 550;
  font-size: 0.9rem;
}
</style>
