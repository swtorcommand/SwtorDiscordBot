exports.run = (client, message, args) => {
    if (!args || args.size < 1) return message.channel.reply(`Correct Usage: 8ball [question]`);

    let responses = [
        'maybe', 'no way', 'absolutely not', 'possibly', 'not in a million years',
        'highly likely', 'never', 'I would rather not say', 'theres a tiny chance',
        'yes', 'probably not', 'probably yes', 'haha, no', 'you have a better chance winning the lottery',
        'no', 'absolutely', 'hell yes', 'hell no', 'I am not really sure', 'I don\'t know', 'you don\'t want to know' 
    ];

    let response = responses[Math.floor(Math.random() * responses.length)];

    message.channel.sendMessage(`${message.author}, ${response}.`)
        .catch(console.error);
};