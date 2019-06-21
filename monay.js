module.exports = {
run: function(message) {
	if (message.content == "joker") {
		message.react("🃏");
	}
	
	if (message.content == "ping") {
		message.channel.send("pong");
	}
}
}
