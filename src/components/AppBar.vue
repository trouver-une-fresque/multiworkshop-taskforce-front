<template>
  <v-toolbar class="d-flex justify-center align-center">
    <div class="toolbar-content d-flex flex-row align-center">
      <!-- main logo -->
      <router-link
        class="h-100"
        to="/"
      >
        <v-img
          alt="TUF logo"
          :src="currentLogo"
          width="200"
        />
      </router-link>
      <v-spacer />

      <!-- navigation links (for md devices and bigger) -->
      <v-tabs
        class="d-none d-md-flex"
        v-model="activeTab"
        color="primary"
        hide-slider
      >
        <v-tab
          v-for="link in links"
          :key="link.id"
          :append-icon="link.icon"
          exact
          :ripple="false"
          :href="link.to"
          variant="text"
        >
          {{ link.text }}
        </v-tab>
        <button @click="toggleLanguage" color="primary" class="ml-4">
          {{ currentLanguage === 'en' ? 'Switch to French' : 'Switch to English' }}
        </button>
      </v-tabs>

      <!-- navigation links (for small devices) -->
      <v-menu v-model="menu">
        <template #activator="{ props }">
          <v-btn
            class="d-flex d-md-none"
            v-bind="props"
            icon
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            :href="link.to"
            @click="menu = false"
            :append-icon="link.icon"
            color="primary"
            :title="link.text"
          >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useTheme } from 'vuetify'
  import { useI18n } from 'vue-i18n'

  const { t, locale } = useI18n()
  const currentLanguage = ref(locale.value);

  const activeTab = ref(0)
  // const route = useRoute()
  const menu = ref(false)

  const links = computed(() => [
    {
      id: 1,
      to: 'https://www.linkedin.com/company/trouver-une-fresque',
      text: t('navigation.news'),
      icon: 'mdi-newspaper',
    },
    { id: 2, to: '/carte', text: t('navigation.map'), icon: 'mdi-map' },
    {
      id: 3,
      to: '/apropos',
      text: t('navigation.about'),
      icon: 'mdi-information',
    },
  ]);

  const theme = useTheme()

  const currentLogo = computed(() => {
    return theme.global.current.value.dark
      ? '/assets/images/svg/tuf-logo-landscape-fr.webp'
      : '/assets/images/svg/tuf-logo-landscape-fr.webp'
  })

  const toggleLanguage = () => {
    const newLocale = currentLanguage.value === 'en' ? 'fr' : 'en';
    locale.value = newLocale;
    currentLanguage.value = newLocale;
  };
</script>

<style scoped lang="sass">
  .toolbar-content
    max-width: 1200px
    width: 100%
    height: 80%
    margin: 0 auto
</style>
