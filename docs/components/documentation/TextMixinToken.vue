<script>
export default {
  name: "TextMixinToken",

  props: {
    mixinName: {
      type: String,
    },
    family: {
      type: String,
    },
    size: {
      type: String,
    },
    weight: {
      type: String,
    },
    width: {
      type: String,
    },
    lineHeight: {
      type: String,
    },
    letterSpacing: {
      type: String,
    },
    values: {
      type: Object,
    },
  },
  computed: {
    tokenStyle() {
      const payload = {
        "font-family": `var(--vwui-font-family-${this.family}`,
        "font-size": `var(--vwui-font-size-${this.size}`,
        "font-weight": `var(--vwui-font-weight-${this.weight}`,
        "font-stretch": `var(--vwui-font-width-${this.width}`,
        "line-height": `var(--vwui-font-line-height-${this.lineHeight}`,
        "letter-spacing": `var(--vwui-font-char-space-${this.letterSpacing}`,
      };
      return payload;
    },
  },
};
</script>

<template>
  <table class="token-pallette">
    <tbody>
      <tr>
        <td colspan="3">
          <span :style="tokenStyle">{{ mixinName }}</span>
        </td>
      </tr>
      <tr v-for="(value, name) in values">
        <td></td>
        <td v-if="name == 'lineH'">Line Height</td>
        <td v-else>{{ name == "charSpace" ? "letter Spacing" : name }}</td>
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  table-layout: fixed;
}
tr,
tbody {
  width: 100%;
  display: table;
}
td {
  width: calc(100% / 3);
}
</style>
