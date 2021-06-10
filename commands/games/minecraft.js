const { Command } = require('discord.js-commando');
const Discord = require ('discord.js');

module.exports = class EmbedCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'mc',
            memberName : 'mc',
            group : 'games',
            aliases: ['minecraft', 'bedwars'],
            description: 'Demande de partie sur Minecraft',
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
            .setColor(`GREEN`)
            .setTitle(`Qui veut jouer à Minecraft ?`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mxtserv.com/fr/')
            .setDescription(`Je vous propose de jouer à Minecraft, tu veux bien ? Répond grâce aux réactions !`)
            .setFooter(`Merci de répondre assez vite c'est cool`, `${this.client.user.displayAvatarURL()}`)
            .setImage('https://media.giphy.com/media/utgF8zIg13jhu/giphy.gif')
            .setThumbnail('https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg')
            .setTimestamp(Date())

            .addField(`Jour :`, `${day}`, true)
            .addField(`A :`, `${hour}`, true)

        const replyMsg = await msg.say(embed);
        replyMsg.react('✅')
        replyMsg.react('❌')
    }
};