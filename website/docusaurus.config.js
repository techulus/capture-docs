module.exports = {
	title: "Capture",
	tagline: "Screenshot and PDF automation tool",
	url: "https://docs.capture.page",
	baseUrl: "/",
	organizationName: "techulus",
	projectName: "capture",
	scripts: ["https://buttons.github.io/buttons.js"],
	favicon: "img/favicon.ico",
	customFields: {
		users: [],
	},
	onBrokenLinks: "log",
	onBrokenMarkdownLinks: "log",
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					path: "../docs",
					sidebarPath: "../website/sidebars.json",
				},
				blog: {},
				theme: {},
			},
		],
	],
	plugins: [],
	themeConfig: {
		navbar: {
			title: "Capture",
			logo: {
				src: "img/logo.png",
			},
			items: [
				{
					to: "docs/get-started",
					label: "Docs",
					position: "left",
				},
				{
					to: "docs/batch-image",
					label: "API",
					position: "left",
				},
				{
					to: "docs/slack-integration",
					label: "Integrations",
					position: "left",
				},
			],
		},
		image: "https://capture.page/assets/paper_img/promo.png",
		footer: {
			links: [],
			copyright: "Copyright © 2022 Techulus",
		},
	},
};

