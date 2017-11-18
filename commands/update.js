exports.run = (client, message, args) => {
    if (!args || args.size < 1) return message.channel.reply(`Correct Usage: decide [choices]`);


    let content = String(message.content).replace("!update", "").toLowerCase().trim();
    let choices = String(content).split(",");

    let choice = String(choices[Math.floor(Math.random * choices.length)]).trim();

    message.channel.sendMessage(`attention @everyone the bot will be going offline for a bug check it will be back up in 5 mins`)
        .catch(console.error);
};