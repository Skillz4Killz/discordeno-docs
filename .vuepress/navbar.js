const navbar = [
    {
        text: "Home", 
        link: "/" 
    },
    { 
        text: "Documentation",
        link: "/docs/gettingstarted" 
    },
    { 
        text: "Install", 
        items: [
            { 
                text: "Deno", 
                link: "https://deno.land/x/discordeno"
            },
            { 
                text: "GitHub", 
                link: "https://github.com/skillz4killz/discordeno/tree/master/"
            },
        ]
    },
    { 
        text: "Support Server", 
        link: "https://discord.gg/J4NqJ72" 
    }
];

module.exports = navbar;