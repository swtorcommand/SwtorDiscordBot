// public domain function
Array.prototype.diff = function(a) {
    return this.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};

exports.run = (client, oldMember, newMember) => {
    let bot_logs = client.channels.find('name', client.config.channels.bot_logs);
    if (!bot_logs) return;

 	// Let's check if they changed their nickname
    if (oldMember.nickname != newMember.nickname) {
        return bot_logs.sendMessage("", {
            embed: {
                color: parseInt("BAE4E5", 16),
                description: `${newMember.user} changed nickname from ${oldMember.displayName} to ${newMember.displayName}.`,
                author: {
                    name: newMember.user.username + '#' + newMember.user.discriminator,
                    icon_url: newMember.user.displayAvatarURL
                },
                timestamp: new Date(),
                footer: {
                    text: newMember.user.id
                }
            }
        });
    }

    // Let's check if the new roles count is higher than before, meaning a new role added.
    if (newMember.roles.array().length > oldMember.roles.array().length) {
        let diff = newMember.roles.array().diff(oldMember.roles.array());
        let newRole = diff[0];
        return bot_logs.sendMessage("", {
            embed: {
                color: parseInt("025D8C", 16),
                description: `${newMember.user} was given the ${newRole.toString()} role.`,
                author: {
                    name: newMember.user.username + '#' + newMember.user.discriminator,
                    icon_url: newMember.user.displayAvatarURL
                },
                timestamp: new Date(),
                footer: {
                    text: newMember.user.id
                }
            }
        }).catch(console.error);
    }

    // Let's check if they had more roles before, meaning a role was removed.
    if (oldMember.roles.array().length > newMember.roles.array().length) {
        let diff = oldMember.roles.array().diff(newMember.roles.array());
        let newRole = diff[0];
        return bot_logs.sendMessage("", {
            embed: {
                color: parseInt("420943", 16),
                description: `${newMember.user} was removed from the ${newRole} role.`,
                author: {
                    name: newMember.user.username + '#' + newMember.user.discriminator,
                    icon_url: newMember.user.displayAvatarURL
                },
                timestamp: new Date(),
                footer: {
                    text: newMember.user.id
                }
            }
        }).catch(console.error);
    }
}