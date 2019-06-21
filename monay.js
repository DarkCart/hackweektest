module.exports = {
run: function(message) {
	if (message.content == "hearts") {
		message.react("hearts");
	}
}
}
