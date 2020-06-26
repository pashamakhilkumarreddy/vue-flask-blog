<template>
  <div class="columns is-centered is-vcentered is-mobile mt-6">
    <div class="column is-10-mobile is-two-thirds-tablet is-half-desktop
    is-half-widescreen is-half-fullhd">
      <slot name="form-content">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormLayout',
};
</script>
<style lang="scss" scoped>
.form {
  padding: 2.5rem 3rem 3.5rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  border-radius: 5px;
}

h1 {
  font-family: 'RobotoBold';
}

.aside-content {
  font-family: 'RobotoItalic';
  font-size: 1.1rem;
  padding-right: 0.8rem;
}
</style>
