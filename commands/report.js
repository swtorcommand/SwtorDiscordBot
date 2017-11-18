exports.run = (client, message, args) => {
    
    if (message.guild !== null) {
        message.author.sendMessage("Reports must be made confidentially. Please use the !report command here, in private.");
        message.delete(1000);
        return ;
    }

    let reason = String(message.cleanContent).replace("!report", "").replace(/\@\S+/ig, "").toLowerCase().trim();
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);

    bot_logs.sendMessage(``, {
            embed: {
                color: parseInt("FF0066", 16),
                description: `${message.author} has filed a report`,
                fields: [{
                    name: 'Report Content',
                    value: reason
                }],
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