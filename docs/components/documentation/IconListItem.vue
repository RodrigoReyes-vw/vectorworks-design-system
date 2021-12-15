<script>
import IconBase from "../blueSteel/VwuiIconBase.vue";
import IconLogo from "../blueSteel/icons/IconLogo.vue";
import IconArrowLeftFill from "../blueSteel/icons/IconArrowLeftFill.vue";
import IconArrowLeftBox from "../blueSteel/icons/IconArrowLeftBox.vue";
import IconArrowLeft from "../blueSteel/icons/IconArrowLeft.vue";
import IconArrowRightFill from "../blueSteel/icons/IconArrowRightFill.vue";
import IconArrowRight from "../blueSteel/icons/IconArrowRight.vue";
import IconArrowRightBox from "../blueSteel/icons/IconArrowRightBox.vue";
import IconAward from "../blueSteel/icons/IconAward.vue";
import IconBlog from "../blueSteel/icons/IconBlog.vue";
import IconCheckCircFill from "../blueSteel/icons/IconCheckCircFill.vue";
import IconCheckCirc from "../blueSteel/icons/IconCheckCirc.vue";
import IconCheck from "../blueSteel/icons/IconCheck.vue";

export default {
  components: {
    IconBase,
    IconLogo,
    IconArrowLeftFill,
    IconArrowLeftBox,
    IconArrowLeft,
    IconArrowRightFill,
    IconArrowRight,
    IconArrowRightBox,
    IconAward,
    IconBlog,
    IconCheckCircFill,
    IconCheckCirc,
    IconCheck,
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
  computed: {
    fullURl() {
      const url = `https://download2.nemetschek.net/web/static-assets/blueSteel/icons/${this.iconFileName}.svg`;
      return url;
    },
  },
};
</script>

<template>
  <tr>
    <td width="200">
      <IconBase> <component :is="iconName"></component></IconBase>
    </td>
    <td width="600" class="value">
      <a :href="fullURl" target="_blank">{{ iconFileName }}.svg</a>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
