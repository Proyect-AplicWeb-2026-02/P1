<!--
  @summary Main view displaying the catalog of artworks as a grid of cards.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Renders the "Artwork List" section of the home view.
 * @description Fetches artworks on mount via the artwork store and displays
 * them as a row of cards, delegating each card's rendering to artwork-card.
 */
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useArtworkStore } from '@/art-inventory/application/artwork.store.js';
import ArtworkCard from './artwork-card.vue';

const { t } = useI18n();
const { artworks, isLoading, error, fetchArtworks } = useArtworkStore();

onMounted(fetchArtworks);
</script>

<template>
  <section class="artwork-list">
    <h2 class="artwork-list__title">{{ t('artworkList.title') }}</h2>

    <pv-progress-spinner v-if="isLoading" />

    <pv-message v-else-if="error" severity="error">{{ error }}</pv-message>

    <div v-else class="artwork-list__grid">
      <ArtworkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
      />
    </div>
  </section>
</template>

<style scoped>
.artwork-list__title {
  margin-bottom: 1rem;
}

.artwork-list__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>