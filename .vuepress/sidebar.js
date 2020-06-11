const sidebar = {
	"/docs/": [
		"introduction",
		"gettingstarted",
		"faq",
		{
			title: "Examples",
			children: [
				"/docs/Examples/Avatar",
				"/docs/Examples/MessageEmbed",
				"/docs/Examples/Ping"
			],
		},
		{
			title: "Documentation",
			children: [
				"/docs/Documentation/",
				"/docs/Documentation/Functions",
				"/docs/Documentation/Variables",
				"/docs/Documentation/Enums",
				"/docs/Documentation/Interfaces",
				"/docs/Documentation/TypeAliases"
			],
		},
		{
			title: "Topics (WIP)",
		},
		{
			title: "Miscallaneous (WIP)",
		},
	]
}
module.exports = sidebar;