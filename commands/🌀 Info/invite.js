const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'get my invite link',
    useage: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let invite = new MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle(client.user.username)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.username)
            .setDescription(`\`Click Below On Invite Link\``)
            .addField("**__BOT BY:__**", `
                >>> <@708176028442296420> \`ƉĦɌɄVツ#8276\` [\`INVITE\`]https://discord.com/oauth2/authorize?client_id=815096241104486401&permissions=37219648&scope=bot)
                `)
            .setFooter("Made By ƉĦɌɄVツ#8276")

        message.channel.send(invite)
    }
}