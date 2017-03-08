exports.run = (client, member) => {
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);
    if (!bot_logs) return;

    // Let's notify #bot-logs
    bot_logs.sendMessage("", {
        embed: {
            color: parseInt("F02311", 16),
            description: `${member.user} has left`,
            author: {
                name: member.user.username + '#' + member.user.discriminator,
                icon_url: member.user.displayAvatarURL
            },
            timestamp: new Date(),
            footer: {
                text: member.user.id
            }
        }
    }).catch(console.error);
}