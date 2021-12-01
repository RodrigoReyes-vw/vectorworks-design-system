<script>
export default {
  name: "SpacingToken",
  props: {
    tokenName: {
      type: String,
      required: true,
    },
    tokenValue: {
      type: String,
      required: false,
    },
  },
  computed: {
    tokenVarName() {
      return `var(--vwui-${this.tokenName})`;
    },
  },
};
</script>

<template>
  <tr>
    <td width="64" class="swatch">
      <div class="line" :style="{ width: tokenVarName }"></div>
    </td>
    <td width="600">{{ `vwui-${tokenName}` }}</td>
    <td width="160" class="value">{{ tokenValue }}</td>
  </tr>
</template>

<style lang="scss" scoped>
.line {
  height: 1px;
  background-color: #a4a7a8;
  color: #a4a7a8;
  position: relative;
  &:before {
    content: "";
    display: block;
    top: -4px;
    background-color: currentColor;
    height: 10px;
    left: 0;
    width: 1px;
    position: absolute;
  }
  &:after {
    content: "";
    display: block;
    top: -4px;
    background-color: currentColor;
    height: 10px;
    left: 100%;
    width: 1px;
    position: absolute;
  }
}
td {
  border: none;
  border-bottom: 1px solid silver;
}
</style>
