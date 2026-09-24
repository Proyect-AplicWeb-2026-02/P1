<!--
  @summary Root component of the application.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Application root.
 * @description Mounts the shared layout (toolbar + footer) and renders the
 * main artwork list view inside it.
 */
import Layout from '@/shared/presentation/components/layout.vue';
import ArtworkList from '@/art-inventory/presentation/components/artwork-list.vue';
</script>

<template>
  <Layout>
    <ArtworkList />
  </Layout>
</template>

<style scoped>
</style>