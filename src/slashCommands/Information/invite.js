const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get my invite link to join your servers!",

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

         const mainPage = new MessageEmbed()
             .setColor(client.embedColor)
            .setDescription(`click [this link](https://discord.com/api/oauth2/authorize?client_id=862989897954623500&permissions=1634503490528&scope=bot%20applications.commands)`)
           await interaction.followUp({embeds: [mainPage]})
    }
		}
