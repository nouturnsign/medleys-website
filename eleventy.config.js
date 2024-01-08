module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html","png","svg","jpg","css","js","pdf"]
    };

});