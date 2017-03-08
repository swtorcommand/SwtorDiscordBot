exports.run = (client, message, args) => {
    let config = String(args[0]).toLowerCase().split("d");

    if (config.length == 0) {
        message.channel.sendMessage("Correct Usage: !dice [d6|d20|3d6] (or any configuration)").catch(console.error);
    } else if (config[0] == '') { // Example: d3
        if (config[1] <= 999 && config[1] > 0) {
            let dice = rollDie(config[1]);
            message.channel.sendMessage(`${message.author} - ${args[0]} | roll: ${dice}`).catch(console.error);
        } else {
            message.channel.sendMessage("Your configuration is out of bounds.").catch(console.error);
        }
    } else if (config.length == 2) { // Example: 3d6
        if (config[0] <= 999 && config[1] <= 999 && config[0] > 0 && config[1] > 0) {
            let dice = rollDice(config[0], config[1]);
            message.channel.sendMessage(`${message.author} - ${args[0]} | roll: ${dice}`).catch(console.error);
        } else {
            message.channel.sendMessage("Your configuration is out of bounds.").catch(console.error);
        }
    } else {
        message.channel.sendMessage("Correct Usage: !dice [d6|d20|3d6] (or any configuration)").catch(console.error);
    }

    function rollDie(sides) {
        sides = sides || 6;
        return Math.floor(Math.random() * sides) + 1;
    }

    function rollDice(count, sides) {
        let t = 0;
        while (count-- > 0) t += rollDie(sides);
        return t;
    }
}