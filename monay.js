module.exports = {
run: function(message) {
	if (message.content == "hearts") {
		message.react("♥️");
	}
	
	if (message.conent == "ping") {
		message.channel.send("pong");
	}
}
}
