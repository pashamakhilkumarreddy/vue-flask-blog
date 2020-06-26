<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-weight-bold">
      <p>
        &copy; Vue Flask Blog
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  width: 100vw;
  bottom: 0;
  border-top: 1px solid #ddd;
  padding: 1.5rem;
}
</style>
