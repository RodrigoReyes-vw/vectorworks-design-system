<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "fenrir cucu",
      tokenList: {},
    };
  },
  created() {
    axios
      .get("http://localhost:5500/color.json")
      .then((response) => {
        this.tokenList = response.data;
      })
      .catch((error) => {
        this.tokenList = error;
      });
  },
  computed: {
    colorList() {
      const list = this.tokenList[Object.keys(this.tokenList)[0]];
      return list;
    },
  },
};
</script>

<template>
  <h2 v-for="item in colorList">{{ Object.keys(colorList) }},{{ item }}</h2>
</template>

<style lang="scss" scoped></style>
