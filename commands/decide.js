exports.run = (client, message, args) => {
    if (!args || args.size < 1) return message.channel.reply(`Correct Usage: decide [choices]`);


    let content = String(message.content).replace("!decide", "").toLowerCase().trim();
    let choices = String(content).split(",");

    let choice = String(choices[Math.floor(Math.random * choices.length)]).trim();

    message.channel.sendMessage(`${message.author}, I would recommend ${choice}.`)
        .catch(console.error);
};