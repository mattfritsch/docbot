const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command{
    constructor(client) {
        super(client, {
            name : 'reply',
            memberName: 'reply',
            group : 'divers',
            description : 'Reply',
            clientPermissions : ['SEND_MESSAGES'],
                throttling:{
                    usages:2,
                    duration: 10,
                },
            args:[
                {
                    key: 'text',
                    prompt:'Quel texte voulez-vous que le bot réponde ?',
                    type:'string',
                },
            ],
        });
    }
    async run(msg, { text}){
        msg.say(`Votre texte est : ${text}`);
    }
}