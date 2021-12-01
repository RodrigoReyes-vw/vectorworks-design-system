<script>
export default {
  name: "OpacityToken",
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
      default: "width",
    },
  },
  computed: {
    tokenVarName() {
      return `var(--vwui-${this.tokenName})`;
    },
    tokenStyle() {
      let payload = {};
      if (this.tokenType === "width") {
        payload = { "border-width": this.tokenVarName };
      } else if (this.tokenType === "color") {
        payload = { "border-color": this.tokenVarName };
      } else if (this.tokenType === "radius") {
        payload = {
          "border-radius": this.tokenVarName,
          "background-color": "black",
          "border-color": "black",
        };
      }

      return payload;
    },
  },
};
</script>

<template>
  <tr>
    <td width="64">
      <div :style="tokenStyle" class="swatch"></div>
    </td>
    <td width="600">{{ `vwui-${tokenName}` }}</td>
    <td width="160" class="value">{{ tokenValue }}</td>
  </tr>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: 80px 1fr 160px;
  grid-template-rows: 65px;
  border-bottom: 3px solid silver;
  padding: 0;
  margin-top: 10px;
}
.swatch {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 48px;
  height: 48px;
  border-color: black;
  border: 1px solid black;
}
td {
  border: none;
  border-bottom: 1px solid silver;
}
</style>
