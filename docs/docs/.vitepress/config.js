const componentsSidebar = [
  { text: "Components", link: "/components/" },
  { text: "Button", link: "/components/button" },
  { text: "Icons", link: "/components/icons" },
  { text: "Card", link: "/components/card" },
];
const homeSideBar = [
  { text: "Design Tokens", link: "/tokens/" },
  { text: "Components", link: "/components/" },
];
const tokensSideBar = [
  { text: "Design Tokens", link: "/tokens/" },
  { text: "Tokens List", link: "/tokens/tokens" },
];

module.exports = {
  host: "localhost",
  title: "Blue Steel design system",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Tokens", link: "/tokens/" },
      { text: "Components", link: "/components/" },
    ],
    sidebar: {
      "/tokens/": tokensSideBar,
      "/components/": componentsSidebar,
      "/": homeSideBar,
    },
  },
};
