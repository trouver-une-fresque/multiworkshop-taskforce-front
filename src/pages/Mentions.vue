<template>
  <v-container>
    <div>
      <h2 class="text-primary">{{ t('legal_mentions.title') }}</h2>
      <div
        v-for="key in sections"
        :key="key"
      >
        <h3 v-html="t(`legal_mentions.sections.${key}.title`)"></h3>
        <p v-html="t(`legal_mentions.sections.${key}.content`)"></p>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const sections = ['edition', 'personal_data', 'license']
</script>
