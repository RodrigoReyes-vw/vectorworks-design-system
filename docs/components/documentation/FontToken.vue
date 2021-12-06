<script>
export default {
  name: "FontToken",
  props: {
    tokenName: {
      type: String,
      required: true,
    },
    tokenValue: {
      type: String,
      required: false,
    },
    tokenType: {
      type: String,
      default: "size",
    },
  },
  computed: {
    tokenVarName() {
      return `var(--vwui-${this.tokenName})`;
    },

    tokenStyle() {
      let payload = {};
      if (this.tokenType === "size") {
        payload = { "font-size": this.tokenVarName };
      } else if (this.tokenType === "weight") {
        payload = { "font-weight": this.tokenVarName };
      } else if (this.tokenType === "width") {
        payload = { "font-stretch": this.tokenVarName };
      } else if (this.tokenType === "charSpace") {
        payload = { "letter-spacing": this.tokenVarName };
      } else if (this.tokenType === "lineHeight") {
        payload = { "line-height": this.tokenVarName };
      }
      return payload;
    },
  },
};
</script>

<template>
  <tr>
    <td ref="swatch" width="600" :style="tokenStyle">
      {{ `vwui-${tokenName}` }}
    </td>
    <td width="200" class="value">{{ tokenValue }}</td>
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
