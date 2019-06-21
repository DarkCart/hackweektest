const Discord = require("discord.js");
const client = new Discord.Client();

var mtm = require("./mtm.js");
var monay = require("./monay.js");
var pepper = require("./sgt.js");

const token = require("./token.json");

client.on("ready", () => {
	console.log("test bot is on");
});

client.on("message", message => {
	if (message.author.bot) {
		return;
	}

	console.log(message.author.username);

	if (message.channel.name.includes("test")) {
	if (message.author.username === "Sgt. Pepper") {
		pepper.run(message);
	}

	if (message.author.username === "MisterTalkingMachine") {
		mtm.run(message);
	}

	if (message.author.username === "sintendo") {
		monay.run(message);
	}
	}
});

client.login(token.botToken);
