<template>
  <div id="app">
    <app-header />
      <main class="container">
        <router-view />
      </main>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Vue Flask Blog',
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
<style lang="scss">
</style>
