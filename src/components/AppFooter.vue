<template>
  <v-footer app>
    <v-container max-width="1200px">
      <v-col>
        <v-row>
          <p>
            Trouver une Fresque n'est pas un outil officiel, n'est PAS exhaustif
            et ne remplace pas une recherche manuelle notamment dans le cas où
            aucun atelier disponible n'est proposé sur notre site.
          </p>
        </v-row>
        <v-row>
          <v-divider class="my-2"></v-divider>
        </v-row>
        <v-row class="d-flex justify-space-between align-center">
          <v-col
            class="pa-0 pl-3"
            cols="12"
            sm="auto"
          >
            <a
              href="https://github.com/trouver-une-fresque/multiworkshop-taskforce-front/blob/main/LICENSE"
              style="text-decoration: none; color: inherit"
              >Trouver&nbsp;une&nbsp;Fresque - AGPL-3.0</a
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            class="pa-0"
            cols="12"
            sm="auto"
          >
            <v-btn
              class="mr-2 pl-3"
              elevation="0"
              to="/mentions-legales"
              variant="text"
            >
              Mentions légales
            </v-btn>
            <v-btn
              class="mr-2"
              elevation="0"
              href="mailto:contact@trouverunefresque.org"
              variant="text"
            >
              Contact
            </v-btn>
            <v-btn
              elevation="0"
              icon
              @click="toggleTheme"
            >
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>

<style scoped lang="sass"></style>
