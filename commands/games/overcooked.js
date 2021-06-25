const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'overcooked',
            memberName : 'overcooked',
            group : 'games',
            aliases: ['over', 'overcock', 'overcook'],
            description: 'Demande de partie sur OverCooked',
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
            .setColor(`ORANGE`)
            .setTitle(`Qui veut jouer à OverCooked ?`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Je vous propose de jouer à OverCooked, tu veux bien ? Répond grâce aux réactions !`)
            .setFooter(`Merci de répondre assez vite c'est cool`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://media.giphy.com/media/YRsrtIE5yiKZ1QWkfk/giphy.gif')
            .setThumbnail('https://www.gamereactor.eu/media/44/bumovercookedlogo_2054443b.png')
            .setTimestamp(Date())

            .addField(`Jour :`, `${day}`, true)
            .addField(`A :`, `${hour}`, true)

        const replyMsg = await msg.say(embed);
        replyMsg.react('✅')
        replyMsg.react('❌')
    }
};