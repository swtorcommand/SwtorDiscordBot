exports.run = (client, event) => {
	console.log(" disconnected with reason: " + event.code);
    process.exit(1);
}