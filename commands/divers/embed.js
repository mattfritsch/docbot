const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'embed',
            memberName : 'embed',
            group : 'divers',
            description: 'Send an embed message',
            ownerOnly: true,
            clientPermissions:['SEND_MESSAGES', 'EMBED_LINKS'],
            throttling : {
                usages: 2,
                duration: 10,
            },
        });
    }
    async run(msg){
        const embed = new Discord.MessageEmbed(); //création de l'embed

        embed
            .setColor(`BLUE`)
            .setTitle(`Présentation de Matthieu le gros beau gosse`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Matthieu est le créateur du bot discord intitulé Mini Matthieu. Ils sont très beau.`)
            .setFooter(`C'est bien Matthieu le gros bg qui l'a créé`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkyHhmdt9F2-A93MxVy7xyFQI50iMEz_qfg&usqp=CAU')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkyHhmdt9F2-A93MxVy7xyFQI50iMEz_qfg&usqp=CAU')

        const replyMsg = await msg.say(embed);
        replyMsg.react('❤')
    }
};