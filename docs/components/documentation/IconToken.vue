<script>
export default {
  name: "IconSizeToken",
  props: {
    tokenName: {
      type: String,
      required: false,
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
    <td>
      <svg
        :style="{ widht: tokenVarName, height: tokenVarName }"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
      >
        <path
          d="M25 2.3C12.5 2.3 2.3 12.5 2.3 25S12.5 47.7 25 47.7 47.7 37.5 47.7 25 37.5 2.3 25 2.3zm0 43C13.8 45.3 4.7 36.2 4.7 25S13.8 4.7 25 4.7 45.3 13.8 45.3 25 36.2 45.3 25 45.3zm-6.1-28.8h-4.3c-.3 0-.3.1-.3.4L22.7 37c.1.1.3.4.6.4H27c.3 0 .3-.1.3-.4L19 16.6c.2 0 0-.1-.1-.1zm16.5 0h-4.3c-.1 0-.3.1-.3.1l-3.3 8.1c-.1.1-.1.6 0 .7l2 4.8c.1.3.4.3.6 0l5.5-13.3c0-.3 0-.4-.2-.4z"
        />
      </svg>
    </td>
    <td width="600">{{ `vwui-${tokenName}` }}</td>
    <td width="200" class="value">{{ tokenValue }}</td>
  </tr>
</template>

<style lang="scss" scoped>
svg {
  fill: currentColor;
}
</style>
