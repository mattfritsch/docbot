const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'cod',
            memberName : 'cod',
            group : 'games',
            aliases: ['callof', 'callofduty', 'coldwar', 'cw', 'warzone'],
            description: 'Demande de partie sur Call of Duty',
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
            .setColor(`DARK_GREY`)
            .setTitle(`Qui veut jouer à Call of Duty ?`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Je vous propose de jouer à Call of Duty, tu veux bien ? Répond grâce aux réactions !`)
            .setFooter(`Merci de répondre assez vite c'est cool`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://media.giphy.com/media/cEfIIUkLVUZfngrIgv/giphy.gif')
            .setThumbnail('https://static.posters.cz/image/1300/affiches-et-posters/call-of-duty-black-ops-cold-war-split-i100281.jpg')
            .setTimestamp(Date())

            .addField(`Jour :`, `${day}`, true)
            .addField(`A :`, `${hour}`, true)

        const replyMsg = await msg.say(embed);
        replyMsg.react('✅')
        replyMsg.react('❌')
    }
};