module.exports = {
run: function(message) {
	if (message.content == "joy") {
		message.react("😄");
	}
	
	if (message.content == "ping") {
		message.channel.send("pong");
	}
}
}
