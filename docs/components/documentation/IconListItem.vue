<script>
import IconBase from "../blueSteel/VwuiIconBase.vue";
import IconLogo from "../blueSteel/icons/IconLogo.vue";
import IconArrowLeftFill from "../blueSteel/icons/IconArrowLeftFill.vue";
import IconArrowLeftBox from "../blueSteel/icons/IconArrowLeftBox.vue";
import IconArrowLeft from "../blueSteel/icons/IconArrowLeft.vue";
export default {
  components: {
    IconBase,
    IconLogo,
    IconArrowLeftFill,
    IconArrowLeftBox,
    IconArrowLeft,
  },
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconFileName: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <tr>
    <td width="200">
      <IconBase> <component :is="iconName"></component></IconBase>
    </td>
    <td width="600" class="value">{{ iconFileName }}</td>
  </tr>
</template>

<style lang="scss" scoped></style>
