<!--
  @summary Main layout component that composes the toolbar, the main content area and the footer.
  @author <tu nombre> - <tu código de estudiante>
-->
<script setup>
/**
 * @summary Root layout wrapping every page of the application.
 * @description Renders the toolbar at the top, a slot for the main view content
 * in the middle, and the general footer at the bottom.
 */
import Toolbar from './toolbar.vue';
import FooterContent from './footer-content.vue';
</script>

<template>
  <div class="layout">
    <header>
      <Toolbar />
    </header>

    <main class="layout__content">
      <slot />
    </main>

    <footer>
      <FooterContent />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__content {
  flex: 1;
  padding: 1rem;
}
</style>