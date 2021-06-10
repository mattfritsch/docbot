const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'tft',
            memberName : 'tft',
            group : 'games',
            aliases: ['teamfighttactics'],
            description: 'Demande de partie sur TeamFightTactics',
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
            .setColor(`PURPLE`)
            .setTitle(`Qui veut jouer à TFT ?`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Je vous propose de jouer à TFT, tu veux bien ? Répond grâce aux réactions !`)
            .setFooter(`Merci de répondre assez vite c'est cool`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://media.giphy.com/media/WtGfzfMydwxFJlwiBz/giphy.gif')
            .setThumbnail('https://www.gamosaurus.com/wp-content/uploads/Teamfight-Tactics/set-3/vignettes/teamfight-tactics-tft-galaxies-set-3-tier-list-meilleures-compositions-champions-objets-synergies.jpg')
            .setTimestamp(Date())

            .addField(`Jour :`, `${day}`, true)
            .addField(`A :`, `${hour}`, true)

        const replyMsg = await msg.say(embed);
        replyMsg.react('✅')
        replyMsg.react('❌')
    }
};