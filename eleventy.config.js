const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Ignore certain files
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("styles/**/*");

  // Copy static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("wrangler.jsonc");

  // Date filter for readable dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  // Machine-readable date for RSS
  eleventyConfig.addFilter("rssDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toRFC2822();
  });

  // Collect all unique tags from posts (excluding the "post" tag itself)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    const posts = collectionApi.getFilteredByTag("post");
    for (const post of posts) {
      if (post.data.tags) {
        for (const tag of post.data.tags) {
          if (tag !== "post") {
            tagSet.add(tag);
          }
        }
      }
    }
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    // Process .html and .md files as templates
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    passthroughFileCopy: true
  };
};
