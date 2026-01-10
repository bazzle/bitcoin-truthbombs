import markdownIt from "markdown-it";
import { format } from "date-fns";

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
	eleventyConfig.setLibrary(
		"md", markdownIt({
			html: true,
			breaks: false,
			linkify: true,
		})
	);
	eleventyConfig.addFilter("prettyDate", (value) =>
		format(new Date(value), "MMMM do, yyyy")
	);
	eleventyConfig.addFilter("numericDate", (value) => {
	if (!value) return "";
	return format(new Date(value), "dd.MM.yyyy");
	});
	const pathPrefix = "/";
	return {
		pathPrefix: pathPrefix,
		dir: {
			input: "src",
			output: "_site"
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
}
