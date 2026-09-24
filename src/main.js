/**
 * @summary Application entry point.
 * @author <tu nombre> - <tu código de estudiante>
 */
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import { createI18n } from 'vue-i18n';

import Toolbar from 'primevue/toolbar';
import SelectButton from 'primevue/selectbutton';
import Card from 'primevue/card';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';

import App from './App.vue';
import en from './locales/en.json';
import es from './locales/es.json';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/main.css';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, es }
});

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Material
    }
});
app.use(i18n);

app.component('pv-toolbar', Toolbar);
app.component('pv-select-button', SelectButton);
app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-progress-spinner', ProgressSpinner);
app.component('pv-message', Message);

app.mount('#app');