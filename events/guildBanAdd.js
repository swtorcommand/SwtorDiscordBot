exports.run = (client, guild, user) => {
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);
    if (!bot_logs) return;

    bot_logs.sendMessage("", {
        embed: {
            color: parseInt("FF0066", 16),
            description: `${user} was banned.`,
            author: {
                name: user.username + '#' + user.discriminator,
                icon_url: user.displayAvatarURL
            },
            timestamp: new Date(),
            footer: {
                text: user
            }
        }
    }).catch(console.error);
}

// THIS FEATURE HAS NOT BEEN TESTED.