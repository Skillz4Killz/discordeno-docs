# Channel  
Represents a Server Channel.

## Properties:  
- ### user  
User object of the member.  
> **Type:** *[user](/docs/Member/user)*  

- ### nick  
The nickname of the user in the guild  
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)?*

- ### roles  
The user's role ids  
> **Type:** *[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)>*  

- ### deaf  
Whether this user is deafened by the server  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)*

- ### mute  
Whether this user is locally deafened 
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)*

- ### joinedAt  
When the user joined the guild 
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)*

- ### premiumSince  
When the user used their nitro boost on the server.
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)*

- ### tag  
The full username#discriminator. 
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*

- ### mention  
The user mention with nickname if possible. 
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*

- ### guildID  
The guild id where this member exists. 
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*

## Functions: 
- ### addRole
Add a role to the guild member
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | roleID | [string](/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The ID of the role. |  
> | reason | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) (Optional) | The reason to be displayed in the Guild Audit Log. |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### removeRole
Remove a role from the guild member
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | roleID | [string](/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The ID of the role. |  
> | reason | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) (Optional) | The reason to be displayed in the Guild Audit Log. |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### avatarURL
The users custom avatar or the default avatar
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | size | [ImageURLOptions](/docs/TypeDefs/ImageURLOptions) | The size of the Avatar (any power bof two between 16 and 4096) |  
> | format | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The filetype of the avatar |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### guild
Gets the guild object from cache for this member. This is a method instead of a prop to preserve memory (WIP)
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### kick
Kick a member from the server
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | reason | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) (Optional) | The reason to be displayed in the Guild Audit Log. |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### edit
Edit the member
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | options | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The properties to edit |
> | options.nick | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) (Optional) | Value to set users nickname to. Requires `MANAGE_NICKNAMES` permission |
> | options.roles | *[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)>*   (Optional) | Array of role ids the member is assigned. Requires `MANAGE_ROLES` permission |  
> | options.mute | *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)* (Optional) | Whether the user is muted in voice channels. Requires `MUTE_MEMBERS` permission |  
> | options.deaf | *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)* (Optional) | Whether the user is deafened in voice channels. Requires `DEAFEN_MEMBERS` permission |  
> | options.channel_id | *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)* (Optional) | The id of the channel to move user to if they are connected to voice. To kick the user from their current channel, set to null. Requires `MOVE_MEMBERS` permission. When moving members to channels, must have permissions to both `CONNECT` to the channel and have the `MOVE_MEMBER` permission. |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  

- ### hasPermissions
Checks if the member has this permission. If the member is an owner or has admin perms it will always be true (WIP)
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> **Returns:** *[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)*  
