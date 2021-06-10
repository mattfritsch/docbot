const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'gta',
            memberName : 'gta',
            group : 'games',
            aliases: ['gta5', 'gtav',],
            description: 'Demande de partie sur GTA V',
            clientPermissions:['SEND_MESSAGES', 'EMBED_LINKS'],
            throttling : {
                usages: 2,
                duration: 10,
            },
            args:[
                {
                    key: 'day',
                    prompt:'Quel jour vous voulez jouer ?',
                    type:'string',
                },
                {
                    key: 'hour',
                    prompt:'Et à quelle heure ?',
                    type:'string',
                },
            ],
        });
    }
    async run(msg, {day, hour}){
        const embed = new Discord.MessageEmbed(); //création de l'embed

        embed
            .setColor(`DARK_RED`)
            .setTitle(`Qui veut jouer à GTA V ?`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Je vous propose de jouer à GTA V, tu veux bien ? Répond grâce aux réactions !`)
            .setFooter(`Merci de répondre assez vite c'est cool`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://media.giphy.com/media/3oEduGzkdvam26MrXG/giphy.gif')
            .setThumbnail('https://www.fredzone.org/wp-content/uploads/2020/05/gta-6.jpg')
            .setTimestamp(Date())

            .addField(`Jour :`, `${day}`, true)
            .addField(`A :`, `${hour}`, true)

        const replyMsg = await msg.say(embed);
        replyMsg.react('✅')
        replyMsg.react('❌')
    }
};