# Guild  
Represents a guild

| Properties <img width=1000/> | Functions <img width=1000/> |   
| :--- | :--- |   
| [id](#id) | [.categoryChildrenIDs(id)](#categoryChildrenIDs) |   
| [name](#name) | [.iconURL(size, format)](#iconURL) |   
| [icon](#icon) | [.splashURL(size, format)](#splashURL) |   
| [splash](#splash) | [.bannerURL(size, format)](#bannerURL) |  
| [ownerID](#ownerID) | [.createChannel(name, options)](#createChannel) | 
| [region](#region) |  [.getChannels()](#getChannels) | 
| [afkChannelID](#afkChannelID) |  [.swapChannels()](#channelPositions) | 
| [afkTimeout](#afkTimeout) |  [.getMember(id)](#getMember) | 
| [embedEnabled](#embedEnabled) | [.editEmoji(id, options)](#editEmoji) | 
| [embedChannelID](#embedChannelID) |
| [verificationLevel](#verificationLevel) |  |   
| [roles](#roles) |  |   
| [emojis](#emojis) |  |   
| [features](#features) |  |   
| [mfaLevel](#mfaLevel) |  |   
| [systemChannelID](#systemChannelID) |  |   
| [large](#large) |  |   
| [unavailable](#unavailable) |  |   
| [memberCount](#memberCount) |  |   
| [voiceStates](#voiceStates) |  |   
| [members](#members) |  |   
| [channels](#channels) |  |   
| [presences](#presences) |  |   
| [maxPresences](#maxPresences) |  |   
| [maxMembers](#maxMembers) |  |   
| [vanityURLCode](#vanityURLCode) |  |   
| [description](#description) |  |   
| [banner](#banner) |  |   
| [premiumTier](#premiumTier) |  |   
| [premiumSubscriptionCount](#premiumSubscriptionCount) |  |   
| [preferredLocale](#preferredLocale) |  |   
| [joinedAt](#joinedAt) |  |   

---  
## Properties:  
- ### id  
The guild id.  
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### name  
The guild name 2-100 characters
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### icon  
The guild icon image hash
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### splash  
The guild splash image hash
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### ownerID  
The id of the server owner
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### region  
The voice region id for the guild
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### afkChannelID  
The afk channel id for this guild
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### afkTimeout  
 The amount of time before a user is moved to AFK
 > **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### embedEnabled  
Whether or not the embed is enabled in this server.
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### embedChannelID  
The channel id for the guild embed in this server
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### verificationLevel  
The verification level for this server
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### roles  
The roles in the guild (WIP?)
> **Type:** *[idk yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### emojis  
The custom guild emojis
> **Type:** *[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)>*  

- ### features  
Enabled guild features
> **Type:** *[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)>*  

- ### mfaLevel  
The MFA level for this server
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### systemChannelID  
The id of the channel to which system mesages are sent
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### large  
Whether this is considered a large guild
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### unavailable  
Whether the guild is unavailable or not
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### memberCount  
Total number of members in this guild
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### voiceStates  
Collection of voice states in the guild (WIP)
> **Type:** *[idk yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### members  
Users in the guild (WIP)
> **Type:** *[idk yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### channels  
Channels in the guild (WIP)
> **Type:** *[idk yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### presences  
Presence object. If passing true, presences of the members will be here  
> **Type:** *[presence](/docs/Guild/presence)*  

- ### maxPresences  
The max presences for this server
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### maxMembers  
The maximum members in this server
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### vanityURLCode  
The vanity URL code for this server
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### description  
 The description for the guild 
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### banner  
The banner hash
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### premiumTier  
The premium tier for this server.
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### premiumSubscriptionCount  
The total number of users currently boosting this server
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### preferredLocale  
The preferred local of this guild only set if guild has the DISCOVERABLE feature, defaults to `en-US`
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### joinedAt  
Timestamp of when the bot account joined the guild
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

## Functions: 
- ### categoryChildrenIDs
Gets an array of all the channels ids that are the children of this category (WIP)
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### iconURL
The full URL of the icon from Discords CDN. Undefined when no icon is set.
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | size | [ImageURLOptions](/docs/TypeDefs/ImageURLOptions) | The size of the icon (any power bof two between 16 and 4096) |  
> | format | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The filetype of the icon |  > **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### splashURL
The full URL of the splash from Discords CDN. Undefined if no splash is set.
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | size | [ImageURLOptions](/docs/TypeDefs/ImageURLOptions) | The size of the splash (any power bof two between 16 and 4096) |  
> | format | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The filetype of the splash |  > **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### bannerURL
The full URL of the banner from Discords CDN. Undefined if no banner is set
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | size | [ImageURLOptions](/docs/TypeDefs/ImageURLOptions) | The size of the banner (any power bof two between 16 and 4096) |  
> | format | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The filetype of the banner |  > **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### createChannel
Create a channel in the guild (WIP)

> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  

> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### getChannels
Returns a list of guild channel objects. (WIP)

⚠️ **If you need this, you are probably doing something wrong. This is not intended for use. Your channels will be cached in your guild.**
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  

> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### swapChannels
Modify the positions of channels on the guild. Requires `MANAGE_CHANNELS` permisison
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | size | [ImageURLOptions](/docs/TypeDefs/ImageURLOptions) | The size of the banner (any power bof two between 16 and 4096) |  
> | format | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The filetype of the banner |  > **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

> **Returns:** *[PositionSwap](/docs/Guild/PositionSwap)*  

- ### getMember
Returns a guild member object for the specified user. (WIP)

⚠️ **If you need this, you are probably doing something wrong. This is not intended for use. Your members will be cached in your guild.**
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  

> **Returns:** *[PositionSwap](/docs/Guild/PositionSwap)*  

- ### editEmoji
Returns a guild member object for the specified user. (WIP)

⚠️ **If you need this, you are probably doing something wrong. This is not intended for use. Your members will be cached in your guild.**
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  

> **Returns:** *[PositionSwap](/docs/Guild/PositionSwap)*  




