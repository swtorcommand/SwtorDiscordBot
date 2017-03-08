exports.run = (client, oldMessage, newMessage) => {
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);
    if (!bot_logs) return;

    // Let's make sure the content has been changed. Not sure what else, but safety first kids.
    if (oldMessage.cleanContent !== newMessage.cleanContent) {
    	// Let's notify #bot-logs
        bot_logs.sendMessage("", {
            embed: {
                color: parseInt("A7DBD8", 16),
                description: `${newMessage.author} edited a message in ${newMessage.channel}`,
                author: {
                    name: newMessage.author.username + '#' + newMessage.author.discriminator,
                    icon_url: newMessage.author.displayAvatarURL
                },
                fields: [{
                    name: 'Original Message',
                    value: oldMessage.content
                }, {
                    name: 'Updated Message',
                    value: newMessage.content
                }],
                timestamp: new Date(),
                footer: {
                    text: newMessage.author.id
                }
            }
        }).catch(console.error);
    }
}