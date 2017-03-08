exports.run = (client, member) => {

    // Let's get all of our channels
    let rules = client.channels.find('name', client.config.channels.rules_lounge);
    let welcome = client.channels.find('name', client.config.channels.welcome_lounge);
    let req = client.channels.find('name', client.config.channels.member_req);
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);

    if (!welcome || !rules || !req) return;
    // Send a welcome message to #welcome-lounge
    welcome.sendMessage(`${member.user}`, {
        embed: {
            color: parseInt("F02311", 16),
            fields: [{
                name: 'Welcome to /r/swtor!',
                value: `Please review our rules in ${rules} and see ${req} to get your server rank!`
            }],
            footer: {
                text: '/r/swtor | Developed by @Teddy',
                icon_url: client.user.avatarURL
            }
        }
    }).catch(console.error);

    if (!bot_logs) return;
    // Send a copy to #bot-logs
    bot_logs.sendMessage("", {
        embed: {
            color: parseInt("C3FF68", 16),
            description: `${member.user} has joined.`,
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