module.exports = {
  base: "/el-global-dialog-docs/",
  title: "el-global-dialog",
  description: "el-global-dialog文档",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "demo-container",
  ],
};
