export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"src/assets/scripts": "assets/scripts",
		"src/assets/img": "assets/img",
		"src/assets/styles/variables.css": "assets/styles/variables.css",
		"src/assets/img/favicon": "/"
	});
	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getFilteredByTag("posts").filter(post => {
			return post.data.permalink !== false;
		});
	});
	const pathPrefix = "/";
	return {
		pathPrefix: pathPrefix,
		dir: {
			input: "src",
			output: "_site"
		}
	};
}
