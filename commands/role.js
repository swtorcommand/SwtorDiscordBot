exports.run = (client, message, args) => {
	// Let's make sure we're in #member-req
    let req = client.channels.find('name', client.config.channels.member_req);
    if (req.id !== message.channel.id) return;

    // we have spaces so let's just remove !role from the message
    let server = String(message.content).replace("!role", "").toLowerCase().trim();

    // Let's make sure this is an approved role, we don't want them adding themselves as an admin!
    if (client.config.roles.indexOf(server) > -1) {
        let role = client.getRoleByName(message.guild.id, server);
        if (role) {
            if (message.member.roles.has(role.id)) {
                message.member.removeRole(role);
                message.channel.sendMessage(`${message.author}, you were removed from the requested role.`)
                    .then(function(msg) {
                        msg.delete(5000);
                    })
                    .catch(console.error);
            }
            else {
                message.member.addRole(role);
                message.channel.sendMessage(`${message.author}, you were added to the requested role.`)
                    .then(function(msg) {
                        msg.delete(5000);
                    })
                    .catch(console.error);
            }
        } else {
            message.channel.sendMessage("Sorry, that's not a valid server. Please use the exact full name.")
                .then(function(msg) {
                    msg.delete(15000);
                })
                .catch(console.error);
        }
    } else {
        message.channel.sendMessage("Sorry, that's not a valid server. Please use the exact full name.")
            .then(function(msg) {
                msg.delete(15000);
            })
            .catch(console.error);
    }

    // Finally, let's keep things neat and remove their message.
    message.delete();
}