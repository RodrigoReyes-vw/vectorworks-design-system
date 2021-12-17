const componentsSidebar = [
  { text: "Button", link: "/components/button" },
  { text: "Card", link: "/components/card" },
  { text: "Icons", link: "/components/icons" },
  { text: "Form", link: "/components/form" },
];
const homeSideBar = [
  { text: "Design Tokens", link: "/tokens/" },
  { text: "Components", link: "/components/button" },
  { text: "Foundations", link: "/foundation/" },
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
      { text: "Components", link: "/components/button" },
      { text: "Foundations", link: "/foundation/" },
    ],
    sidebar: {
      "/tokens/": tokensSideBar,
      "/components/": componentsSidebar,
      "/": homeSideBar,
    },
  },
};
