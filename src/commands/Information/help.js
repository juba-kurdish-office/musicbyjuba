const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
		const embed = new MessageEmbed()
        .setTitle(`Commands of ${client.user.username}`)
        .setColor('#2F3136')
        .setDescription('**Please Select a category to view all its commands**')
        .addField('INFORMATION',`[**ARBOTIX DEVELOPMENT**](https://discord.gg/7wmb5x7qp4)\n[**HJ GAMING**](https://discord.gg/7wmb5x7qp4)`,)
        .setTimestamp()
        .setFooter(`Requested by ${interaction.user.username} | Arbotix Devlopment`, interaction.user.displayAvatarURL());
        
    message.channel.send({ embeds: [embed] }); 
  }
}
