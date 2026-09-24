<!--
  @summary Card displaying a single artwork's image, title, classification and details.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Displays a single artwork as a PrimeVue card.
 * @description Shows the primary image, title and classification as the header,
 * technique/period/culture as content, and accession number, credit line and a
 * share action in the footer.
 */
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  artwork: { type: Object, required: true }
});

const fallbackImage = 'https://placehold.co/400x300?text=No+Image';

/**
 * @summary Shares the artwork's URL using the native Web Share API,
 * falling back to copying the link to the clipboard if unavailable.
 * @returns {Promise<void>}
 */
async function shareArtwork() {
  const shareData = {
    title: t('artworkCard.shareTitle'),
    text: props.artwork.title,
    url: props.artwork.url
  };

  if (navigator.share) {
    await navigator.share(shareData);
  } else {
    await navigator.clipboard.writeText(props.artwork.url);
    alert(t('artworkCard.shareCopied'));
  }
}
</script>

<template>
  <pv-card class="artwork-card">
    <template #header>
      <img
          :src="artwork.primaryImageUrl || fallbackImage"
          :alt="artwork.title"
          class="artwork-card__image"
      />
    </template>

    <template #title>{{ artwork.title }}</template>
    <template #subtitle>{{ artwork.classification }}</template>

    <template #content>
      <p v-if="artwork.technique"><strong>{{ t('artworkCard.technique') }}:</strong> {{ artwork.technique }}</p>
      <p v-if="artwork.period"><strong>{{ t('artworkCard.period') }}:</strong> {{ artwork.period }}</p>
      <p v-if="artwork.culture"><strong>{{ t('artworkCard.culture') }}:</strong> {{ artwork.culture }}</p>
    </template>

    <template #footer>
      <div class="artwork-card__footer">
        <span class="artwork-card__accession">
          {{ t('artworkCard.assetInformation') }}: {{ artwork.accessionNumber }}
          <span v-if="artwork.creditLine"> — {{ artwork.creditLine }}</span>
        </span>
        <pv-button
            v-if="artwork.url"
            :label="t('artworkCard.share')"
            icon="pi pi-share-alt"
            text
            @click="shareArtwork"
        />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.artwork-card {
  width: 300px;
}

.artwork-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.artwork-card__footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.85rem;
}
</style>