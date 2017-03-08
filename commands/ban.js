exports.run = (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return;
    let reason = String(message.cleanContent).replace("!ban", "").replace(/\@\S+/ig, "").toLowerCase().trim();
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);

    let banTarget = message.mentions.users.first();

    if (banTarget) {
        banTarget.ban();

        // We'll do this here so we can at least ensure the .ban() method is called.
        if (!bot_logs) return;

        bot_logs.sendMessage("", {
            embed: {
                color: parseInt("FF0066", 16),
                description: `${message.author} has banned ${banTarget}`,
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