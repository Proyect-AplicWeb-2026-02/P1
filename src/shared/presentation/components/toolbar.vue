<!--
  @summary Application toolbar with the client's logo, the app title and the language switcher.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Top toolbar of the application.
 * @description Renders the Harvard Art Museums logo (fetched via Logo.dev), the
 * application title on the left/center, and the language switcher on the right.
 */
import { useI18n } from 'vue-i18n';
import Toolbar from 'primevue/toolbar';
import LanguageSwitcher from './language-switcher.vue';

const { t } = useI18n();

const logoUrl = `${import.meta.env.VITE_LOGO_API_URL}/${import.meta.env.VITE_CLIENT_DOMAIN}?token=${import.meta.env.VITE_LOGO_API_KEY}`;
</script>

<template>
  <pv-toolbar class="app-toolbar">
    <template #start>
      <img
          :src="logoUrl"
          :alt="t('toolbar.logoAlt')"
          class="app-toolbar__logo"
      />
      <span class="app-toolbar__title">{{ t('toolbar.title') }}</span>
    </template>

    <template #end>
      <LanguageSwitcher />
    </template>
  </pv-toolbar>
</template>

<style scoped>
.app-toolbar__logo {
  height: 2.5rem;
  width: auto;
  margin-right: 0.75rem;
}

.app-toolbar__title {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>