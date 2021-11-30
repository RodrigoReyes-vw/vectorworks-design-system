const ourStorySidebar = [{ text: "Our Story", link: "/about/our-story" }];
const homeSideBar = [{ text: "Design Tokens", link: "/tokens/" }];
module.exports = {
  title: "Blue Steel design system",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "tokens", link: "/Tokens/" },
    ],
    sidebar: {
      "/about/": ourStorySidebar,
      "/": homeSideBar,
    },
  },
};
