const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite Remix Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
      message.reply({
        embeds: [
          new MessageEmbed().setColor("RANDOM")
          .setDescription(`Click [this Link](https://discord.com/api/oauth2/authorize?client_id=862989897954623500&permissions=1634503490528&scope=bot%20applications.commands)`)
        ]
      });
    }
}
