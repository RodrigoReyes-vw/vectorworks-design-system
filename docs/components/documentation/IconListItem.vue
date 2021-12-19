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
import IconChevronDown from "../blueSteel/icons/IconChevronDown.vue";
import IconChevronLeftBoxFill from "../blueSteel/icons/IconChevronLeftBoxFill.vue";
import IconChevronLeftBox from "../blueSteel/icons/IconChevronLeftBox.vue";
import IconChevronLeft from "../blueSteel/icons/IconChevronLeft.vue";
import IconChevronRightBoxFill from "../blueSteel/icons/IconChevronRightBoxFill.vue";
import IconChevronRightBox from "../blueSteel/icons/IconChevronRightBox.vue";
import IconChevronRightDouble from "../blueSteel/icons/IconChevronRightDouble.vue";
import IconChevronRight from "../blueSteel/icons/IconChevronRight.vue";
import IconClassroom from "../blueSteel/icons/IconClassroom.vue";
import IconCloseCircleFill from "../blueSteel/icons/IconCloseCircleFill.vue";
import IconCloseCircle from "../blueSteel/icons/IconCloseCircle.vue";
import IconClose from "../blueSteel/icons/IconClose.vue";
import IconDocument from "../blueSteel/icons/IconDocument.vue";
import IconFb from "../blueSteel/icons/IconFb.vue";
import IconFullScreen from "../blueSteel/icons/IconFullScreen.vue";
import IconHamburger from "../blueSteel/icons/IconHamburger.vue";
import IconIg from "../blueSteel/icons/IconIg.vue";
import IconImageCredit from "../blueSteel/icons/IconImageCredit.vue";
import IconInfoCircle from "../blueSteel/icons/IconInfoCircle.vue";
import IconLogin from "../blueSteel/icons/IconLogin.vue";
import IconMinusCircle from "../blueSteel/icons/IconMinusCircle.vue";
import IconPano360 from "../blueSteel/icons/IconPano360.vue";
import IconPlayButtonBoxFill from "../blueSteel/icons/IconPlayButtonBoxFill.vue";
import IconPlayButtonBox from "../blueSteel/icons/IconPlayButtonBox.vue";
import IconPlayButton from "../blueSteel/icons/IconPlayButton.vue";
import IconPlusCircleFill from "../blueSteel/icons/IconPlusCircleFill.vue";
import IconPlusCircle from "../blueSteel/icons/IconPlusCircle.vue";
import IconPlus from "../blueSteel/icons/IconPlus.vue";
import IconQuestionCircle from "../blueSteel/icons/IconQuestionCircle.vue";
import IconQuotes from "../blueSteel/icons/IconQuotes.vue";
import IconRemoteAssist from "../blueSteel/icons/IconRemoteAssist.vue";
import IconSearchCircle from "../blueSteel/icons/IconSearchCircle.vue";
import IconSearch from "../blueSteel/icons/IconSearch.vue";
import IconTwitter from "../blueSteel/icons/IconTwitter.vue";
import IconVwV from "../blueSteel/icons/IconVwV.vue";
import IconWebinars from "../blueSteel/icons/IconWebinars.vue";
import IconYouTube from "../blueSteel/icons/IconYouTube.vue";

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
    IconChevronDown,
    IconChevronLeftBoxFill,
    IconChevronLeftBox,
    IconChevronLeft,
    IconChevronRightBoxFill,
    IconChevronRightBox,
    IconChevronRightDouble,
    IconChevronRight,
    IconClassroom,
    IconCloseCircleFill,
    IconCloseCircle,
    IconClose,
    IconDocument,
    IconFb,
    IconFullScreen,
    IconHamburger,
    IconIg,
    IconImageCredit,
    IconInfoCircle,
    IconLogin,
    IconMinusCircle,
    IconPano360,
    IconPlayButtonBoxFill,
    IconPlayButtonBox,
    IconPlayButton,
    IconPlusCircleFill,
    IconPlusCircle,
    IconPlus,
    IconQuestionCircle,
    IconQuotes,
    IconRemoteAssist,
    IconSearchCircle,
    IconSearch,
    IconTwitter,
    IconVwV,
    IconWebinars,
    IconYouTube,
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
