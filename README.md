# SwtorDiscordBot
The source of the bot used in /r/swtor's Discord (https://discord.gg/swtor).

You will need:
- [Node.js](https://nodejs.org/en/)
- A (novice) programmer (you probably have one if you run a gaming related Discord)
- A Discord Bot Token [see apps](https://discordapp.com/developers/applications/me#top)
- **SOME BASIC UNDERSTANDING OF CODING AND DEPLOYING BOTS.**

### Setting up
1) in /config/config.json replace the bot token and root id (your user id) with your own.  
2) change the "roles" array to be roles users are allowed to obtain via !roles (NOTE: IN LOWERCASE).
3) change "channels" VALUES to match that of your server. Do NOT change the keys unless you change them in code too.  
4) In the root folder run:  
```
npm install
```
5) You can start the bot by using:  
```
node app
```

The code is designed to work with a status monitor, specifically PM2. We strongly recommend it as well to keep the bot always online. This bot uses minimal resources, a 128MB RAM VM will suffice in most cases.
