<template>
    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Vue Flask Blog</h1>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-family: 'RobotoBlackItalic';
}

.hero {
  height: 100vh;
}
</style>
