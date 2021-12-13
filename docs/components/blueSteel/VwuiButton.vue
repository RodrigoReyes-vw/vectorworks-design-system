<template>
  <a class="vwui-button" :data-variant="variant" :data-on="background">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: "ghost",
    },
    on: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped></style>
