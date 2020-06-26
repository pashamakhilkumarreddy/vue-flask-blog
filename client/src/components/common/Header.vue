<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" decoding="async"
            loading="lazy" importance="high" />
        </router-link>

        <span role="button" :class="['navbar-burger', 'burger', { 'is-active': showMobileNavbar }]"
          aria-label="menu" aria-expanded="false" data-target="main-navbar"
          @click="showMobileNavbar = !showMobileNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="main-navbar" :class="['navbar-menu', { 'is-active': showMobileNavbar }]">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Login
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      showMobileNavbar: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.5);
}
a:hover {
  text-decoration: none;
}
</style>
