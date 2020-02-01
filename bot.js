const Discord = require("discord.js");
const client = new Discord.client();

client.on("message", msg =>{
    var message = msg.content
    if(message.substring(0,1) === "<<"){
        msg.channel.send("Test");
    }
})