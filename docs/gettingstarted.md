# Getting Started
---

Discordeno aims for a simple, easy and stress-free interaction with the Discord API. Always supporting the latest verion to ensure stability, consistency and the prevention of backwards compatibility.

Prefer reading over using this documentation website? Discordeno has built in Documentation in your VSCode Workspace as you code! The entire libraries documentation is automatically available to you through IntelliSense.

## Requirements

- **Deno 1.0** or higher

## Creating your First Discord Bot Application

Plenty of guides are available on how to create a Discord Bot Application.

1. [Creating an Application](https://discord.com/developers/applications) on the Developer Portal, name something cool and pick a sweet icon!
2. After creating an application. Save the **Client ID.** Thats the unique identifier for a Discord Bot.
3. Now, go and create a bot by clicking the **Bot** tab. You will see a **Token** section and thats the Discord Bot's token. **Make sure you don't share that token with anyone!!!**
4. Invite the bot to the server, you can use the **[Discord Permissions Calculator](https://discordapi.com/permissions.html#0)** for creating the invite link with custom permissions. By default, `0` means no permissions and `8` means Administrator.

Now you've created an Application but it will need some code in order for it to be online. Thats when Discordeno comes in handy!

> Make sure you store your tokens in a .env file and GIT Ignore it. **Don't share your bot token with anybody.**

## Installation

You can install Discordeno by importing:
```typescript
import Client from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/module/client.ts";
```
> You can always

## Example usage

Starting with Discordeno is very simple, you can start from scratch without any boilerplates/frameworks: Add this snippet of code into a new TypeScript file:

```typescript
import Client from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/module/client.ts";
import { Intents } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/types/options.ts";

const BotOptions = {
    token: "token",
    botID: "client ID",
    intents: [Intents.GUILD_MESSAGES],
    eventHandlers: {
        ready: () => {
            console.log(`Logged!`);
        },
        messageCreate: (message) => {
            if(message.content === "!ping"){
                message.channel.sendMessage("Pong!");
            }
        }
    }
};

Client(BotOptions);
```

Alterntively, you can use boilerplate template repositories that were created by wonderful developers. This will get the base of your bot pre-built for you. Overtime, developers create other command frameworks for this library and they will be listed here:

| Bot Name           | Developer          | Links | Description |
|--------------------|--------------------|---------------------------------------------------------|-----|
| Official Boilerplate | Skillz4Killz#4500 | [Github](https://github.com/Skillz4Killz/Discordeno-bot-template), [Support Server](https://discord.gg/J4NqJ72) | This is a very minimalistic design for a boilerplate for your bot to get you started. |
| DenoBot            | NTM Nathan#0001    | [Github](https://github.com/ntm-development/DenoBot), [Support Server](https://discord.com/invite/G2rb53z) | Another boilerplate example of the first one, with more commands and improvements. |

Open Sourced Bots:
| Bot Name           | Developer          | Links |
|--------------------|--------------------|---------------------------------------------------------|
| discordeno-mattis  | Mattis6666         | [Github](https://github.com/Mattis6666/discordeno-mattis/) |

## Notes

- We are always supporting the latest and greatest versions of JavaScript and TypeScript. There is no such thing as Backwards Compatibility. You can update Discordeno with the following command: `deno cache --reload mod.ts`,
- This library does not support **Self Bots.** This is against the Discord Community Guidelines and can get you banned from using Discord if found creating and using one.


## Tutorials
Below you will find youtube playlists that display channels using Erela.js for their tutorials.

Web-Mystery Tutorials:
- <a href="https://web-mystery.com/articles/making-discord-bot-deno-and-discordeno" target="_blank">Making a Discord bot with Deno and Discordeno</a>  
- <a href="https://web-mystery.com/articles/running-discord-bot-written-deno-docker" target="_blank">Running a Discord bot written in Deno in Docker</a>  

YouTube Tutorials:
- Coming soon to [NTM Development](https://www.youtube.com/channel/UCkOFck-WCQtolha4NJuK7zA/)

---  

## Development Team

**Skills4Killz** (Creator and Developer)

- GitHub: [@Skillz4Killz](https://github.com/skillz4killz)

## Contributors

**NTM Nathan** (Documentation Developer)

- Website: https://dev.ntmnathan.com/
- GitHub: [@NTMNathan](https://github.com/NTMNathan)

**EternallLight**

- Website: https://web-mystery.com/
- GitHub: [@EternallLight](https://github.com/EternallLight)

**Androz2091**

- GitHub: [@Androz2091](https://github.com/Androz2091)

---
If you would like to join everyone else on the contribution list, feel free to join the [Support Server](https://discord.gg/J4NqJ72) for **Discordeno!**

