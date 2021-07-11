const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");

  /* --- PLUGINS --- */

  // navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
