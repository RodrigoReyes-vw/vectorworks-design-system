<script>
export default {};
</script>

<template>
  <article>
    <div class="swatch"></div>
    <p>name</p>
    <p>value</p>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: 80px 1fr 160px;
  grid-template-rows: 65px;
  color: var(----vwui-color-teal);
}
</style>
