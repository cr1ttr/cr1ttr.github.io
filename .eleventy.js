const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  // this is kinda hacky...? no guarantee the host computer that i create commits on is CST...
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "America/Chicago" }).toFormat("MMMM d, yyyy");
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_includes"
    }
  };
};
