<!--
  @summary General footer displayed at the bottom of every page of the application.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Application-wide footer.
 * @description Displays two lines: the copyright notice for Harvard Art Museums,
 * and the developer credit line (student code and full name).
 */
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const currentYear = new Date().getFullYear();

// TODO: replace with your actual student code and name
const studentCode = 'pc<nrc>u<código>';
const studentName = '<Tu Nombre Apellido>';
</script>

<template>
  <div class="app-footer">
    <p class="app-footer__line">
      {{ t('footer.copyright', { year: currentYear }) }}
    </p>
    <p class="app-footer__line">
      {{ t('footer.developedBy') }} {{ studentCode }} - {{ studentName }}
    </p>
  </div>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
}

.app-footer__line {
  margin: 0.25rem 0;
}
</style>