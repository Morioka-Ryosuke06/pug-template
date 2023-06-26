const path = require("path");

module.exports = {
  // ...他のWebpackの設定...

  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "pages"),
    },
    extensions: [".js"],
  },

  resolve: {
    alias: {
      gsap: "gsap",
    },
  },
};
const path = require("path");
