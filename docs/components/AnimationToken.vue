<script>
import PlayIcon from "./PlayIcon.vue";
import PauseIcon from "./PauseIcon.vue";

export default {
  name: "AnimationToken",
  components: {
    PlayIcon,
    PauseIcon,
  },
  data() {
    return {
      label: "Play",
      isPlaying: false,
    };
  },
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
      default: "easing",
    },
  },
  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      console.log("taco");
    },
  },
  computed: {
    tokenVarName() {
      return `var(--vwui-${this.tokenName})`;
    },
    tokenStyle() {
      let payload = {};
      let playStatus = {};
      if (this.tokenType === "easing") {
        payload = {
          "animation-timing-function": this.tokenVarName,
          "animation-duration": "1s",
        };
      }
      if (this.isPlaying == false) {
        playStatus = {
          "animation-play-state": "paused",
        };
      } else {
        playStatus = {
          "animation-play-state": "running",
        };
      }
      return { ...payload, ...playStatus };
    },
  },
};
</script>

<template>
  <tr>
    <td width="64">
      <PlayIcon v-if="!isPlaying" @click="togglePlay" />
      <PauseIcon v-else @click="togglePlay" />
    </td>
    <td width="250" class="swatch">
      <div :style="tokenStyle" class="animation_example"></div>
    </td>
    <td width="250">{{ `vwui-${tokenName}` }}</td>
    <td width="334" class="value">{{ tokenValue }}</td>
  </tr>
</template>

<style lang="scss" scoped>
.animation_example {
  width: 25px;
  height: 25px;
  background-color: var(--vwui-color-magenta);
  animation-name: demo;
  animation-play-state: paused;
  animation-iteration-count: infinite;
}
.swatch {
  background-color: var(--vwui-color-yellow);
}
td {
  border: none;
  border-bottom: 1px solid silver;
}
@keyframes demo {
  90%,
  to {
    opacity: 0.5;
    transform: translate(600%);
  }
  0% {
    opacity: 1;
  }
}
</style>
