exports.run = (client, message) => {
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);
    if (!bot_logs) return;

    // Let's notify #bot-logs
    bot_logs.sendMessage("", {
        embed: {
            color: parseInt("FFCC00", 16),
            description: `${message.channel} had message by ${message.author} removed:\n${message.content}`,
            author: {
                name: message.author.username + '#' + message.author.discriminator,
                icon_url: message.author.displayAvatarURL
            },
            timestamp: new Date(),
            footer: {
                text: message.author.id
            }
        }
    }).catch(console.error);
}