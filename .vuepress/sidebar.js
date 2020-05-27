const sidebar = {
	"/docs/": [
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
			title: "Events",
			children: [
				"/docs/Events/botUpdate",
			],
		},
	]
}
module.exports = sidebar;