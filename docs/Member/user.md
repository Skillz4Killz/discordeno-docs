# User
Represents a user on Discord.  
| Properties <img width=1000/> | Functions <img width=1000/> |   
| :--- | :--- |   
| [id](#id) | [.avatarURL(size, format)](#avatarURL)
| [username](#username) | [.hasPermissions(permissions)](#hasPermissions)
| [discriminator](#discriminator) | WIP
| [avatar](#avatar) |   
| [bot](#bot) |   
| [system](#system) |   
| [mfaEnabled](#mfaEnabled) |   
| [locale](#locale) |   
| [verified](#verified) |   
| [email](#email) |   
| [flags](#flags) |   
| [premiumType](#premiumType) |   


---  
## Properties:  
- ### id  
The user's id  
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### username  
The user's username, not unique across the platform
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### discriminator  
The user's 4 digit discord tag
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### avatar  
The user's avatar hash
> **Type:** *[string || null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### bot?  
Whether the user is a bot
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### system 
Whether the user is an official discord system user (part of the urgent message system.) 
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### mfa_enabled 
Whether the user has two factor enabled on their account
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### locale  
The user's chosen language option
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  

- ### verified
Whether the email on this account has been verified
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### email
The user's email 
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  

- ### flags
The flags on a user's account.
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  

- ### premiumType
The type of Nitro subscription on a user's account.
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  