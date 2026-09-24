<!--
  @summary Language switcher component allowing the user to toggle the UI locale between English and Spanish.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Toggles the application's active locale (EN | ES).
 * @description Uses PrimeVue's SelectButton bound to vue-i18n's global locale ref,
 * so every component using t() reacts automatically when the value changes.
 */
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import SelectButton from 'primevue/selectbutton';

const { locale } = useI18n();

const languages = [
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' }
];

const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (newValue) => {
  if (newValue) locale.value = newValue;
});
</script>

<template>
  <pv-select-button
      v-model="selectedLanguage"
      :options="languages"
      option-label="label"
      option-value="value"
      aria-label="Language selector"
  />
</template>