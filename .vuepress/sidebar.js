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
			title: "Channel",
			children: [
				"/docs/Channel/",
			],
		},
		{
			title: "Guild",
			children: [
				"/docs/Guild/",
				"/docs/Guild/positionswap",
				"/docs/Guild/presence"
			],
		},
		{
			title: "Member",
			children: [
				"/docs/Member/",
				"/docs/Member/user"
			],
		},
		{
			title: "Role",
			children: [
				"/docs/Role/"
			],
		},
		{
			title: "TypeDefs",
			children: [
				"/docs/TypeDefs/snowflake",
				"/docs/TypeDefs/ImageURLOptions",
			],
		},
	]
}
module.exports = sidebar;