exports.run = (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return;
    let reason = String(message.cleanContent).replace("!kick", "").replace(/\@\S+/ig, "").toLowerCase().trim();
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);

    let kickTarget = message.mentions.users.first();

    if (kickTarget) {
        kickTarget.kick();

        // We'll do this here so we can at least ensure the .kick() method is called.
        if (!bot_logs) return;

        bot_logs.sendMessage("", {
            embed: {
                color: parseInt("FF0066", 16),
                description: `${message.author} has kicked ${kickTarget}`,
                fields: [{
                    name: 'Reason',
                    value: reason
                }],
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
}