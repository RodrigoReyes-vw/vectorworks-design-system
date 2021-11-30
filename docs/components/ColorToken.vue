<script>
export default {
  name: "colorToken",
  props: {
    tokenName: {
      type: String,
      required: true,
    },
  },
  computed: {
    tokenVarName() {
      return `var(--vwui-${this.tokenName})`;
    },
    tokenValue() {
      const bodyStyles = window.getComputedStyle(document.body);
      const tokenValue = bodyStyles.getPropertyValue(
        `--vwui-${this.tokenName}`
      );
      return tokenValue;
    },
  },
};
</script>

<template>
  <tr>
    <td
      width="64"
      class="swatch"
      :style="{ backgroundColor: tokenVarName }"
    ></td>
    <td width="600">{{ `vwui-${tokenName}` }}</td>
    <td width="160" class="value">{{ tokenValue }}</td>
  </tr>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: 80px 1fr 160px;
  grid-template-rows: 65px;
  border-bottom: 1px solid silver;
  padding: 0;
  margin-top: 10px;
}
.swatch {
  width: 48px;
  height: 48px;
}
td {
  border: none;
  border-bottom: 1px solid silver;
}
</style>
